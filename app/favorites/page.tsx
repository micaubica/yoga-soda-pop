import "./favorites.css";

const picks = [
  { icon:"🎀", title:"Vanilla Café Dress", tag:"Kawaii & Lolita", note:"Soft café-inspired details and dreamy feminine styling.", href:"https://sukuroi.com/products/vanilla-bear-tea-doll-jsk-set" },
  { icon:"👜", title:"Cute Mini Bags", tag:"Bags", note:"Small statement bags selected for pastel and pop looks.", href:"#" },
  { icon:"💎", title:"Sparkle Accessories", tag:"Jewelry", note:"Charms, bows and finishing touches for your favorite edit.", href:"#" },
  { icon:"🧸", title:"Plushie Picks", tag:"Cute Finds", note:"Soft, playful finds for rooms, gifts and travel.", href:"#" },
  { icon:"👒", title:"Hair & Hat Edit", tag:"Accessories", note:"Headbands, bows and hats that complete a kawaii look.", href:"#" },
  { icon:"👟", title:"Shoes We Love", tag:"Shoes", note:"Playful footwear picks for coordinated outfits.", href:"#" },
];

export default function Favorites(){return <main className="favorites-page">
  <div className="favorites-top">♡ CURATED BY YOGA SODA POP ♡</div>
  <header className="favorites-header"><a href="/"><img src="/assets/yoga-soda-pop-logo-transparent.png" alt="Yoga Soda Pop"/></a><nav><a href="/">Home</a><a href="#picks">Favorites</a><a href="/beats">Music</a><a href="/about">About</a></nav></header>
  <section className="favorites-hero"><span>YOGA SODA POP FAVORITES</span><h1>Our cutest finds, all in one place.</h1><p>No random link hunting. Browse our current kawaii fashion, accessories, plushie and lifestyle picks, then shop directly with the retailer.</p><a href="#picks">SEE THE PICKS ↓</a></section>
  <section className="favorites-video"><div><span>NOW PLAYING</span><h2>Watch the new music video while you shop.</h2><p>Keep the Yoga Soda Pop soundtrack playing while you browse our current favorites.</p><a href="/beats">MORE MUSIC →</a></div><div className="favorites-embed"><iframe src="https://www.youtube.com/embed/U9fPJENBpxw" title="Yoga Soda Pop Beats music video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div></section>
  <section className="favorites-picks" id="picks"><div className="favorites-title"><span>SHOP OUR FAVORITES</span><h2>Kawaii picks of the moment</h2><p>We update this page as we find new things worth sharing.</p></div><div className="favorites-grid">{picks.map((p,i)=><article className="favorite-card" key={p.title}><div className={`favorite-art art-${i+1}`}><span>{p.icon}</span><small>{p.tag}</small></div><div className="favorite-copy"><h3>{p.title}</h3><p>{p.note}</p>{p.href==="#"?<span className="coming">AFFILIATE LINK COMING SOON</span>:<a href={p.href} target="_blank" rel="sponsored noreferrer">SHOP AT RETAILER →</a>}</div></article>)}</div></section>
  <section className="favorites-note"><b>Affiliate disclosure:</b> Some links on this page may earn Yoga Soda Pop a commission at no extra cost to you. Purchases are completed on the retailer&apos;s website.</section>
  <footer className="favorites-footer"><img src="/assets/yoga-soda-pop-logo-transparent.png" alt="Yoga Soda Pop"/><p>Fashion. Music. Pop Fantasy.</p><div><a href="/">Home</a><a href="/beats">Music</a><a href="https://instagram.com/yogasodapop">Instagram</a></div></footer>
</main>}
