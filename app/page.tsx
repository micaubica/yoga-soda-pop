"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import "./home.css";

const SHOP_URL="https://shop.yogasodapop.com/?v=30fd57ddcc95";
const PRODUCTS=[
  {name:"K-Pop Demon Hunters Backpack — Cute Anime Girls Raindrop School Bag",price:"$54.49",originalPrice:"$64.99",image:"/assets/002.jpg",url:"https://shop.yogasodapop.com/product/k-pop-demon-hunters-backpack-cute-anime-girls-raindrop-school-bag/?v=30fd57ddcc95"},
  {name:"K-Pop Demon Hunters Backpack — Pink Anime Girl Band School Bag",price:"$64.99",originalPrice:null,image:"/assets/001.jpg",url:"https://shop.yogasodapop.com/product/k-pop-demon-hunters-backpack-pink-anime-girl-band-school-bag/?v=30fd57ddcc95"},
  {name:"K-Pop Demon Hunters Backpack — Cute Rainy Day Anime Girl Raindrops Print",price:"$54.49",originalPrice:"$64.99",image:"/assets/003.jpg",url:"https://shop.yogasodapop.com/product/k-pop-demon-hunters-backpack-cute-rainy-day-anime-girl-raindrops-print/?v=30fd57ddcc95"},
];
const YOUTUBE_URL="https://www.youtube.com/@yogasodapopbeats";
const SPOTIFY_URL="https://open.spotify.com/artist/6cuzPp7tY0HYgngxwuKdg4";
const INSTAGRAM_URL="https://www.instagram.com/yogasodapop/";

