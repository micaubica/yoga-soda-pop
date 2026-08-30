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

const steps = [
  ["♡", "Discover", "Find a look, accessory, yoga idea or song you love."],
  ["🎀", "We Curate", "We collect our favorite finds into dreamy themed edits."],
  ["🛍️", "Shop Direct", "Open the retailer through our link and shop there."],
  ["♫", "Enjoy", "Match your look with Yoga Soda Pop music and videos."],
];

const drops = [
  ["🎀", "Vanilla Café Edit", "Soft bows, lace and café-girl details", "rose"],
  ["🌙", "Cosmic Star Edit", "Silver, lilac and dreamy pop accessories", "violet"],
  ["👜", "Candy Bag Edit", "Cute statement bags and mini purses", "aqua"],
  ["💎", "Sparkle Edit", "Jewelry, charms and tiny finishing touches", "peach"],
];

export default function Home() {
  return <main className="pop-home">
    <div className="top-promo">♡ NEW CUTE FINDS • MUSIC • POP FANTASY ♡</div>

    <header className="pop-header">
      <div className="header-row">
        <a className="pop-logo" href="/"><img src="/assets/yoga-soda-pop-logo-transparent.png" alt="Yoga Soda Pop" /></a>
        <label className="search-box"><span>⌕</span><input aria-label="Search Yoga Soda Pop" placeholder="Search cute things..." /></label>
        <nav className="desktop-nav"><a href="/shop">Shop</a><a href="#looks">Shop the Looks</a><a href="/beats">Music</a><a href="/about">About</a></nav>
        <div className="header-icons"><a href="/shop" aria-label="Wishlist">♡</a><a href="/shop" aria-label="Shop">🛍</a></div>
      </div>
      <nav className="icon-nav" aria-label="Shop categories">
        {categories.map(([icon,label,href]) => <a href={href} key={label}><span>{icon}</span><b>{label}</b></a>)}
      </nav>
    </header>

    <div className="love-strip">★★★★★ &nbsp; A colorful little universe of fashion, movement &amp; music</div>

    <section className="hero-shell">
      <div className="hero-text">
        <span>WELCOME TO YOGA SODA POP</span>
        <h1>Cute things make every day brighter.</h1>
        <p>Discover dreamy fashion edits, playful accessories, movement and pop music in one happy universe.</p>
        <div className="hero-buttons"><a href="#shop">SHOP THE LOOKS</a><a className="secondary" href="/beats">LISTEN TO MUSIC</a></div>
      </div>
      <div className="kawaii-scene" aria-hidden="true">
        <div className="sparkle s1">✦</div><div className="sparkle s2">♡</div><div className="sparkle s3">✧</div>
        <div className="cloud cloud-a"></div><div className="cloud cloud-b"></div>
        <div className="gift-box"><div className="box-lid"><i></i></div><div className="box-body"><span>YOGA<br/>SODA POP</span></div>
          <div className="toy bunny">૮ ˶ᵔ ᵕ ᵔ˶ ა</div><div className="toy star">★</div><div className="toy bear">ʕ•ᴥ•ʔ</div><div className="toy heart">♥</div>
        </div>
      </div>
    </section>

    <section className="social-proof">
      <div className="proof-collage"><div>🎀</div><div>🍬</div><div>✨</div><div>🧸</div><div>🌸</div></div>
      <div className="proof-copy"><span>MADE FOR YOUR HAPPY PLACE</span><h2>A little bit cute. A little bit dreamy. Completely Yoga Soda Pop.</h2><p>We mix fashion inspiration, playful finds, yoga energy and our own music into one colorful world.</p></div>
    </section>

    <section className="how-it-works">
      <p className="eyebrow">HOW YOGA SODA POP WORKS</p><h2>Pick your kind of magic</h2>
      <div className="steps-grid">{steps.map(([icon,title,text]) => <article key={title}><div className="step-icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="inside-pop">
      <div className="inside-art"><div className="mini-box"><span>♡</span><b>POP<br/>PICKS</b></div><i className="float f1">🎀</i><i className="float f2">💎</i><i className="float f3">👜</i><i className="float f4">✨</i><i className="float f5">🎧</i></div>
      <div className="inside-copy"><span>WHAT&apos;S IN OUR WORLD?</span><h2>Fresh finds, styled your way.</h2><p>Explore hand-picked fashion and accessories from retailers we love, then jump into our music and movement worlds when you want another dose of pop energy.</p><a href="/shop">EXPLORE THE SHOP →</a></div>
    </section>

    <section className="drop-section" id="shop">
      <div className="section-heading"><div><span>JUST DROPPED</span><h2>New Drops</h2></div><a href="/shop">VIEW ALL →</a></div>
      <div className="drop-grid">{drops.map(([icon,title,text,tone]) => <a className={`drop-card ${tone}`} href="/shop" key={title}><div className="drop-visual"><span>{icon}</span><small>NEW</small></div><h3>{title}</h3><p>{text}</p><b>SHOP THE EDIT →</b></a>)}</div>
    </section>

    <section className="look-banner" id="looks">
      <div className="look-flatlay"><span className="flat f-a">🎀</span><span className="flat f-b">👛</span><span className="flat f-c">✨</span><span className="flat f-d">👠</span><span className="flat f-e">💗</span></div>
      <div className="look-copy"><span>SHOP THE LOOK</span><h2>See it. Style it. Love it.</h2><p>Curated edits inspired by the dreamy fashion worlds in Yoga Soda Pop videos.</p><div><a href="/shop">VANILLA CAFÉ</a><a href="/shop">COSMIC STAR</a><a href="/shop">PURPLE DREAM</a></div></div>
    </section>

    <section className="beats-zone">
      <div className="beats-intro"><span>🎧 YOGA SODA POP BEATS</span><h2>Your pop fantasy soundtrack.</h2><p>Step into our purple music room for original songs, videos and new releases.</p><a href="/beats">EXPLORE MUSIC →</a></div>
      <div className="album-art"><div className="album-orbit">✦</div><b>YOGA<br/>SODA POP<br/><em>BEATS</em></b></div>
      <a className="beats-video" href="https://youtube.com/@yogasodapopbeats" target="_blank" rel="noreferrer"><img src="https://i.ytimg.com/vi/U9fPJENBpxw/hqdefault.jpg" alt="Yoga Soda Pop Beats video"/><span>▶</span></a>
      <div className="music-links"><a href="https://open.spotify.com/artist/6cuzPp7tY0HYgngxwuKdg4" target="_blank" rel="noreferrer">♫ Spotify</a><a href="https://music.apple.com/us/artist/yoga-soda-pop-beats/6797212309" target="_blank" rel="noreferrer">♪ Apple Music</a><a href="https://youtube.com/@yogasodapopbeats" target="_blank" rel="noreferrer">▶ YouTube</a></div>
    </section>

    <section className="trust-row"><span>🌍 Worldwide retailer links</span><span>🎀 Curated picks</span><span>↗ Shop directly with partners</span><span>♡ New finds regularly</span></section>

    <section className="newsletter"><span>✦ JOIN THE POP CLUB ✦</span><h2>Cute drops in your inbox.</h2><p>New looks, music and Yoga Soda Pop releases — all in one sweet little update.</p><form><input aria-label="Email address" placeholder="Your email address" type="email"/><button type="button">JOIN THE CLUB</button></form></section>

    <section className="affiliate-note"><b>Affiliate disclosure:</b> Some shop links may earn Yoga Soda Pop a commission at no extra cost to you.</section>

    <footer className="pop-footer"><div className="footer-brand"><img src="/assets/yoga-soda-pop-logo-transparent.png" alt="Yoga Soda Pop"/><p>Fashion, music, movement and pop fantasy.</p><div className="footer-mascots">♡ ✦ ☁︎ 🎀 ✧</div></div><div><b>Explore</b><a href="/shop">Shop</a><a href="#looks">Shop the Looks</a><a href="/kids">Yoga</a><a href="/beats">Music</a></div><div><b>About</b><a href="/about">Our World</a><a href="/about">Contact</a><a href="/about">Affiliate Disclosure</a></div><div><b>Follow</b><a href="https://instagram.com/yogasodapop">Instagram</a><a href="https://youtube.com/@yogasodapopbeats">YouTube</a><small>© 2026 Yoga Soda Pop</small></div></footer>
  </main>;
}
