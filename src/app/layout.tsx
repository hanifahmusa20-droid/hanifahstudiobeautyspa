import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Amara Beauty & Spa | Beauty Salon and Spa in Lekki, Lagos",
  description:
    "Amara Beauty & Spa is a calm, elegant salon in Lekki Phase 1, Lagos. Hair, nails, facials, massage, makeup and brows, done slowly and done well.",
  keywords: [
    "beauty salon Lagos",
    "spa Lekki",
    "makeup artist Lagos",
    "braids Lagos",
    "massage Lekki",
    "facial Lagos",
  ],
  authors: [{ name: "Amara Beauty & Spa" }],
  openGraph: {
    title: "Amara Beauty & Spa",
    description:
      "Hair, nails, skin, body and makeup, done slowly and done well. Book your visit to our salon in Lekki Phase 1, Lagos.",
    siteName: "Amara Beauty & Spa",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${jost.variable} antialiased bg-cream text-espresso`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
