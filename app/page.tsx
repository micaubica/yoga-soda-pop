"use client";

import { useState } from "react";
import "./boutique.css";

const productImages = [
  { src: "/assets/backpack-front.webp", alt: "KPOP Demon Hunters backpack front view" },
  { src: "/assets/backpack-side.webp", alt: "KPOP Demon Hunters backpack side view" },
  { src: "/assets/backpack-bottom.webp", alt: "KPOP Demon Hunters backpack bottom view" },
];

const features = [
  {
    icon: "◒",
    title: "WATERPROOF & DURABLE",
    text: "15.5 oz soft nylon canvas that’s lightweight, waterproof and tear resistant.",
  },
  {
    icon: "▤",
    title: "3 SPACIOUS POCKETS",
    text: "Three zippered compartments for books, a laptop and everyday essentials.",
  },
  {
    icon: "♙",
    title: "PADDED FOR COMFORT",
    text: "Padded mesh back panel and adjustable shoulder straps for easy carrying.",
  },
];

export default function Home() {
  const [activeImage, setActiveImage] = useState(0);
  const shopUrl = process.env.NEXT_PUBLIC_WOOCOMMERCE_PRODUCT_URL || "/shop";

  return (
    <main className="premium-home launch-home">
      <div className="announcement">♫ MUSIC LIVE NOW <span>│</span> ♡ SHOP THE FIRST DROP</div>

      <header className="premium-header launch-header">
        <a className="brand" href="/" aria-label="Yoga Soda Pop home">
          <img src="/assets/yoga-soda-pop-logo-premium.png" alt="Yoga Soda Pop" />
        </a>
        <nav>
          <a href={shopUrl}>SHOP</a>
          <a href="#features">ACCESSORIES</a>
          <a href="/beats">MUSIC</a>
          <a href="/about">ABOUT</a>
        </nav>
        <div className="header-tools" aria-label="Site tools">
          <span aria-hidden="true">⌕</span><span aria-hidden="true">♡</span><span aria-hidden="true">♙</span>
        </div>
      </header>

      <section className="launch-hero">
        <div className="launch-copy">
          <p className="launch-eyebrow">K-POP <span>/</span> ACCESSORIES</p>
          <h1>KPOP<br />DEMON HUNTERS<br /><strong>BACKPACK</strong></h1>
          <p className="launch-description"><b>Made to stand out.</b><br />Lightweight, waterproof and ready for school, travel and everyday adventures.</p>
          <a className="launch-shop-button" href={shopUrl}>Shop Now <span>→</span></a>
          <div className="trust-row">
            <div><span className="trust-icon">▣</span><p>Worldwide<br />Shipping</p></div>
            <div><span className="trust-icon">♢</span><p>Secure<br />Checkout</p></div>
            <div><span className="trust-icon">◇</span><p>Easy<br />Returns</p></div>
          </div>
        </div>

        <div className="launch-product-stage">
          <div className="stage-light stage-light-one" />
          <div className="stage-light stage-light-two" />
          <div className="product-pedestal" />
          <img className="launch-main-product" src={productImages[activeImage].src} alt={productImages[activeImage].alt} />
          <div className="launch-thumbnails" aria-label="Backpack views">
            {productImages.map((image, index) => (
              <button className={activeImage === index ? "active" : ""} onClick={() => setActiveImage(index)} key={image.src} aria-label={`Show ${image.alt}`}>
                <img src={image.src} alt="" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-band" id="features">
        {features.map((feature, index) => (
          <article className="feature-card" key={feature.title}>
            <div className={`feature-visual feature-visual-${index + 1}`}>
              {index === 0 && <span className="water-drops">●　◦<br />　●</span>}
              {index === 1 && <img src="/assets/backpack-front.webp" alt="Backpack storage" />}
              {index === 2 && <img src="/assets/backpack-side.webp" alt="Backpack padded straps" />}
            </div>
            <div className="feature-copy"><span>{feature.icon}</span><h2>{feature.title}</h2><p>{feature.text}</p></div>
          </article>
        ))}
      </section>

      <section className="launch-music">
        <div className="launch-music-copy">
          <span>YOGA SODA POP BEATS</span>
          <h2>Fashion has a soundtrack.</h2>
          <p>Meet the world behind the look — original music, animated stories and bright pop energy.</p>
          <a href="https://www.youtube.com/watch?v=fr1hD_pc9tw" target="_blank" rel="noreferrer">Watch “Our Game” →</a>
        </div>
        <div className="launch-video"><iframe src="https://www.youtube.com/embed/fr1hD_pc9tw?rel=0" title="Our Game by Yoga Soda Pop Beats" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
      </section>

      <section className="join-strip launch-join"><div><b>JOIN THE POP CLUB</b><span>New drops, music releases & happy vibes in your inbox.</span></div><form action="mailto:yogasodapop@gmail.com?subject=Yoga%20Soda%20Pop%20Club%20Signup" method="post" encType="text/plain"><input type="email" name="email" aria-label="Email address" placeholder="Enter your email" required/><button type="submit">JOIN NOW</button></form></section>

      <footer className="premium-footer launch-footer">
        <div className="footer-brand"><img src="/assets/yoga-soda-pop-logo-premium.png" alt="Yoga Soda Pop"/><p>Music, fashion and pop fantasy.</p><small>Yoga Soda Pop is operated by Gamers4Gamers, LLC.</small></div>
        <div><b>SHOP</b><a href={shopUrl}>KPOP Demon Hunters Backpack</a><a href="/legal#shipping-returns">Shipping & Returns</a><a href="/legal#refunds">Refund Policy</a></div>
        <div><b>MUSIC</b><a href="/beats">Yoga Soda Pop Beats</a><a href="https://youtube.com/@yogasodapopbeats" target="_blank" rel="noreferrer">YouTube</a><a href="https://open.spotify.com/artist/6cuzPp7tY0HYgngxwuKdg4" target="_blank" rel="noreferrer">Spotify</a></div>
        <div><b>ABOUT</b><a href="/about">Our World</a><a href="mailto:yogasodapop@gmail.com">Contact</a><a href="/legal#privacy">Privacy Policy</a><a href="/legal#terms">Terms of Service</a><small>© 2026 Yoga Soda Pop.</small></div>
      </footer>
    </main>
  );
}
