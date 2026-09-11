"use client";

import { FormEvent, useState } from "react";
import "./launch-overrides.css";
import "./pop-club.css";

const SHOP_URL="https://shop.yogasodapop.com/?v=30fd57ddcc95";
const PRODUCTS=[
  {name:"K-Pop Demon Hunters Backpack — Cute Anime Girls Raindrop School Bag",price:"$69.99",image:"/assets/product-raindrop.webp",url:"https://shop.yogasodapop.com/product/k-pop-demon-hunters-backpack-cute-anime-girls-raindrop-school-bag/?v=30fd57ddcc95"},
  {name:"K-Pop Demon Hunters Backpack — Pink Anime Girl Band School Bag",price:"$63.99",image:"/assets/product-pink-band.webp",url:"https://shop.yogasodapop.com/product/k-pop-demon-hunters-backpack-pink-anime-girl-band-school-bag/?v=30fd57ddcc95"},
  {name:"K-Pop Demon Hunters Backpack — Cute Rainy Day Anime Girl Raindrops Print",price:"$69.99",image:"/assets/product-rainy-print.webp",url:"https://shop.yogasodapop.com/product/k-pop-demon-hunters-backpack-cute-rainy-day-anime-girl-raindrops-print/?v=30fd57ddcc95"},
];
const YOUTUBE_URL="https://www.youtube.com/@yogasodapopbeats";
const SPOTIFY_URL="https://open.spotify.com/artist/6cuzPp7tY0HYgngxwuKdg4";
const INSTAGRAM_URL="https://www.instagram.com/yogasodapop/";

function Icon({type}:{type:"truck"|"shield"|"box"|"heart"}){
  const p={viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round" as const,strokeLinejoin:"round" as const};
  if(type==="truck") return <svg {...p}><path d="M3 6h10v10H3z"/><path d="M13 10h4l4 4v2h-8z"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>;
  if(type==="shield") return <svg {...p}><path d="M12 3 5 6v5c0 4.6 2.9 8 7 10 4.1-2 7-5.4 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-5"/></svg>;
  if(type==="box") return <svg {...p}><path d="m4 7 8-4 8 4-8 4-8-4Z"/><path d="M4 7v10l8 4 8-4V7"/><path d="M12 11v10"/></svg>;
  return <svg {...p}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.9-8.6a5.5 5.5 0 0 0-.1-7.8Z"/></svg>;
}

export default function Home(){
  const[email,setEmail]=useState(""); const[busy,setBusy]=useState(false); const[ok,setOk]=useState(false); const[error,setError]=useState("");
  const join=async(e:FormEvent<HTMLFormElement>)=>{e.preventDefault();if(!email||busy)return;setBusy(true);setError("");try{const r=await fetch("https://shop.yogasodapop.com/wp-json/yogasodapop/v1/join",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email})});if(!r.ok)throw new Error();setEmail("");setOk(true);}catch{setError("Something went wrong. Please try again.");}finally{setBusy(false)}};
  return <main className="ysp-home">
    <div className="ysp-topbar"><span>★ WORLDWIDE SHIPPING</span><span>★ SECURE CHECKOUT</span><span>★ EASY RETURNS</span></div>
    <header className="ysp-header">
      <a className="ysp-logo" href="/" aria-label="Yoga Soda Pop home"><img src="/assets/ysp-logo-round.webp" alt="Yoga Soda Pop"/></a>
      <nav><a href={SHOP_URL}>SHOP</a><a href="/music">MUSIC</a><a href="/about">ABOUT</a></nav>
      <a className="ysp-header-cta" href={SHOP_URL}>SHOP THE DROP →</a>
    </header>

    <section className="ysp-hero">
      <div className="ysp-hero-copy">
        <div className="ysp-fox">◇</div>
        <h1>YOGA<br/>SODA<br/>POP</h1>
        <p className="ysp-tagline">WEAR THE MUSIC.<br/>CARRY THE ATTITUDE.</p>
        <p className="ysp-sub">Anime-inspired bags, art & accessories made to stand out.</p>
        <div className="ysp-actions"><a className="primary" href={SHOP_URL}>SHOP THE DROP →</a><a className="secondary" href="/music">EXPLORE THE MUSIC</a></div>
      </div>
      <div className="ysp-hero-product">
        <div className="ysp-city-lines" aria-hidden="true"></div>
        <img src="/assets/product-raindrop.webp" alt="Cute anime girls raindrop backpack"/>
        <div className="ysp-hero-words">MUSIC<br/>BAGS<br/>ART<br/>POP CULTURE<br/>YOU</div>
      </div>
    </section>

    <section className="ysp-shop" id="shop-the-drop">
      <div className="ysp-section-head"><h2>SHOP THE DROP <span>✦</span></h2><a href={SHOP_URL}>VIEW ALL PRODUCTS →</a></div>
      <div className="ysp-products">{PRODUCTS.map((p)=><article className="ysp-card" key={p.url}><a className="ysp-card-image" href={p.url}><img src={p.image} alt={p.name}/></a><h3>{p.name}</h3><strong>{p.price}</strong><a className="ysp-buy" href={p.url}>ADD TO CART →</a></article>)}</div>
    </section>

    <section className="ysp-perks">
      <div><Icon type="truck"/><b>WORLDWIDE<br/>SHIPPING</b></div><div><Icon type="shield"/><b>SECURE<br/>CHECKOUT</b></div><div><Icon type="box"/><b>EASY<br/>RETURNS</b></div><div><Icon type="heart"/><b>MADE FOR<br/>K-POP FANS</b></div>
    </section>

    <section className="ysp-music">
      <div className="ysp-music-art"><img src="/assets/hero-yoga-soda-pop.webp" alt="Yoga Soda Pop Beats anime artwork"/></div>
      <div className="ysp-music-overlay"><span>YOGA SODA POP BEATS</span><h2>MUSIC<br/>FOR ANOTHER<br/>WORLD</h2><p>Original beats, animated stories and bright pop energy.</p><div className="ysp-music-actions"><a href={YOUTUBE_URL} target="_blank" rel="noreferrer">▶ WATCH ON YOUTUBE →</a><a href={SPOTIFY_URL} target="_blank" rel="noreferrer">♫ LISTEN ON SPOTIFY</a></div></div>
    </section>

    <section className="ysp-join"><div><b>JOIN THE POP CLUB</b><span>Get updates on new drops, music and more.</span></div><form onSubmit={join}><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your email" required/><button disabled={busy}>{busy?"JOINING...":"SUBSCRIBE →"}</button></form>{ok&&<small>Thank you for joining the family ♡</small>}{error&&<small>{error}</small>}</section>

    <footer className="ysp-footer"><b>YOGA SODA POP</b><nav><a href={SHOP_URL}>SHOP</a><a href="/music">MUSIC</a><a href="/about">ABOUT</a><a href="/contact">CONTACT</a><a href="/privacy-policy">PRIVACY POLICY</a></nav><div><a href={YOUTUBE_URL} target="_blank" rel="noreferrer">YouTube</a><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a></div><small>© 2026 Yoga Soda Pop · Gamers4Gamers, LLC.</small></footer>
  </main>;
}