function Fox(){return <svg viewBox="0 0 100 64" fill="none" aria-hidden="true"><path d="m5 5 25 12h40L95 5 85 36l7 8-27 10-15 8-15-8L8 44l7-8L5 5Z" stroke="currentColor" strokeWidth="5"/><path d="m23 28 17 5 4 10-16-6-5-9Zm54 0-17 5-4 10 16-6 5-9ZM43 49h14l-7 7-7-7Z" fill="currentColor"/></svg>}
function UtilityIcon({type}:{type:"search"|"account"|"cart"|"youtube"|"instagram"|"spotify"}){
 const p={viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round" as const,strokeLinejoin:"round" as const,"aria-hidden":true as const};
 if(type==="search")return <svg {...p}><circle cx="10.5" cy="10.5" r="7.5"/><path d="m16 16 5 5"/></svg>;
 if(type==="account")return <svg {...p}><circle cx="12" cy="7" r="4"/><path d="M4 22v-3a8 8 0 0 1 16 0v3"/></svg>;
 if(type==="cart")return <svg {...p}><path d="M2 3h3l3 13h11l3-10H6"/><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/></svg>;
 if(type==="instagram")return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17 7h.01"/></svg>;
 if(type==="spotify")return <svg {...p}><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="M6 9q6-3 12 0M7 12q5-2 10 0M8 15q4-1 8 0" stroke="white"/></svg>;
 return <svg {...p}><rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor"/><path d="m10 9 6 3-6 3Z" fill="white" stroke="white"/></svg>;
}

function Icon({type}:{type:"truck"|"heart"|"bolt"|"music"}){
 const p={viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round" as const,strokeLinejoin:"round" as const};
 if(type==="truck")return <svg {...p}><path d="M3 6h11v10H3zM14 9h4l3 3v4h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>;
 if(type==="heart")return <svg {...p}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.9-8.6a5.5 5.5 0 0 0-.1-7.8Z"/></svg>;
 if(type==="bolt")return <svg {...p}><path d="M13 2 5 14h6l-1 8 8-12h-6z"/></svg>;
 return <svg {...p}><path d="M9 18V5l10-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/></svg>;
}

export default function Home(){
  const[email,setEmail]=useState(""); const[busy,setBusy]=useState(false); const[ok,setOk]=useState(false); const[error,setError]=useState("");
  const join=async(e:FormEvent<HTMLFormElement>)=>{e.preventDefault();if(!email||busy)return;setBusy(true);setError("");try{const r=await fetch("https://shop.yogasodapop.com/wp-json/yogasodapop/v1/join",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email})});if(!r.ok)throw new Error();setEmail("");setOk(true);}catch{setError("Something went wrong. Please try again.");}finally{setBusy(false)}};
  return <main className="ysp-home">
    <header className="ysp-header">
      <Link className="ysp-brand" href="/">YOGA SODA POP</Link>
      <nav><a href={SHOP_URL}>SHOP</a><a href="/music">MUSIC</a><a href="/about">ABOUT</a></nav>
      <div className="ysp-header-tools"><a href="https://shop.yogasodapop.com/?s=&post_type=product" aria-label="Search"><UtilityIcon type="search"/></a><a href="https://shop.yogasodapop.com/my-account/" aria-label="Account"><UtilityIcon type="account"/></a><a href="https://shop.yogasodapop.com/cart/" aria-label="Cart"><UtilityIcon type="cart"/></a></div>
      <a className="ysp-header-cta" href={SHOP_URL}>SHOP THE DROP →</a>
    </header>

    <section className="ysp-hero">
      <div className="ysp-hero-copy">
        <h1>YOGA<br/>SODA<br/>POP</h1>
        <p className="ysp-sub">ANIME-INSPIRED BAGS<br/>FOR K-POP DREAMERS</p>
        <a className="ysp-hero-cta" href={SHOP_URL}>SHOP THE DROP →</a>
      </div>
      <div className="ysp-hero-art"><img src="/assets/pink-girl-hero.png" alt="Anime-inspired Yoga Soda Pop hero artwork" fetchPriority="high"/></div>
    </section>

    <section className="ysp-perks">
      <div><Icon type="truck"/><b>FREE SHIPPING<br/>WORLDWIDE</b></div>
      <div><Icon type="heart"/><b>K-POP INSPIRED</b></div>
      <div><Icon type="bolt"/><b>UNIQUE ARTWORK</b></div>
      <div><Icon type="music"/><b>MUSIC & MERCH</b></div>
    </section>

    <section className="ysp-shop" id="shop-the-drop">
      <div className="ysp-section-head"><h2>SHOP THE DROP <span>✦</span></h2><a href={SHOP_URL}>VIEW ALL PRODUCTS →</a></div>
      <div className="ysp-products">{PRODUCTS.map((p,index)=><article className="ysp-card" key={p.url}><a className="ysp-card-image" href={p.url}>{index===0&&<span className="ysp-trending">Trending</span>}<img src={p.image} alt={p.name} width="480" height="480" loading="lazy"/></a><h3>{p.name}</h3><div className="ysp-price"><strong>{p.price}</strong>{p.originalPrice&&<del>{p.originalPrice}</del>}</div><span className="ysp-free-shipping">Free shipping</span><a className="ysp-buy" href={p.url}>SHOP BACKPACK →</a></article>)}</div>
    </section>

    <section className="ysp-music"><div className="ysp-music-art"><img src="/assets/home-music-studio.webp" alt="Yoga Soda Pop music" loading="lazy"/></div><div className="ysp-music-overlay"><span>YOGA SODA POP BEATS</span><h2>MUSIC FOR<br/>ANOTHER WORLD</h2><p>Original beats, animated stories and bright pop energy.</p><div className="ysp-music-actions"><a href={YOUTUBE_URL} target="_blank" rel="noreferrer">WATCH ON YOUTUBE →</a></div></div></section>

    <section className="ysp-join"><div className="ysp-join-symbol"><Fox/></div><div><b>JOIN THE POP CLUB</b><span>Get updates on new drops, music and more.</span></div><form onSubmit={join}><input aria-label="Your email address" autoComplete="email" name="email" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your email" required/><button disabled={busy}>{busy?"JOINING...":"SUBSCRIBE →"}</button></form>{ok&&<small>Thank you for joining the family ♡</small>}{error&&<small>{error}</small>}</section>

    <footer className="ysp-footer"><b>YOGA SODA POP</b><nav><a href={SHOP_URL}>SHOP</a><a href="/music">MUSIC</a><a href="/about">ABOUT</a><a href="/contact">CONTACT</a><a href="/shipping-returns">FAQ</a><a href="/privacy-policy">PRIVACY POLICY</a></nav><div><a href={YOUTUBE_URL}><UtilityIcon type="youtube"/></a><a href={INSTAGRAM_URL}><UtilityIcon type="instagram"/></a><a href={SPOTIFY_URL}><UtilityIcon type="spotify"/></a></div><small>© 2026 Yoga Soda Pop · Gamers4Gamers, LLC.</small></footer>
  </main>;
}
