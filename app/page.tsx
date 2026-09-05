import "./boutique.css";

const products = [
  { image: "/assets/vanilla-bear-cafe.webp", title: "Vanilla Bear Café Look", price: "$75.25" },
  { image: "/assets/cosmic-star-collection.webp", title: "Cosmic Star Collection", price: "$62.00" },
  { image: "/assets/purple-dream-set.webp", title: "Purple Dream Set", price: "$68.00" },
  { image: "/assets/holographic-pop-look.webp", title: "Holographic Pop Look", price: "$58.00" },
];

const worlds = [
  { image: "/assets/kawaii-lolita-icon.webp", label: "Kawaii & Lolita" },
  { image: "/assets/kpop-inspired-icon.webp", label: "K-Pop Inspired" },
  { image: "/assets/accessories-icon.webp", label: "Accessories" },
  { image: "/assets/bags-icon.webp", label: "Bags" },
  { image: "/assets/jewelry-icon.webp", label: "Jewelry" },
  { image: "/assets/hair-hats-icon.webp", label: "Hair & Hats" },
  { image: "/assets/shoes-icon.webp", label: "Shoes" },
  { image: "/assets/kids-icon.webp", label: "Kids" },
];

export default function Home() {
  return (
    <main className="premium-home">
      <div className="announcement">♫ MUSIC LIVE NOW &nbsp; | &nbsp; ♡ FASHION SHOP COMING SOON</div>
      <header className="premium-header">
        <a className="brand" href="/" aria-label="Yoga Soda Pop home"><img src="/assets/yoga-soda-pop-logo-premium.png" alt="Yoga Soda Pop" /></a>
        <nav><a href="#shop">SHOP <small>COMING SOON</small></a><a href="#looks">SHOP THE LOOKS <small>COMING SOON</small></a><a href="#shop">ACCESSORIES <small>COMING SOON</small></a><a href="/beats">MUSIC</a><a href="/about">ABOUT</a></nav>
        <div className="header-tools"><span>⌕</span><span>♡</span><span>♙</span></div>
      </header>
      <section className="premium-hero">
        <div className="hero-copy">
          <span className="launch-pill">FASHION SHOP COMING SOON</span>
          <h1><b>YOGA SODA POP</b>FASHION. MUSIC.<br/><em>POP FANTASY.</em></h1>
          <p>Cute things that make every day brighter. ♡</p>
          <div className="hero-ctas">
            <a className="primary" href="https://www.youtube.com/@yogasodapop" target="_blank" rel="noreferrer">▶ EXPLORE YOGA SODA POP ON YOUTUBE</a>
            <a className="secondary" href="https://www.youtube.com/@yogasodapopbeats" target="_blank" rel="noreferrer">♫ EXPLORE OUR MUSIC</a>
          </div>
        </div>
        <div className="hero-image"><img src="/assets/hero-yoga-soda-pop.webp" alt="Yoga Soda Pop pastel fashion world" /><div className="coming-card"><span>♡</span><h2>SHOP<br/><strong>COMING SOON</strong></h2><p>We’re curating the cutest fashion and accessories for you.</p></div></div>
      </section>
      <section className="main-grid">
        <div className="panel products-panel" id="shop"><div className="panel-title"><h2>NEW DROPS</h2><span>COMING SOON</span></div><div className="products-grid">{products.map((product) => <article className="product-card" key={product.title}><div className="product-photo"><img src={product.image} alt={product.title}/><span>♡</span></div><h3>{product.title}</h3><p>{product.price}</p></article>)}</div><div className="soon-strip">♡ FASHION &amp; ACCESSORIES COMING SOON — be first to know when we launch</div></div>
        <div className="panel worlds-panel" id="looks"><div className="panel-title centered"><h2>SHOP BY WORLD</h2></div><div className="world-grid">{worlds.map((world) => <div key={world.label}><img src={world.image} alt=""/><b>{world.label}</b></div>)}</div><div className="soon-strip">♡ SHOP COMING SOON — stay tuned</div></div>
        <div className="panel music-panel">
          <div className="music-heading">🎧 <b>YOGA SODA POP BEATS</b></div>
          <div className="music-release"><img src="/assets/pink-girl-hero.png" alt="Our Game by Yoga Soda Pop Beats" /><div><small>New Release</small><h2>Our Game</h2><p>Out now!</p><a href="https://www.youtube.com/watch?v=fr1hD_pc9tw" target="_blank" rel="noreferrer">LISTEN NOW</a></div></div>
          <div className="video-wrap"><iframe src="https://www.youtube.com/embed/fr1hD_pc9tw?rel=0" title="Our Game by Yoga Soda Pop Beats" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
          <div className="platforms"><a href="https://open.spotify.com/artist/6cuzPp7tY0HYgngxwuKdg4" target="_blank" rel="noreferrer">♫ Spotify</a><a href="https://music.apple.com/us/artist/yoga-soda-pop-beats/6797212309" target="_blank" rel="noreferrer">♪ Apple Music</a><a href="https://www.youtube.com/watch?v=fr1hD_pc9tw" target="_blank" rel="noreferrer">▶ YouTube</a></div>
        </div>
      </section>
      <section className="join-strip"><div><b>JOIN THE POP CLUB!</b><span>Get early access, new drops &amp; happy vibes in your inbox.</span></div><form action="mailto:yogasodapop@gmail.com?subject=Yoga%20Soda%20Pop%20Club%20Signup" method="post" encType="text/plain"><input type="email" name="email" aria-label="Email address" placeholder="Enter your email" required/><button type="submit">JOIN NOW</button></form></section>
      <section className="affiliate-note"><b>Affiliate disclosure:</b> When the shop launches, some links may earn Yoga Soda Pop a commission at no extra cost to you.</section>
      <footer className="premium-footer"><div className="footer-brand"><img src="/assets/yoga-soda-pop-logo-premium.png" alt="Yoga Soda Pop"/><p>Cute things. Happy vibes.<br/>Fashion, music and pop fantasy.</p><small>Yoga Soda Pop is operated by Gamers4Gamers, LLC.</small></div><div><b>SHOP</b><span>New Drops — Coming Soon</span><span>Shop the Looks — Coming Soon</span><span>Accessories — Coming Soon</span></div><div><b>MUSIC</b><a href="/beats">Yoga Soda Pop Beats</a><a href="https://youtube.com/@yogasodapopbeats" target="_blank" rel="noreferrer">YouTube</a><a href="https://open.spotify.com/artist/6cuzPp7tY0HYgngxwuKdg4" target="_blank" rel="noreferrer">Spotify</a></div><div><b>ABOUT &amp; SUPPORT</b><a href="/about">Our World</a><a href="mailto:yogasodapop@gmail.com">Contact</a><a href="/legal#shipping-returns">Shipping &amp; Returns</a><a href="/legal#refunds">Refund Policy</a><a href="/legal#privacy">Privacy Policy</a><a href="/legal#terms">Terms of Service</a><small>© 2026 Yoga Soda Pop. Operated by Gamers4Gamers, LLC.</small></div></footer>
    </main>
  );
}
