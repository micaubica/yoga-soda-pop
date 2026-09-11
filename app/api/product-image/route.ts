import { NextRequest } from "next/server";

const SHOP_HOST = "shop.yogasodapop.com";

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");
  if (!slug) return new Response("Missing slug", { status: 400 });

  const endpoint = `https://${SHOP_HOST}/wp-json/wc/store/v1/products?slug=${encodeURIComponent(slug)}`;
  try {
    const response = await fetch(endpoint, { next: { revalidate: 3600 } });
    if (!response.ok) throw new Error(`Store API returned ${response.status}`);
    const products = await response.json();
    const src = products?.[0]?.images?.[0]?.src;
    if (!src) return new Response("Product image not found", { status: 404 });

    const imageUrl = new URL(src);
    if (imageUrl.hostname !== SHOP_HOST) return new Response("Invalid image host", { status: 400 });
    return Response.redirect(imageUrl.toString(), 302);
  } catch {
    return new Response("Unable to load product image", { status: 502 });
  }
}
