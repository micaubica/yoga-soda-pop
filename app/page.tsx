import "./boutique.css";

const drops = [
  { icon: "🎀", title: "Vanilla Café", text: "Sweet Lolita, bows & dreamy details", href: "/shop" },
  { icon: "✨", title: "Cosmic Pop", text: "Holographic, metallic & star accessories", href: "/shop" },
  { icon: "💜", title: "Purple Dream", text: "Statement pieces with pop-star energy", href: "/shop" },
  { icon: "🌈", title: "Kawaii Color", text: "Cute bags, jewelry & playful extras", href: "/shop" },
];

const worlds = [
  ["🎀", "Kawaii & Lolita", "Sweet statement looks"], ["✨", "Accessories", "Little things, big pop"], ["👜", "Bags", "Cute carry-everywhere picks"], ["💎", "Jewelry", "Stars, hearts & sparkle"], ["🎧", "Music", "Yoga Soda Pop Beats"], ["🧘", "Yoga Pop", "Movement with personality"],
];

export default function Home() {
  return <main className="boutique-home">
    <header className="boutique-header"><a className="boutique-brand" href="/" aria-label="Yoga Soda Pop home"><img src="/assets/yoga-soda-pop-logo-transparent.png" alt="Yoga Soda Pop" /></a><nav aria-label="Main navigation"><a href="#shop">Shop</a><a href="#looks">Shop the Looks</a><a href="#accessories">Accessories</a><a href="/kids">Yoga</a><a href="/beats">Music</a><a href="/about">About</a></nav><a className="boutique-shop-link" href="/shop" aria-label="Open shop">♡ Shop</a></header>

    <section className="boutique-hero"><div className="boutique-hero-art"><span className="boutique-orb orb-a"/><span className="boutique-orb orb-b"/><img src="/assets/yoga-girls-transparent.png" alt="Yoga Soda Pop girls" /></div><div className="boutique-hero-copy"><p className="boutique-kicker">Fashion · Music · Movement · Pop Fantasy</p><h1>Yoga Soda Pop</h1><p>A colorful universe of statement accessories, dreamy looks, joyful movement and original pop music.</p><div className="boutique-actions"><a href="#shop">Shop the Looks</a><a href="/beats">Listen to Music</a></div></div></section>

    <section className="boutique-drops" id="shop"><div className="boutique-heading"><span>✦ Fresh from the universe</span><h2>New Drops</h2><p>Curated pieces for turning everyday life into your own pop world.</p></div><div className="drop-grid">{drops.map((drop, index) => <a className={`drop-card drop-${index + 1}`} href={drop.href} key={drop.title}><div className="drop-art"><span>{drop.icon}</span></div><small>SHOP THE EDIT</small><h3>{drop.title}</h3><p>{drop.text}</p><b>Explore →</b></a>)}</div></section>

    <section className="boutique-worlds" id="accessories"><div className="boutique-heading"><span>Pick your flavor</span><h2>Shop by World</h2></div><div className="world-pill-grid">{worlds.map(([icon,title,text]) => <a href={title === "Music" ? "/beats" : title === "Yoga Pop" ? "/kids" : "/shop"} key={title}><span>{icon}</span><h3>{title}</h3><p>{text}</p></a>)}</div></section>

    <section className="shop-the-look" id="looks"><div className="look-copy"><span>♡ Curated, not ordinary</span><h2>Shop the Look</h2><p>See a style you love in the Yoga Soda Pop universe? Discover hand-picked fashion and accessories that capture the same dreamy energy.</p><div className="look-tags"><b>Sweet Lolita</b><b>Kawaii</b><b>Holographic</b><b>Pop Star</b></div><a href="/shop">Discover the looks →</a></div><div className="look-collage"><div>🎀<small>Vanilla Café</small></div><div>🌟<small>Cosmic Pop</small></div><div>💜<small>Purple Dream</small></div></div></section>

    <section className="yoga-pop-strip"><div><span>🧘 YOGA POP</span><h2>Movement can be colorful too.</h2><p>Kids yoga, playful movement and bright feel-good products — the original Yoga Soda Pop world is still part of the magic.</p><a href="/kids">Explore Yoga Pop →</a></div><img src="/assets/yoga-girls-transparent.png" alt="Yoga Soda Pop yoga characters" /></section>

    <section className="boutique-music"><div className="music-copy"><span>♫ YOGA SODA POP BEATS</span><h2>Wear the look.<br/>Play the soundtrack.</h2><p>Original dance-pop songs and animated music videos from the other side of the Yoga Soda Pop universe.</p><div className="music-buttons"><a href="/beats">Explore Music</a><a href="https://youtube.com/@yogasodapopbeats" target="_blank" rel="noreferrer">YouTube ↗</a></div></div><div className="music-player"><div className="record">♫</div><div><small>NOW PLAYING</small><h3>Yoga Soda Pop Beats</h3><p>Pop fantasy in every beat</p><a href="https://open.spotify.com/artist/6cuzPp7tY0HYgngxwuKdg4" target="_blank" rel="noreferrer">Listen on Spotify →</a></div></div></section>

    <section className="affiliate-note"><b>Curated with love ♡</b><p>Some shop links may be affiliate links. If you purchase through them, Yoga Soda Pop may earn a commission at no extra cost to you.</p></section>
    <footer className="boutique-footer"><div><img src="/assets/yoga-soda-pop-logo-transparent.png" alt="Yoga Soda Pop"/><p>Fashion, movement, music and pop fantasy in one fizzy universe.</p></div><div><b>Explore</b><a href="/shop">Shop</a><a href="/kids">Yoga</a><a href="/beats">Music</a><a href="/about">About</a></div><div><b>Follow</b><a href="https://instagram.com/yogasodapop">Instagram</a><a href="https://youtube.com/@yogasodapopbeats">YouTube</a><a href="mailto:yogasodapop@gmail.com">Email</a></div><small>© 2026 Yoga Soda Pop</small></footer>
  </main>;
}
