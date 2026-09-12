import Script from "next/script";

// Public widget identifiers supplied by the site owner, not secret API keys.
const propertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID?.trim() || "6aa55cd5406bce344a95da51";
const widgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID?.trim() || "1k2av598j";

export default function LiveChat() {
  if (process.env.NEXT_PUBLIC_TAWK_ENABLED === "false") return null;
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
