import Script from "next/script";

const propertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID?.trim();
const widgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID?.trim();

export default function LiveChat() {
  // Leave chat disabled until a real account is configured.
  if (!propertyId || !widgetId) return null;
  if (!/^[a-zA-Z0-9]+$/.test(propertyId) || !/^[a-zA-Z0-9]+$/.test(widgetId)) {
    throw new Error("Tawk.to configuration must contain only the property and widget IDs, not an embed URL.");
  }

  return (
    <Script
      id="tawk-live-chat"
      src={`https://embed.tawk.to/${propertyId}/${widgetId}`}
      strategy="lazyOnload"
      charSet="UTF-8"
      crossOrigin="anonymous"
    />
  );
}
