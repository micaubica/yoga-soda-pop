"use client";

import { useState } from "react";
import "./boutique.css";
import "./launch-overrides.css";
import "./gallery.css";

const mobileProductImages = [
  { src: "/assets/backpack-preview-front.jpg", alt: "KPOP Demon Hunters backpack front view" },
  { src: "/assets/backpack-preview-side.jpg", alt: "KPOP Demon Hunters backpack side view" },
  { src: "/assets/backpac-preview-bottom.jpg", alt: "KPOP Demon Hunters backpack bottom view" },
];

const galleryImages = [
  { src: "/assets/backpack-preview-front.jpg", alt: "KPOP Demon Hunters backpack front view" },
  { src: "/assets/backpack-preview-side.jpg", alt: "KPOP Demon Hunters backpack right side view" },
  { src: "/assets/backpack-preview-side-left.jpg", alt: "KPOP Demon Hunters backpack left side view" },
  { src: "/assets/backpac-preview-bottom.jpg", alt: "KPOP Demon Hunters backpack bottom view" },
];

/* Keep the homepage clean with three previews, while the lightbox still contains all four views. */
const homePreviewImages = [
  { ...galleryImages[0], galleryIndex: 0 },
  { ...galleryImages[1], galleryIndex: 1 },
  { ...galleryImages[3], galleryIndex: 3 },
];

type IconName = "search" | "heart" | "user" | "truck" | "shield" | "box" | "drop" | "layers" | "backpack";

function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "search") return <svg {...common}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>;
  if (name === "heart") return <svg {...common}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/></svg>;
  if (name === "user") return <svg {...common}><circle cx="12" cy="8" r="4"/><path d="M4 21c.8-4.2 3.5-6.5 8-6.5s7.2 2.3 8 6.5"/></svg>;
  if (name === "truck") return <svg {...common}><path d="M3 6h10v10H3z"/><path d="M13 10h4l4 4v2h-8z"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>;
  if (name === "shield") return <svg {...common}><path d="M12 3 5 6v5c0 4.6 2.9 8 7 10 4.1-2 7-5.4 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-5"/></svg>;
  if (name === "box") return <svg {...common}><path d="m4 7 8-4 8 4-8 4-8-4Z"/><path d="M4 7v10l8 4 8-4V7"/><path d="M12 11v10"/></svg>;
  if (name === "drop") return <svg {...common}><path d="M12 3s6 6.1 6 11a6 6 0 0 1-12 0c0-4.9 6-11 6-11Z"/></svg>;
  if (name === "layers") return <svg {...common}><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/></svg>;
  return <svg {...common}><path d="M8 8V6a4 4 0 0 1 8 0v2"/><path d="M6 8h12l2 13H4L6 8Z"/><path d="M9 12h6"/></svg>;
}

const features = [
  { icon: "drop" as IconName, image: "/assets/feature-waterproof.png", alt: "Water droplets on the pink backpack nylon fabric", title: "WATERPROOF & DURABLE", text: "15.5 oz soft nylon canvas that’s lightweight, waterproof and tear resistant." },
  { icon: "layers" as IconName, image: "/assets/feature-interior.webp", alt: "Brown backpack interior with padded laptop compartment", title: "3 SPACIOUS POCKETS", text: "Three zippered compartments for books, a laptop and everyday essentials." },
  { icon: "backpack" as IconName, image: "/assets/feature-padding.webp", alt: "Black padded mesh back panel and shoulder straps", title: "PADDED FOR COMFORT", text: "Padded mesh back panel and adjustable shoulder straps for easy carrying." },
];

