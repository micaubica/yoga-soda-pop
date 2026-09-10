import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yoga Soda Pop | Yoga, Music & Joy",
  description: "Playful yoga cards, positive affirmations, original music, and joyful movement for kids and families.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/favicon.svg?v=2", sizes: "any", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico?v=2",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
