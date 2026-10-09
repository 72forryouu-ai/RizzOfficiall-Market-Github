<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RizzOfficiall • Market</title>
<link rel="stylesheet" href="style.css">
<link href="https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>

<!-- BACKGROUND VIDEO -->
<video autoplay muted loop playsinline id="https://files.catbox.moe/cu0w84.mp4">
  <source src="https://files.catbox.moe/pfhqbf.mp3" type="video/mp4">
</video>
<div class="overlay"></div>

<!-- Dasboard • TOPS-->
<header class="glass topbar">
  <div class="logo">🍎 AutoOrder</div>
  <div class="actions">
    <button id="musicBtn" class="icon-btn" title="Musik">🎵</button>
    <button id="themeBtn" class="icon-btn" title="Ganti Tema">🎨</button>
  </div>
</header>

<!-- THEME PANEL -->
<div class="theme-panel glass" id="themePanel">
  <h4>Pilih Warna Tema</h4>
  <div class="swatches">
    <div class="swatch" data-color="#0A84FF" style="background:#0A84FF"></div>
    <div class="swatch" data-color="#FF375F" style="background:#FF375F"></div>
    <div class="swatch" data-color="#30D158" style="background:#30D158"></div>
    <div class="swatch" data-color="#BF5AF2" style="background:#BF5AF2"></div>
    <div class="swatch" data-color="#FF9F0A" style="background:#FF9F0A"></div>
    <div class="swatch" data-color="#64D2FF" style="background:#64D2FF"></div>
    <div class="swatch" data-color="#FFD60A" style="background:#FFD60A"></div>
    <div class="swatch" data-color="#FF453A" style="background:#FF453A"></div>
  </div>
</div>

<!-- MAIN CONTENT -->
<main class="container">

  <section class="hero glass">
    <h1>RizzOfficiall • Market</h1>
    <p>Pesan cepat, langsung ke Telegram & WhatsApp 🚀</p>
  </section>

  <!-- PRODUK -->
  <section class="card glass">
    <h2>Menu Produk</h2>
    <div class="grid" id="productGrid">

      <div class="card glass" data-id="1" data-name="Apps Bug Holow Execution V14" data-price="45000">
        <div class="emoji">🔥</div>
        <h3>Apps Bug Holow Execution V14</h3>
        <p class="price">Rp 45.000</p>
        <button class="btn-add">+ Tambah</button>
      </div>

      <div class="card glass" data-id="2" data-name="Apps Bug Xzhero V15" data-price="40000">
        <div class="emoji">🔥</div>
        <h3>Apps bug Xzhero V15</h3>
        <p class="price">Rp 40.000</p>
        <button class="btn-add">+ Tambah</button>
      </div>

      <div class="card glass" data-id="3" data-name="Apps Holow Execution V14" data-price="60000">
        <div class="emoji">🔥</div>
        <h3>Apps Holow Role Reseller</h3>
        <p class="price">Rp 60.000</p>
        <button class="btn-add">+ Tambah</button>
      </div>

      <div class="card glass" data-id="4" data-name="Apps bug Xzhero V15" data-price="50000">
        <div class="emoji">🔥</div>
        <h3>Apps Xzhero Role Reseller</h3>
        <p class="price">Rp 50.000</p>
        <button class="btn-add">+ Tambah</button>
      </div>

    </div>
  </section>

  <!-- CART -->
  <section class="cart glass">
    <h2>🛒 Keranjang</h2>
    <div id="cartItems" class="cart-items">
      <p class="empty">Belum ada item.</p>
    </div>
    <div class="total">
      <span>Total:</span>
      <strong id="totalPrice">Rp 0</strong>
    </div>

    <div class="customer">
      <input type="text" id="custName" placeholder="Nama kamu">
      <input type="text" id="custAddress" placeholder="Alamat / Catatan">
    </div>

    <div class="order-buttons">
      <button id="orderWA" class="btn btn-wa">📱 Order via WhatsApp</button>
      <button id="orderTG" class="btn btn-tg">✈️ Order via Telegram</button>
    </div>
  </section>

</main>

<!-- MUSIC PLAYER -->
<div class="music-player glass" id="musicPlayer">
  <div class="music-info">
    <span class="music-title">🎶 RizzOfficiall • Market</span>
  </div>
  <audio id="audio" loop>
    <source src="https://files.catbox.moe/pfhqbf.mp3" type="audio/mpeg">
  </audio>
  <div class="music-controls">
    <button id="playPause">▶️</button>
  </div>
</div>

<script src="script.js"></script>
</body>
</html>