import "../subpages.css";
import { SiteHeader, SiteFooter, YOUTUBE_URL, SPOTIFY_URL, APPLE_MUSIC_URL, AMAZON_MUSIC_URL } from "../site-chrome";

export default function MusicPage(){
  return <main className="sub-page">
    <SiteHeader/>
    <section className="sub-hero">
      <span className="sub-kicker">YOGA SODA POP BEATS</span>
      <h1>Music made for our <span style={{color:"#ff3f8f"}}>pop world.</span></h1>
      <p>Original songs, animated stories and bright K-pop energy from Yoga Soda Pop Beats.</p>
    </section>
    <section className="sub-content music-page-content">
      <div className="music-feature">
        <div className="music-video-wrap">
          <iframe src="https://www.youtube.com/embed/fr1hD_pc9tw?rel=0" title="Our Game by Yoga Soda Pop Beats" allowFullScreen />
        </div>
        <div className="music-copy">
          <span className="music-label">FEATURED VIDEO</span>
          <h2>Our Game</h2>
          <p>Step into the Yoga Soda Pop universe with our original music and animated storytelling.</p>
          <p>Watch the full video on YouTube or listen on your favorite music platform.</p>
          <div className="music-cta-row">
            <a className="sub-button" href={YOUTUBE_URL} target="_blank" rel="noreferrer">Watch on YouTube →</a>
            <a className="music-secondary-button" href={SPOTIFY_URL} target="_blank" rel="noreferrer">Listen on Spotify</a>
          </div>
        </div>
      </div>

      <h2>Listen everywhere</h2>
      <p>Choose your favorite platform and follow Yoga Soda Pop Beats for new releases.</p>
      <div className="music-platform-grid">
        <a className="music-platform-card" href={YOUTUBE_URL} target="_blank" rel="noreferrer"><strong>YouTube</strong><span>Videos, songs & animated stories →</span></a>
        <a className="music-platform-card" href={SPOTIFY_URL} target="_blank" rel="noreferrer"><strong>Spotify</strong><span>Stream Yoga Soda Pop Beats →</span></a>
        <a className="music-platform-card" href={APPLE_MUSIC_URL} target="_blank" rel="noreferrer"><strong>Apple Music</strong><span>Listen on Apple Music →</span></a>
        <a className="music-platform-card" href={AMAZON_MUSIC_URL} target="_blank" rel="noreferrer"><strong>Amazon Music</strong><span>Listen on Amazon Music →</span></a>
      </div>

      <div className="music-story">
        <span className="music-label">MORE THAN MUSIC</span>
        <h2>Stories, characters & sound.</h2>
        <p>Yoga Soda Pop combines music, visual storytelling and playful fashion into one colorful world. Our songs are created to feel like part of the same universe as the characters, videos and products you see across the site.</p>
        <p>Follow the channel to catch new music videos, animated stories and future releases.</p>
        <a className="sub-button" href={YOUTUBE_URL} target="_blank" rel="noreferrer">Visit our YouTube channel →</a>
      </div>
    </section>
    <SiteFooter/>
  </main>;
}
