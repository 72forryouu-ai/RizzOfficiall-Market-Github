/* ============ KONFIGURASI ============ */
const CONFIG = {
  waNumber: "6281234567890",        // Ganti nomor WA kamu (format 62xxx)
  telegramBotToken: "8903581922:AAEvLyy0cNMH7JqkjYVq9XEvpjFX5zd8zKQ", // Token dari @BotFather
  telegramChatId: "rizzShinkai.t.me"       // Chat ID kamu (dapat dari @userinfobot)
};

/* ============ KERANJANG ============ */
let cart = [];

const productGrid = document.getElementById('productGrid');
const cartItemsEl = document.getElementById('cartItems');
const totalPriceEl = document.getElementById('totalPrice');

document.querySelectorAll('.card').forEach(card => {
  card.querySelector('.btn-add').addEventListener('click', () => {
    const id = card.dataset.id;
    const name = card.dataset.name;
    const price = parseInt(card.dataset.price);
    addToCart(id, name, price);
  });
});

function addToCart(id, name, price) {
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty++;
  else cart.push({ id, name, price, qty: 1 });
  renderCart();
}

function renderCart() {
  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<p class="empty">Belum ada item.</p>';
    totalPriceEl.textContent = 'Rp 0';
    return;
  }
  cartItemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div>
        <strong>${item.name}</strong><br>
        <small>Rp ${item.price.toLocaleString('id-ID')}</small>
      </div>
      <div class="qty-controls">
        <button class="qty-btn" onclick="changeQty('${item.id}', -1)">−</button>
        <span>${item.qty}</span>
        <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
      </div>
    </div>
  `).join('');

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  totalPriceEl.textContent = 'Rp ' + total.toLocaleString('id-ID');
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  renderCart();
}

/* ============ FORMAT PESAN ============ */
function buildMessage() {
  const name = document.getElementById('custName').value.trim() || '-';
  const address = document.getElementById('custAddress').value.trim() || '-';
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  let msg = `🛒 *PESANAN BARU*\n\n`;
  msg += `👤 Nama: ${name}\n`;
  msg += `📍 Alamat: ${address}\n\n`;
  msg += `📦 *Detail Pesanan:*\n`;
  cart.forEach(i => {
    msg += `• ${i.name} x${i.qty} = Rp ${(i.price * i.qty).toLocaleString('id-ID')}\n`;
  });
  msg += `\n💰 *Total: Rp ${total.toLocaleString('id-ID')}*\n\n`;
  msg += `Terima kasih 🙏`;
  return msg;
}

/* ============ ORDER WHATSAPP ============ */
document.getElementById('orderWA').addEventListener('click', () => {
  if (cart.length === 0) return alert('Keranjang masih kosong!');
  const msg = buildMessage();
  const url = `https://wa.me/${CONFIG.waNumber}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
});

/* ============ ORDER TELEGRAM ============ */
document.getElementById('orderTG').addEventListener('click', async () => {
  if (cart.length === 0) return alert('Keranjang masih kosong!');
  const msg = buildMessage();

  // Opsi 1: kirim via Bot API (butuh token & chat id)
  if (CONFIG.telegramBotToken !== "8903581922:AAEvLyy0cNMH7JqkjYVq9XEvpjFX5zd8zKQ") {
    try {
      const res = await fetch(`https://api.telegram.org/bot${CONFIG.telegramBotToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CONFIG.telegramChatId,
          text: msg,
          parse_mode: 'Markdown'
        })
      });
      const data = await res.json();
      if (data.ok) {
        alert('✅ Pesanan berhasil dikirim ke Telegram!');
        cart = [];
        renderCart();
      } else {
        alert('❌ Gagal kirim ke Telegram: ' + data.description);
      }
    } catch (e) {
      alert('❌ Error: ' + e.message);
    }
  } else {
    // Fallback: buka chat Telegram langsung
    const url = `https://t.me/share/url?url=rizzShinkai${encodeURIComponent('Order')}&text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  }
});

/* ============ TEMA WARNA ============ */
const themeBtn = document.getElementById('themeBtn');
const themePanel = document.getElementById('themePanel');

themeBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  themePanel.classList.toggle('show');
});

document.querySelectorAll('.swatch').forEach(sw => {
  sw.addEventListener('click', () => {
    const color = sw.dataset.color;
    document.documentElement.style.setProperty('--accent', color);
    localStorage.setItem('themeColor', color);
  });
});

// Load tema tersimpan
const savedTheme = localStorage.getItem('themeColor');
if (savedTheme) document.documentElement.style.setProperty('--accent', savedTheme);

// Tutup panel kalau klik di luar
document.addEventListener('click', (e) => {
  if (!themePanel.contains(e.target) && e.target !== themeBtn) {
    themePanel.classList.remove('show');
  }
});

/* ============ MUSIC PLAYER ============ */
const musicBtn = document.getElementById('musicBtn');
const musicPlayer = document.getElementById('musicPlayer');
const audio = document.getElementById('audio');
const playPause = document.getElementById('playPause');

musicBtn.addEventListener('click', () => {
  musicPlayer.style.display = musicPlayer.style.display === 'none' ? 'flex' : 'none';
});

playPause.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPause.textContent = '⏸️';
  } else {
    audio.pause();
    playPause.textContent = '▶️';
  }
});

// Autoplay musik saat interaksi pertama
document.body.addEventListener('click', function once() {
  audio.volume = 0.3;
  audio.play().then(() => {
    playPause.textContent = '⏸️';
  }).catch(() => {});
  document.body.removeEventListener('click', once);
}, { once: true });