import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yoga Soda Pop | Yoga, Music & Joy",
  description: "Playful yoga cards, positive affirmations, original music, and joyful movement for kids and families.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
