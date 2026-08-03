const tracks = [
  ["Bubble Up", "Upbeat & energetic", "A feel-good anthem made for dancing, jumping, and smiling."],
  ["Flow State", "Chill & dreamy", "A smooth track for stretching, breathing, and finding your flow."],
  ["Fizz Pop Boogie", "Dance party", "Bright pop energy that makes it impossible to sit still."],
  ["Mirror Heart", "Neon pop", "A sparkling original song with color, rhythm, and heart."],
  ["Rainbow Rush", "Joyful & bright", "A burst of sound made to celebrate everything colorful."],
  ["Starlight Stretch", "Calm & peaceful", "Gentle music for evening movement and winding down."],
];
const beatsFeatures = [["♫","Original Music","100% original dance-pop tracks."],["🎬","Animated Videos","Vibrant colorful videos for every track."],["🎧","Feel-Good Vibes","Music designed to uplift and energize."],["🌈","New Drops","Fresh tracks and videos dropping regularly."]];

export default function BeatsPage() {
  return (
    <main className="beats-page">
      <header className="site-header beats-header">
        <a className="brand" href="/" aria-label="Yoga Soda Pop home">
          <img src="/assets/yoga-soda-pop-logo-transparent.png" alt="Yoga Soda Pop" />
        </a>
        <nav aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/kids">Kids</a>
          <a className="active" href="/beats">Beats</a>
          <a href="/shop">Shop <span>Soon</span></a>
          <a href="/about">About</a>
        </nav>
      </header>

      <section className="beats-hero">
        <div className="beats-orb orb-one" />
        <div className="beats-orb orb-two" />
        <div className="beats-hero-copy">
          <p className="eyebrow sky">Dance-pop music &amp; animated videos</p>
          <h1>Yoga Soda<br />Pop Beats</h1>
          <h2>Music that moves you!</h2>
          <p>Original feel-good dance-pop songs, vibrant music videos, and colorful worlds made for movement.</p>
          <div className="actions">
            <a className="button button-coral" href="https://youtube.com/@yogasodapopbeats" target="_blank" rel="noreferrer">Watch on YouTube</a>
            <a className="button button-dark" href="https://instagram.com/yogasodapopbeats" target="_blank" rel="noreferrer">Follow on Instagram</a>
          </div>
        </div>
        <div className="equalizer" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /></div>
      </section>

      <section className="beats-special"><div className="section-heading"><h2>What Makes Beats Special</h2><p>Pure feel-good energy, every single track</p></div><div>{beatsFeatures.map(([icon,title,text])=><article key={title}><span>{icon}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="beats-story">
        <div className="play-tile"><span>▶</span><b>Original music<br />made to move</b></div>
        <div>
          <p className="eyebrow sky">Where music meets movement</p>
          <h2>Every song is a whole vibe</h2>
          <p>From upbeat anthems to dreamy flow tracks, Yoga Soda Pop Beats brings together original music, colorful animation, and joyful energy for kids, teens, and grown-ups alike.</p>
        </div>
      </section>

      <section className="tracks-section">
        <div className="section-heading"><p className="eyebrow coral">The tracks</p><h2>Press play and feel it</h2></div>
        <div className="beats-track-grid">
          {tracks.map(([title, mood, text], index) => (
            <article className={`beats-track track-${index + 1}`} key={title}>
              <span>♫</span><b>▮▰▮▰▮</b><h3>{title}</h3><small>{mood}</small><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="beats-social">
        <span>🎬</span><h2>Watch the Music Videos!</h2>
        <p>@yogasodapopbeats</p>
        <div className="actions centered">
          <a className="button button-light" href="https://youtube.com/@yogasodapopbeats" target="_blank" rel="noreferrer">YouTube</a>
          <a className="button button-ghost" href="https://instagram.com/yogasodapopbeats" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </section>
      <footer className="beats-footer"><img src="/assets/yoga-soda-pop-logo-transparent.png" alt="Yoga Soda Pop" /><p><a href="mailto:yogasodapop@gmail.com">yogasodapop@gmail.com</a></p><p>© 2026 Yoga Soda Pop</p></footer>
    </main>
  );
}
