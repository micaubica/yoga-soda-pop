const kidFeatures = [
  ["🧘", "Yoga Pose Cards", "Playful illustrated poses with simple steps for home, classrooms, and studios."],
  ["🎨", "Activity Packs", "Creative movement, coloring, and screen-free activities kids can enjoy."],
  ["📱", "Instant Download", "Download once, then enjoy on a screen or print your favorite cards."],
  ["⭐", "Ages 3–12", "Friendly poses and affirmations for beginners and growing yogis."],
];
const packs = [
  ["🧘", "Pose & Affirmation Deck", "A planned 30-card printable deck for movement, confidence, and playful yoga.", "Planned"],
  ["✈", "Travel Adventure Pack", "Games, drawing, calm breaks, and movement ideas for the journey and holiday.", "In development"],
];

export default function KidsPage() {
  return <main>
    <header className="site-header"><a className="brand" href="/"><img src="/assets/yoga-soda-pop-logo-transparent.png" alt="Yoga Soda Pop" /></a><nav><a href="/">Home</a><a className="active kids-active" href="/kids">Kids</a><a href="/travel">Travel</a><a href="/beats">Beats</a><a href="/shop">Shop <span>Soon</span></a><a href="/about">About</a></nav></header>
    <section className="kids-hero page-hero">
      <div className="page-hero-copy"><p className="eyebrow mint">🧘 For kids ages 3–12</p><h1>Yoga Soda Pop<br /><em>Kids</em></h1><h2>Move, stretch &amp; play!</h2><p>Colorful yoga pose cards and activity packs designed for little movers. Make every stretch a joyful adventure.</p><div className="actions"><a className="button button-primary" href="/shop">Explore the deck</a><a className="button button-secondary" href="https://youtube.com/@yogasodapop" target="_blank" rel="noreferrer">Watch free videos</a></div></div>
      <div className="kids-hero-art"><div className="art-ring" /><img src="/assets/yoga-girls.png" alt="Yoga Soda Pop kids movement class" /><b>Instant<br />download!</b></div>
    </section>
    <section className="kids-features section"><div className="section-heading"><p className="eyebrow mint">Why kids love it</p><h2>Yoga made fizzy and fun</h2><p>Everything families need to bring movement, confidence, and imagination to life.</p></div><div className="feature-grid">{kidFeatures.map(([icon,title,text]) => <article className="feature-card" key={title}><span className="feature-icon">{icon}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="kids-packs section"><div className="section-heading"><h2>What we&apos;re creating</h2><p>Thoughtful printable play for movement at home and fun on the go.</p></div><div className="pack-grid">{packs.map(([icon,title,text,badge],i)=><article className={`pack-card pack-${i+1}`} key={title}><div className="pack-top"><span>{icon}</span><b>{badge}</b></div><div className="pack-body"><h3>{title}</h3><p>{text}</p><div><a href={i===1?"/travel":"/shop"}>Learn more →</a></div></div></article>)}</div></section>
    <section className="kids-video"><span>📺</span><h2>Watch Free Yoga Videos!</h2><p>Subscribe for free kids yoga classes, pose tutorials, and so much more.</p><strong>@yogasodapop</strong><a className="button button-light" href="https://youtube.com/@yogasodapop" target="_blank" rel="noreferrer">▻ Subscribe on YouTube</a></section>
    <section className="kids-ready"><div>⭐⭐⭐⭐⭐</div><h2>Ready to Get Moving?</h2><p>Download your first yoga pack and start the adventure!</p><div className="actions centered"><a className="button button-primary" href="/shop">◷ Shop Coming Soon!</a><a className="button button-secondary" href="/">Back to Home</a></div></section>
    <footer><img src="/assets/yoga-soda-pop-logo-transparent.png" alt="Yoga Soda Pop" /><p>Kids yoga, confidence, and joy.</p><p><a href="mailto:yogasodapop@gmail.com">yogasodapop@gmail.com</a></p></footer>
  </main>;
}
