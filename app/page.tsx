const socials = [
  { platform: "YouTube", handle: "@yogasodapop", text: "Kids yoga videos, pose tutorials, and joyful movement for the whole family.", href: "https://youtube.com/@yogasodapop", tone: "coral" },
  { platform: "YouTube", handle: "@yogasodapopbeats", text: "Original dance-pop music videos with vibrant animation and feel-good energy.", href: "https://youtube.com/@yogasodapopbeats", tone: "sky" },
  { platform: "Instagram", handle: "@yogasodapop", text: "Daily yoga inspiration, behind-the-scenes fun, and community moments.", href: "https://instagram.com/yogasodapop", tone: "orange" },
  { platform: "Instagram", handle: "@yogasodapopbeats", text: "Music drops, animated clips, and dance-pop vibes all day long.", href: "https://instagram.com/yogasodapopbeats", tone: "mint" },
];

export default function Home() {
  return <main className="home-page">
    <header className="site-header home-header">
      <a className="brand" href="/" aria-label="Yoga Soda Pop home"><img src="/assets/yoga-soda-pop-logo-transparent.png" alt="Yoga Soda Pop" /></a>
      <nav aria-label="Main navigation"><a className="active" href="/">Home</a><a href="/kids">Kids</a><a href="/travel">Travel</a><a href="/beats">Beats</a><a href="/shop">Shop <span>Soon</span></a><a href="/about">About</a></nav>
    </header>

    <section className="home-hero">
      <i className="home-dot dot-pink"/><i className="home-dot dot-blue"/><i className="home-dot dot-mint"/><i className="home-dot dot-yellow"/>
      <div className="home-hero-copy">
        <h1>Yoga. Music.<br/>Joy.</h1>
        <h2>Welcome to the Yoga Soda Pop Universe</h2>
        <p>Two amazing worlds — kids&apos; yoga and dance-pop beats — fizzing with fun, movement, and good vibes.</p>
        <div className="home-hero-actions"><a href="/kids">✦&nbsp; Yoga Soda Pop Kids</a><a href="/beats">♫&nbsp; Yoga Soda Pop Beats</a></div>
      </div>
      <div className="solo-girl-wrap"><span className="solo-glow"/><img src="/assets/pink-girl-hero.png" alt="Yoga Soda Pop pink-haired girl" /></div>
    </section>

    <section className="travel-feature">
      <div className="travel-copy"><span className="choice-tag">✈ Screen-free travel fun</span><h2>Lumi&apos;s Big Travel Adventure</h2><p>Printable games, creative activities, seated calm-down breaks, and rest-stop movement ideas for car, plane, train, hotel, and holiday days.</p><div className="travel-checks"><span>✓ Safe-while-seated activities</span><span>✓ Games for the journey and destination</span><span>✓ A4 and US Letter friendly</span></div><a href="/travel">Explore the Travel Pack →</a></div>
      <div className="travel-bubbles" aria-hidden="true"><b>CAR</b><b>PLANE</b><b>TRAIN</b><b>HOTEL</b></div>
    </section>

    <section className="two-worlds">
      <div className="home-section-heading"><h2>Two Worlds. One Universe.</h2><p>Pick your flavor and dive in!</p></div>
      <div className="world-choice-grid">
        <article className="world-choice kids-choice"><span className="choice-tag">🧘 For Kids</span><h3>Yoga Soda Pop Kids</h3><h4>Move, stretch, and play!</h4><p>Digital yoga pose cards and fun activity packs designed for little movers. Make yoga a joyful adventure for kids of all ages.</p><a href="/kids">Explore Kids&nbsp; →</a></article>
        <article className="world-choice beats-choice"><span className="choice-tag">♫ Dance-Pop Music</span><h3>Yoga Soda Pop<br/>Beats</h3><h4>Dance-pop music that moves you!</h4><p>Original dance-pop songs with animated music videos. Feel the beat, find your flow, and let the music take you somewhere amazing.</p><a href="/beats">Explore Beats&nbsp; →</a></article>
      </div>
    </section>

    <section className="home-socials">
      <div className="home-section-heading"><h2>Find Us on YouTube &amp; Instagram</h2><p>Subscribe, follow, and join the Yoga Soda Pop community!</p></div>
      <div className="social-card-grid">{socials.map(s => <a className={`home-social-card ${s.tone}`} href={s.href} target="_blank" rel="noreferrer" key={s.handle+s.platform}><small>{s.platform === "YouTube" ? "▻" : "◎"}&nbsp; {s.platform}</small><h3>{s.handle}</h3><p>{s.text}</p><b>Follow&nbsp; →</b></a>)}</div>
    </section>

    <section className="join-universe"><i/><i/><i/><i/><div><h2>Join the Yoga Soda<br/>Pop Universe</h2><p>Pick your flavor — kids&apos; yoga or dance-pop beats — and dive in!</p><div className="home-hero-actions"><a href="/shop">✦&nbsp; Shop Kids Yoga Cards</a><a href="/beats">♫&nbsp; Listen to Beats</a></div></div></section>

    <footer className="home-footer"><div className="footer-grid"><div><h3>🫧 Yoga Soda Pop</h3><p>Where yoga meets music and joy bubbles up — kids&apos; yoga, travel play, and dance-pop beats in one fizzy universe.</p></div><div><h3>Explore</h3><a href="/kids">Kids Yoga</a><a href="/travel">Travel Pack</a><a href="/beats">Beats</a><a href="/shop">Shop</a><a href="/about">About</a></div><div><h3>Follow Along</h3><a href="https://youtube.com/@yogasodapop">▻ @yogasodapop</a><a href="https://youtube.com/@yogasodapopbeats">▻ @yogasodapopbeats</a><a href="https://instagram.com/yogasodapop">◎ @yogasodapop</a><a href="https://instagram.com/yogasodapopbeats">◎ @yogasodapopbeats</a></div></div><div className="footer-bottom"><a href="mailto:yogasodapop@gmail.com">yogasodapop@gmail.com</a><span>© 2026 Yoga Soda Pop. All rights reserved.</span></div></footer>
  </main>;
}
