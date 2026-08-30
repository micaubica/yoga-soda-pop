import "./boutique.css";

const drops = [
  { image: "/assets/pink-girl-hero.png", title: "Vanilla Café Look", price: "$75.25", tone: "rose" },
  { image: "/assets/yoga-girls-transparent.png", title: "Cosmic Star Collection", price: "$62.00", tone: "violet" },
  { image: "/assets/yoga-cards-cover.png", title: "Purple Dream Set", price: "$68.00", tone: "purple" },
  { image: "/assets/tree-pose-card.png", title: "Holographic Pop Look", price: "$58.00", tone: "blue" },
];

const worlds = [
  ["🎀", "Kawaii & Lolita"], ["✨", "K-Pop Inspired"], ["💗", "Accessories"], ["👜", "Bags"],
  ["💎", "Jewelry"], ["🎀", "Hair & Hats"], ["👟", "Shoes"], ["🧘", "Yoga Pop"],
];

export default function Home() {
  return <main className="boutique-home">
    <header className="boutique-header">
      <a className="boutique-brand" href="/" aria-label="Yoga Soda Pop home"><img src="/assets/yoga-soda-pop-logo-transparent.png" alt="Yoga Soda Pop" /></a>
      <nav aria-label="Main navigation"><a href="#shop">SHOP</a><a href="#looks">SHOP THE LOOKS</a><a href="#accessories">ACCESSORIES</a><a href="/beats">MUSIC</a><a href="/about">ABOUT</a></nav>
      <a className="boutique-shop-link" href="/shop">♡</a>
    </header>

    <section className="boutique-hero">
      <div className="hero-candy candy-a"/><div className="hero-candy candy-b"/><div className="hero-candy candy-c"/>
      <img className="hero-girls hero-girls-left" src="/assets/yoga-girls-transparent.png" alt="Yoga Soda Pop girls" />
      <div className="boutique-hero-copy">
        <p className="boutique-kicker">FASHION · MUSIC · POP FANTASY</p>
        <h1>YOGA SODA POP</h1>
        <p>Fashion. Music. Pop Fantasy.</p>
        <div className="boutique-actions"><a href="#shop">SHOP THE LOOKS</a><a href="/beats">LISTEN TO MUSIC</a></div>
      </div>
      <img className="hero-girl-single" src="/assets/pink-girl-hero.png" alt="Yoga Soda Pop character" />
    </section>

    <section className="boutique-drops" id="shop">
      <div className="boutique-heading"><span>✦ NEW DROPS</span><h2>New Drops</h2></div>
      <div className="drop-grid">{drops.map((drop) => <a className={`drop-card ${drop.tone}`} href="/shop" key={drop.title}><div className="drop-art"><img src={drop.image} alt="" /></div><h3>{drop.title}</h3><p>{drop.price}</p><b>SHOP NOW</b></a>)}</div>
    </section>

    <section className="boutique-worlds" id="accessories">
      <div className="boutique-heading"><h2>Shop by World</h2></div>
      <div className="world-pill-grid">{worlds.map(([icon,title]) => <a href={title === "Yoga Pop" ? "/kids" : "/shop"} key={title}><span>{icon}</span><h3>{title}</h3></a>)}</div>
    </section>

    <section className="shop-the-look" id="looks">
      <div className="look-copy"><span>♡ SHOP THE STORY</span><h2>Shop the Look</h2><p>See a style you love in the Yoga Soda Pop universe? Discover curated fashion and accessories with the same dreamy energy.</p><a href="/shop">DISCOVER THE LOOKS</a></div>
      <div className="look-collage"><div><img src="/assets/pink-girl-hero.png" alt="Vanilla Café look"/><small>VANILLA CAFÉ</small></div><div><img src="/assets/yoga-girls-transparent.png" alt="Cosmic Pop look"/><small>COSMIC POP</small></div><div><img src="/assets/yoga-cards-cover.png" alt="Purple Dream look"/><small>PURPLE DREAM</small></div></div>
    </section>

    <section className="boutique-music">
      <div className="music-copy"><span>♫ YOGA SODA POP BEATS</span><h2>Music for your pop universe.</h2><p>Original songs, animated videos and dreamy soundtracks.</p><div className="music-buttons"><a href="/beats">LISTEN NOW</a></div></div>
      <a className="music-video" href="https://youtube.com/@yogasodapopbeats" target="_blank" rel="noreferrer"><img src="https://i.ytimg.com/vi/U9fPJENBpxw/hqdefault.jpg" alt="Yoga Soda Pop Beats music video"/><span>▶</span></a>
      <div className="music-platforms"><a href="https://open.spotify.com/artist/6cuzPp7tY0HYgngxwuKdg4" target="_blank" rel="noreferrer">♫ Spotify</a><a href="https://music.apple.com/us/artist/yoga-soda-pop-beats/6797212309" target="_blank" rel="noreferrer">♪ Apple Music</a><a href="https://youtube.com/@yogasodapopbeats" target="_blank" rel="noreferrer">▶ YouTube</a></div>
    </section>

    <section className="trust-strip"><span>🌍 WORLDWIDE LINKS</span><span>♡ CURATED PICKS</span><span>↗ EASY SHOPPING</span><span>✦ YOGA SODA POP</span></section>
    <section className="affiliate-note"><b>Affiliate disclosure:</b><p>Some shop links may earn Yoga Soda Pop a commission at no extra cost to you.</p></section>
    <footer className="boutique-footer"><div><img src="/assets/yoga-soda-pop-logo-transparent.png" alt="Yoga Soda Pop"/><p>Fashion, music, movement and pop fantasy.</p></div><div><b>Explore</b><a href="/shop">Shop</a><a href="/kids">Yoga</a><a href="/beats">Music</a><a href="/about">About</a></div><div><b>Follow</b><a href="https://instagram.com/yogasodapop">Instagram</a><a href="https://youtube.com/@yogasodapopbeats">YouTube</a></div><small>© 2026 Yoga Soda Pop</small></footer>
  </main>;
}