export default function Home() {
  const [activeImage, setActiveImage] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const shopUrl = process.env.NEXT_PUBLIC_WOOCOMMERCE_PRODUCT_URL || "/shop";

  const showPreviousImage = () => setActiveImage((current) => (current - 1 + mobileProductImages.length) % mobileProductImages.length);
  const showNextImage = () => setActiveImage((current) => (current + 1) % mobileProductImages.length);

  const openGallery = (index: number) => {
    setGalleryIndex(index);
    setGalleryOpen(true);
  };
  const galleryPrevious = () => setGalleryIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length);
  const galleryNext = () => setGalleryIndex((current) => (current + 1) % galleryImages.length);

  return (
    <main className="premium-home launch-home">
      <div className="announcement">♫ MUSIC LIVE NOW <span>│</span> ♡ SHOP THE FIRST DROP</div>

      <header className="premium-header launch-header">
        <a className="brand" href="/" aria-label="Yoga Soda Pop home"><img src="/assets/yoga-soda-pop-logo-premium.png" alt="Yoga Soda Pop" /></a>
        <nav><a href={shopUrl}>SHOP</a><a href="#features">ACCESSORIES</a><a href="/beats">MUSIC</a><a href="/about">ABOUT</a></nav>
        <div className="header-tools" aria-label="Site tools"><span><Icon name="search" /></span><span><Icon name="heart" /></span><span><Icon name="user" /></span></div>
      </header>

      <section className="launch-hero launch-hero-v2">
        <div className="launch-copy">
          <p className="launch-eyebrow">K-POP <span>/</span> ACCESSORIES</p>
          <h1>KPOP<br />DEMON<br />HUNTERS<br /><strong>BACKPACK</strong></h1>
          <p className="launch-description"><b>Made to stand out.</b><br />Lightweight, waterproof and ready for school, travel and everyday adventures.</p>
          <a className="launch-shop-button" href={shopUrl}>Shop Now <span>→</span></a>
          <div className="trust-row">
            <div><span className="trust-icon"><Icon name="truck" size={28} /></span><p>Worldwide<br />Shipping</p></div>
            <div><span className="trust-icon"><Icon name="shield" size={28} /></span><p>Secure<br />Checkout</p></div>
            <div><span className="trust-icon"><Icon name="box" size={28} /></span><p>Easy<br />Returns</p></div>
          </div>
        </div>

        <div className="launch-product-stage launch-product-stage-v2">
          {activeImage === 0 ? (
            <img className="hero-stage-image" src="/assets/hero-product-stage3.webp" alt="KPOP Demon Hunters backpack displayed in a pink studio" />
          ) : (
            <img className="launch-main-product" src={mobileProductImages[activeImage].src} alt={mobileProductImages[activeImage].alt} />
          )}

          <div className="launch-thumbnails hero-preview-cards" aria-label="Open backpack gallery">
            {homePreviewImages.map((image) => (
              <button type="button" onClick={() => openGallery(image.galleryIndex)} key={image.src} aria-label={`Open gallery at ${image.alt}`}>
                <img src={image.src} alt="" />
              </button>
            ))}
          </div>

          <div className="mobile-gallery-nav" aria-label="Backpack image carousel">
            <button className="mobile-gallery-arrow mobile-gallery-prev" type="button" onClick={showPreviousImage} aria-label="Previous backpack view">‹</button>
            <button className="mobile-gallery-arrow mobile-gallery-next" type="button" onClick={showNextImage} aria-label="Next backpack view">›</button>
            <div className="mobile-gallery-dots" aria-label="Choose backpack view">
              {mobileProductImages.map((image, index) => (
                <button type="button" key={image.src} className={activeImage === index ? "active" : ""} onClick={() => setActiveImage(index)} aria-label={`Show ${image.alt}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="feature-band" id="features">
        {features.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <div className="feature-visual"><img src={feature.image} alt={feature.alt} /></div>
            <div className="feature-copy"><span className="feature-icon"><Icon name={feature.icon} size={27} /></span><h2>{feature.title}</h2><p>{feature.text}</p></div>
          </article>
        ))}
      </section>

      <section className="launch-music">
        <div className="launch-music-copy"><span>YOGA SODA POP BEATS</span><h2>Fashion has a soundtrack.</h2><p>Meet the world behind the look — original music, animated stories and bright pop energy.</p><a href="https://www.youtube.com/watch?v=fr1hD_pc9tw" target="_blank" rel="noreferrer">Watch “Our Game” →</a></div>
        <div className="launch-video"><iframe src="https://www.youtube.com/embed/fr1hD_pc9tw?rel=0" title="Our Game by Yoga Soda Pop Beats" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
      </section>

      <section className="join-strip launch-join"><div><b>JOIN THE POP CLUB</b><span>New drops, music releases & happy vibes in your inbox.</span></div><form action="mailto:yogasodapop@gmail.com?subject=Yoga%20Soda%20Pop%20Club%20Signup" method="post" encType="text/plain"><input type="email" name="email" aria-label="Email address" placeholder="Enter your email" required/><button type="submit">JOIN NOW</button></form></section>

      <footer className="premium-footer launch-footer">
        <div className="footer-brand"><img src="/assets/yoga-soda-pop-logo-premium.png" alt="Yoga Soda Pop"/><p>Music, fashion and pop fantasy.</p><small>Yoga Soda Pop is operated by Gamers4Gamers, LLC.</small></div>
        <div><b>SHOP</b><a href={shopUrl}>KPOP Demon Hunters Backpack</a><a href="/legal#shipping-returns">Shipping & Returns</a><a href="/legal#refunds">Refund Policy</a></div>
        <div><b>MUSIC</b><a href="/beats">Yoga Soda Pop Beats</a><a href="https://youtube.com/@yogasodapopbeats" target="_blank" rel="noreferrer">YouTube</a><a href="https://open.spotify.com/artist/6cuzPp7tY0HYgngxwuKdg4" target="_blank" rel="noreferrer">Spotify</a></div>
        <div><b>ABOUT</b><a href="/about">Our World</a><a href="mailto:yogasodapop@gmail.com">Contact</a><a href="/legal#privacy">Privacy Policy</a><a href="/legal#terms">Terms of Service</a><small>© 2026 Yoga Soda Pop.</small></div>
      </footer>

      {galleryOpen && (
        <div className="product-gallery-overlay" role="dialog" aria-modal="true" aria-label="Backpack photo gallery" onClick={() => setGalleryOpen(false)}>
          <div className="product-gallery-panel" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="product-gallery-close" onClick={() => setGalleryOpen(false)} aria-label="Close gallery">×</button>
            <button type="button" className="product-gallery-arrow product-gallery-prev" onClick={galleryPrevious} aria-label="Previous gallery image">‹</button>
            <div className="product-gallery-main"><img src={galleryImages[galleryIndex].src} alt={galleryImages[galleryIndex].alt} /></div>
            <button type="button" className="product-gallery-arrow product-gallery-next" onClick={galleryNext} aria-label="Next gallery image">›</button>
            <div className="product-gallery-strip" aria-label="Choose gallery image">
              {galleryImages.map((image, index) => (
                <button type="button" className={galleryIndex === index ? "active" : ""} onClick={() => setGalleryIndex(index)} key={image.src} aria-label={`Show ${image.alt}`}>
                  <img src={image.src} alt="" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
