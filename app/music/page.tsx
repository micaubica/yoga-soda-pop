import "../subpages.css";
import { SiteHeader, SiteFooter, YOUTUBE_URL, SPOTIFY_URL, APPLE_MUSIC_URL, AMAZON_MUSIC_URL } from "../site-chrome";

type MusicPlatform = "youtube" | "spotify" | "apple" | "amazon";

function PlatformIcon({name}:{name:MusicPlatform}){
  if(name==="youtube") return <span className="platform-icon platform-youtube" aria-hidden="true"><svg viewBox="0 0 32 32"><rect x="3" y="7" width="26" height="18" rx="6" fill="currentColor"/><path d="M13 11.5 22 16l-9 4.5v-9Z" fill="#fff"/></svg></span>;
  if(name==="spotify") return <span className="platform-icon platform-spotify" aria-hidden="true"><svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="currentColor"/><path d="M9 12.2c5.6-1.6 11.8-.9 16.1 1.4M9.8 16.4c4.8-1.2 10.1-.6 14 1.3M10.7 20.4c4-.9 8.3-.4 11.6 1" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg></span>;
  if(name==="apple") return <span className="platform-icon platform-apple" aria-hidden="true"><svg viewBox="0 0 32 32"><rect x="4" y="4" width="24" height="24" rx="7" fill="currentColor"/><path d="M19.7 9.2v10.1a3.4 3.4 0 1 1-1.8-3V12l6-1.3v7.1a3.4 3.4 0 1 1-1.8-3v-6l-2.4.4Z" fill="#fff"/></svg></span>;
  return <span className="platform-icon platform-amazon" aria-hidden="true"><svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="currentColor"/><path d="M10.2 17.5c3.8 2.4 8.6 2.9 12.7.9M21.3 21.4l2.1-3-3.6-.1" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M12.1 14.8c.3-2.5 1.8-3.9 4.2-3.9 2.7 0 4 1.5 4 4v3.4c0 1 .3 1.5.8 2l-2.2 1.4c-.5-.5-.8-1-1-1.5-.9 1.1-2 1.6-3.4 1.6-2 0-3.4-1.2-3.4-3 0-2.3 1.8-3.5 5.4-3.5h1.1v-.5c0-1.3-.5-2-1.6-2-1 0-1.6.7-1.7 2h-2.2Zm5.5 2.2h-.8c-1.9 0-2.8.5-2.8 1.6 0 .8.6 1.3 1.5 1.3 1.3 0 2.1-.9 2.1-2.3V17Z" fill="#fff"/></svg></span>;
}

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
            <a className="sub-button music-icon-button" href={YOUTUBE_URL} target="_blank" rel="noreferrer"><PlatformIcon name="youtube"/>Watch on YouTube →</a>
            <a className="music-secondary-button music-icon-button" href={SPOTIFY_URL} target="_blank" rel="noreferrer"><PlatformIcon name="spotify"/>Listen on Spotify</a>
          </div>
        </div>
      </div>

      <h2>Listen everywhere</h2>
      <p>Choose your favorite platform and follow Yoga Soda Pop Beats for new releases.</p>
      <div className="music-platform-grid">
        <a className="music-platform-card" href={YOUTUBE_URL} target="_blank" rel="noreferrer"><div className="music-platform-heading"><PlatformIcon name="youtube"/><strong>YouTube</strong></div><span>Videos, songs & animated stories →</span></a>
        <a className="music-platform-card" href={SPOTIFY_URL} target="_blank" rel="noreferrer"><div className="music-platform-heading"><PlatformIcon name="spotify"/><strong>Spotify</strong></div><span>Stream Yoga Soda Pop Beats →</span></a>
        <a className="music-platform-card" href={APPLE_MUSIC_URL} target="_blank" rel="noreferrer"><div className="music-platform-heading"><PlatformIcon name="apple"/><strong>Apple Music</strong></div><span>Listen on Apple Music →</span></a>
        <a className="music-platform-card" href={AMAZON_MUSIC_URL} target="_blank" rel="noreferrer"><div className="music-platform-heading"><PlatformIcon name="amazon"/><strong>Amazon Music</strong></div><span>Listen on Amazon Music →</span></a>
      </div>

      <div className="music-story">
        <span className="music-label">MORE THAN MUSIC</span>
        <h2>Stories, characters & sound.</h2>
        <p>Yoga Soda Pop combines music, visual storytelling and playful fashion into one colorful world. Our songs are created to feel like part of the same universe as the characters, videos and products you see across the site.</p>
        <p>Follow the channel to catch new music videos, animated stories and future releases.</p>
        <a className="sub-button music-icon-button" href={YOUTUBE_URL} target="_blank" rel="noreferrer"><PlatformIcon name="youtube"/>Visit our YouTube channel →</a>
      </div>
    </section>
    <SiteFooter/>
  </main>;
}
