import "./boutique.css";

const drops = [
  { image: "/assets/pink-girl-hero.png", title: "Vanilla Café Look", price: "$75.25", tone: "rose" },
  { image: "/assets/yoga-girls-transparent.png", title: "Cosmic Star Collection", price: "$62.00", tone: "violet" },
  { image: "/assets/yoga-cards-cover.png", title: "Purple Dream Set", price: "$68.00", tone: "purple" },
  { image: "/assets/tree-pose-card.png", title: "Holographic Pop Look", price: "$58.00", tone: "blue" },
];

const worlds = [
  ["🎀", "Kawaii & Lolita"], ["✨", "K-Pop Inspired"], ["💗", "Accessories"], ["👜", "Bags"],
  ["💎", "Jewelry"], ["🎀", "Hair & Hats"], ["👟", "Shoes"], ["👗", "Women"], ["🧸", "Kids"],
];

export default function Home() {
  return <main className="boutique-home">
    <header className="boutique-header">
      <a className="boutique-brand" href="/" aria-label="Yoga Soda Pop home"><img src="/assets/yoga-soda-pop-logo-transparent.png" alt="Yoga Soda Pop" /></a>
      <nav aria-label="Main navigation"><a href="#shop">SHOP</a><a href="#looks">SHOP THE LOOKS</a><a href="#accessories">ACCESSORIES</a><a href="/beats">MUSIC</a><a href="/about">ABOUT</a></nav>
      <a className="boutique-shop-link" href="/shop" aria-label="Open shop">♡</a>
    </header>

    <section className="boutique-hero">
      <div className="hero-candy candy-a"/><div className="hero-candy candy-b"/><div className="hero-candy candy-c"/>
      <img className="hero-girls hero-girls-left" src="/assets/yoga-girls-transparent.png" alt="Yoga Soda Pop girls" />
      <div className="boutique-hero-copy">
        <h1>YOGA SODA POP</h1>
        <p>Fashion. Music. Pop Fantasy.</p>
        <div className="boutique-actions"><a href="#shop">SHOP THE LOOKS</a><a href="/beats">LISTEN TO MUSIC</a></div>
      </div>
      <img className="hero-girl-single" src="/assets/pink-girl-hero.png" alt="Yoga Soda Pop character" />
    </section>

    <section className="boutique-main" id="shop">
      <div className="drops-panel">
        <div className="section-title-row"><h2>✦ NEW DROPS ✦</h2><a href="/shop">VIEW ALL →</a></div>
        <div className="drop-grid">{drops.map((drop) => <a className={`drop-card ${drop.tone}`} href="/shop" key={drop.title}><div className="drop-art"><img src={drop.image} alt="" /></div><h3>{drop.title}</h3><p>{drop.price}</p><b>SHOP NOW →</b></a>)}</div>
      </div>

      <aside className="worlds-panel" id="accessories">
        <h2>✦ SHOP BY WORLD ✦</h2>
        <div className="world-pill-grid">{worlds.map(([icon,title]) => <a href="/shop" key={title}><span>{icon}</span><h3>{title}</h3></a>)}</div>
      </aside>
    </section>

    <section className="compact-look" id="looks">
      <div><span>SHOP THE LOOK</span><h2>See it. Style it. Love it.</h2><p>Curated fashion and accessories inspired by the looks from our videos.</p><a href="/shop">BROWSE LOOKS →</a></div>
      <img src="/assets/pink-girl-hero.png" alt="Featured Yoga Soda Pop look" />
      <div className="look-list"><a href="/shop">Vanilla Café <b>SHOP</b></a><a href="/shop">Cosmic Star <b>SHOP</b></a><a href="/shop">Purple Dream <b>SHOP</b></a></div>
    </section>

    <section className="boutique-music">
      <div className="music-card"><img src="/assets/pink-girl-hero.png" alt="Yoga Soda Pop Beats"/><div><small>New Release</small><h2>Cosmic Dreams</h2><p>New music, new energy!</p><a href="/beats">LISTEN NOW</a></div></div>
      <a className="music-video" href="https://youtube.com/@yogasodapopbeats" target="_blank" rel="noreferrer"><img src="https://i.ytimg.com/vi/U9fPJENBpxw/hqdefault.jpg" alt="Yoga Soda Pop Beats music video"/><span>▶</span></a>
      <div className="music-platforms"><h2>🎧 YOGA SODA POP BEATS</h2><div><a href="https://open.spotify.com/artist/6cuzPp7tY0HYgngxwuKdg4" target="_blank" rel="noreferrer">♫ Spotify</a><a href="https://music.apple.com/us/artist/yoga-soda-pop-beats/6797212309" target="_blank" rel="noreferrer">♪ Apple Music</a><a href="https://youtube.com/@yogasodapopbeats" target="_blank" rel="noreferrer">▶ YouTube</a></div></div>
    </section>

    <section className="trust-strip"><span>🌍 WORLDWIDE LINKS</span><span>♡ CURATED PICKS</span><span>↗ EASY SHOPPING</span><span>✦ SUPPORT</span></section>
    <section className="affiliate-note"><b>Affiliate disclosure:</b><p>Some shop links may earn Yoga Soda Pop a commission at no extra cost to you.</p></section>
    <footer className="boutique-footer"><div><img src="/assets/yoga-soda-pop-logo-transparent.png" alt="Yoga Soda Pop"/><p>Fashion, music, movement and pop fantasy.</p></div><div><b>Explore</b><a href="/shop">Shop</a><a href="/kids">Yoga</a><a href="/beats">Music</a><a href="/about">About</a></div><div><b>Follow</b><a href="https://instagram.com/yogasodapop">Instagram</a><a href="https://youtube.com/@yogasodapopbeats">YouTube</a></div><small>© 2026 Yoga Soda Pop</small></footer>
  </main>;
}
