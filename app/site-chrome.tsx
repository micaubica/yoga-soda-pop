export const YOUTUBE_URL = "https://www.youtube.com/@yogasodapopbeats";
export const INSTAGRAM_URL = "https://www.instagram.com/yogasodapop/";
export const SPOTIFY_URL = "https://open.spotify.com/artist/6cuzPp7tY0HYgngxwuKdg4";
export const APPLE_MUSIC_URL = "https://music.apple.com/us/artist/yoga-soda-pop-beats/6797212309";
export const AMAZON_MUSIC_URL = "https://www.amazon.com/music/player/artists/B0HCLW4V78/yoga-soda-pop-beats";

function FooterSocialIcon({name}:{name:"instagram"|"youtube"}){
  if(name==="instagram") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.9"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.9"/><circle cx="17.4" cy="6.7" r="1.1" fill="currentColor"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="4.5" fill="currentColor"/><path d="M10 8.5 16 12l-6 3.5v-7Z" fill="#fff"/></svg>;
}

export function SiteHeader() {
  const shopUrl=process.env.NEXT_PUBLIC_WOOCOMMERCE_PRODUCT_URL||"/shop";
  return <><div className="sub-announcement"><a href={YOUTUBE_URL} target="_blank" rel="noreferrer">♫ MUSIC LIVE NOW</a><span>│</span><a href={shopUrl}>♡ SHOP THE FIRST DROP</a></div><header className="sub-header"><a className="sub-brand" href="/"><img src="/assets/yoga-soda-pop-logo-premium.png" alt="Yoga Soda Pop" /></a><nav><a href={shopUrl}>SHOP</a><a href="/music">MUSIC</a><a href="/about">ABOUT</a></nav></header></>;
}

export function SiteFooter() {
  const shopUrl=process.env.NEXT_PUBLIC_WOOCOMMERCE_PRODUCT_URL||"/shop";
  return <footer className="sub-footer"><div><img src="/assets/yoga-soda-pop-logo-premium.png" alt="Yoga Soda Pop"/><p>Music, fashion and pop fantasy.</p><div className="sub-footer-social"><b>FOLLOW US</b><div className="sub-footer-social-icons"><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Follow Yoga Soda Pop on Instagram" title="Instagram"><FooterSocialIcon name="instagram"/></a><a href={YOUTUBE_URL} target="_blank" rel="noreferrer" aria-label="Subscribe to Yoga Soda Pop Beats on YouTube" title="YouTube"><FooterSocialIcon name="youtube"/></a></div></div><small>Yoga Soda Pop is operated by Gamers4Gamers, LLC.</small></div><div><b>SHOP</b><a href={shopUrl}>KPOP Demon Hunters Backpack</a><a href="/shipping-returns">Shipping & Returns</a><a href="/refund-policy">Refund Policy</a></div><div><b>MUSIC</b><a href="/music">Music Home</a><a href={YOUTUBE_URL} target="_blank" rel="noreferrer">YouTube</a><a href={SPOTIFY_URL} target="_blank" rel="noreferrer">Spotify</a><a href={APPLE_MUSIC_URL} target="_blank" rel="noreferrer">Apple Music</a><a href={AMAZON_MUSIC_URL} target="_blank" rel="noreferrer">Amazon Music</a></div><div><b>ABOUT</b><a href="/about">Our World</a><a href="/contact">Contact</a><a href="/privacy-policy">Privacy Policy</a><a href="/terms">Terms of Service</a><small>© 2026 Yoga Soda Pop.</small></div></footer>;
}
