import type { Metadata } from "next";
import styles from "./page.module.css";

type WooCommerceImage = {
  id: number;
  src: string;
  alt?: string;
};

type WooCommerceProduct = {
  id: number;
  name: string;
  price: string;
  permalink: string;
  images: WooCommerceImage[];
};

export const metadata: Metadata = {
  title: "WooCommerce Test | Yoga Soda Pop",
  description: "A private test page for the Yoga Soda Pop WooCommerce connection.",
  robots: { index: false, follow: false },
};

async function getProducts(): Promise<WooCommerceProduct[]> {
  const storeUrl = process.env.NEXT_PUBLIC_WC_STORE_URL?.replace(/\/$/, "");
  const consumerKey = process.env.WC_CONSUMER_KEY;
  const consumerSecret = process.env.WC_CONSUMER_SECRET;

  if (!storeUrl || !consumerKey || !consumerSecret) return [];

  try {
    const response = await fetch(`${storeUrl}/wp-json/wc/v3/products?status=publish&per_page=12`, {
      headers: {
        Authorization: `Basic ${Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64")}`,
      },
    });

    if (!response.ok) {
      console.error(`WooCommerce returned ${response.status} while loading products.`);
      return [];
    }

    return (await response.json()) as WooCommerceProduct[];
  } catch (error) {
    console.error("Could not connect to WooCommerce.", error);
    return [];
  }
}

export default async function WooCommerceTestPage() {
  const products = await getProducts();
  const storeUrl = process.env.NEXT_PUBLIC_WC_STORE_URL?.replace(/\/$/, "");
  const isConfigured = Boolean(
    storeUrl && process.env.WC_CONSUMER_KEY && process.env.WC_CONSUMER_SECRET,
  );

  return (
    <main className={styles.page}>
      <section className={styles.heading}>
        <p className={styles.eyebrow}>WooCommerce connection test</p>
        <h1>Yoga Soda Pop Store</h1>
        <p>This page reads published products from the WooCommerce REST API.</p>
      </section>

      {products.length > 0 ? (
        <div className={styles.grid}>
          {products.map((product) => {
            const image = product.images?.[0];
            const buyUrl = `${storeUrl}/cart/?add-to-cart=${product.id}`;

            return (
              <article key={product.id} className={styles.card}>
                {image ? (
                  <img src={image.src} alt={image.alt || product.name} />
                ) : (
                  <div className={styles.placeholder}>No image</div>
                )}
                <div className={styles.cardBody}>
                  <h2>{product.name}</h2>
                  <p className={styles.price}>{product.price ? `$${product.price}` : "Price unavailable"}</p>
                  <a className={styles.buyButton} href={buyUrl}>
                    Buy now
                  </a>
                  <a className={styles.detailsLink} href={product.permalink}>
                    View product details
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <section className={styles.notice}>
          <h2>{isConfigured ? "No products found" : "WooCommerce is not configured yet"}</h2>
          <p>
            {isConfigured
              ? "Check that WooCommerce has published products and that the API key has read access."
              : "Add the WooCommerce store URL, consumer key, and consumer secret to the build environment, then redeploy."}
          </p>
        </section>
      )}
    </main>
  );
}
