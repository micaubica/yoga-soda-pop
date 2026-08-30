import "./boutique.css";

const categories = [
  ["🎁", "New Drops", "#shop"],
  ["🎀", "Kawaii & Lolita", "/shop"],
  ["✨", "Shop the Looks", "#looks"],
  ["👜", "Bags", "/shop"],
  ["💎", "Jewelry", "/shop"],
  ["👒", "Hair & Hats", "/shop"],
  ["👟", "Shoes", "/shop"],
  ["🧘", "Yoga Pop", "/kids"],
  ["🎧", "Music", "/beats"],
];

const drops = [
  { image: "/assets/pink-girl-hero.png", title: "Vanilla Café Look", price: "$75.25" },
  { image: "/assets/yoga-girls-transparent.png", title: "Cosmic Star Collection", price: "$62.00" },
  { image: "/assets/yoga-cards-cover.png", title: "Purple Dream Set", price: "$68.00" },
  { image: "/assets/tree-pose-card.png", title: "Holographic Pop Look", price: "$58.00" },
];

const steps = [
  ["♡", "Discover", "Find a look, accessory, yoga idea or song you love."],
  ["🎀", "We Curate", "We collect our favorite finds into dreamy themed edits."],
  ["🛍️", "Shop Direct", "Open the retailer through our link and shop there."],
  ["♫", "Enjoy", "Match your look with Yoga Soda Pop music and videos."],
];

export default function Home() {
  return <main className="kawaii-home">
    <div className="promo-bar">✨ Fresh finds, sweet looks &amp; new music every week ✨</div>

    <header className="kawaii-header">
      <div className="header-main">
        <a className="kawaii-brand" href="/"><img src="/assets/yoga-soda-pop-logo-transparent.png" alt="Yoga Soda Pop" /></a>
        <div className="header-search"><span>⌕</span><input aria-label="Search" placeholder="Search our world" /></div>
        <nav className="header-links"><a href="/shop">Shop</a><a href="#looks">Shop the Looks</a><a href="/beats">Music</a><a href="/about">About</a></nav>
        <div className="header-tools"><a href="/shop" aria-label="Shop">♡</a><a href="/about" aria-label="Account">♙</a></div>
      </div>
      <div className="category-nav">{categories.map(([icon,label,href]) => <a href={href} key={label}><span>{icon}</span><b>{label}</b></a>)}</div>
    </header>

    <div className="review-ribbon">💗 Yoga Soda Pop — fashion, movement, music &amp; pop fantasy 💗</div>

    <section className="kawaii-hero">
      <div className="hero-copy"><span className="hero-eyebrow">WELCOME TO OUR POP UNIVERSE</span><h1>Yoga Soda Pop</h1><p>Fashion. Music. Pop Fantasy.</p><div><a href="#shop">SHOP THE LOOKS</a><a href="/beats">LISTEN TO MUSIC</a></div></div>
      <div className="hero-art"><img src="/assets/yoga-girls-transparent.png" alt="Yoga Soda Pop girls" /></div>
    </section>

    <section className="quote-section"><div className="quote-mark">♡</div><blockquote>Colorful looks, joyful movement and music that make everyday life feel a little more magical.</blockquote><div className="mini-gallery"><img src="/assets/pink-girl-hero.png" alt=""/><img src="/assets/yoga-girls.png" alt=""/><img src="/assets/tree-pose-card.png" alt=""/><img src="/assets/yoga-cards-cover.png" alt=""/></div></section>

    <section className="how-section"><p className="section-kicker">HOW YOGA SODA POP WORKS</p><h2>Pick your kind of magic</h2><div className="how-grid">{steps.map(([icon,title,text]) => <article key={title}><div>{icon}</div><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="shop-showcase" id="shop">
      <div className="showcase-copy"><span>WHAT&apos;S IN OUR WORLD?</span><h2>New Drops</h2><p>Statement fashion, kawaii accessories and playful finds curated to match the Yoga Soda Pop universe.</p><a href="/shop">SHOP ALL LOOKS</a></div>
      <div className="product-grid">{drops.map((drop) => <a href="/shop" className="product-card" key={drop.title}><div className="product-image"><span>NEW</span><img src={drop.image} alt={drop.title}/></div><h3>{drop.title}</h3><p>{drop.price}</p><b>SHOP NOW →</b></a>)}</div>
    </section>

    <section className="look-feature" id="looks"><div className="look-image"><img src="/assets/pink-girl-hero.png" alt="Featured Yoga Soda Pop look" /></div><div><span>SHOP THE LOOK</span><h2>See it. Style it. Love it.</h2><p>Discover fashion and accessories inspired by the characters and worlds in our videos.</p><div className="look-pills"><a href="/shop">Vanilla Café</a><a href="/shop">Cosmic Star</a><a href="/shop">Purple Dream</a></div></div></section>

    <section className="music-zone"><div className="music-title"><span>🎧</span><h2>Yoga Soda Pop Beats</h2><p>Pop fantasy needs a soundtrack.</p></div><div className="album-card"><img src="/assets/pink-girl-hero.png" alt="Yoga Soda Pop Beats"/><div><small>NEW RELEASE</small><h3>Cosmic Dreams</h3><a href="/beats">LISTEN NOW</a></div></div><a className="video-card" href="https://youtube.com/@yogasodapopbeats" target="_blank" rel="noreferrer"><img src="https://i.ytimg.com/vi/U9fPJENBpxw/hqdefault.jpg" alt="Latest Yoga Soda Pop Beats video"/><span>▶</span></a><div className="platform-row"><a href="https://open.spotify.com/artist/6cuzPp7tY0HYgngxwuKdg4" target="_blank" rel="noreferrer">♫ Spotify</a><a href="https://music.apple.com/us/artist/yoga-soda-pop-beats/6797212309" target="_blank" rel="noreferrer">♪ Apple Music</a><a href="https://youtube.com/@yogasodapopbeats" target="_blank" rel="noreferrer">▶ YouTube</a></div></section>

    <section className="benefit-strip"><span>🌍 Curated worldwide links</span><span>🎀 Kawaii-first picks</span><span>↗ Shop directly with retailers</span><span>♡ New finds regularly</span></section>
    <section className="affiliate-note"><b>Affiliate disclosure:</b> Some shop links may earn Yoga Soda Pop a commission at no extra cost to you.</section>
    <footer className="kawaii-footer"><div><img src="/assets/yoga-soda-pop-logo-transparent.png" alt="Yoga Soda Pop"/><p>Fashion, music, movement and pop fantasy.</p></div><div><b>Explore</b><a href="/shop">Shop</a><a href="/kids">Yoga</a><a href="/beats">Music</a><a href="/about">About</a></div><div><b>Follow</b><a href="https://instagram.com/yogasodapop">Instagram</a><a href="https://youtube.com/@yogasodapopbeats">YouTube</a></div><small>© 2026 Yoga Soda Pop</small></footer>
  </main>;
}
