import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EnquiryProvider } from "@/components/providers/EnquiryProvider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gajanan Pumps & Systems | Progressive Cavity Pumps",
    template: "%s | Gajanan Pumps & Systems",
  },
  description:
    "Progressive cavity pumps and fluid-handling solutions for viscous, abrasive, shear-sensitive and solid-laden fluids across critical industries.",
  keywords: [
    "progressive cavity pumps",
    "Gajanan Pumps",
    "fluid handling",
    "industrial pumps",
    "hygienic pumps",
    "dosing pumps",
    "namkeen extruder",
  ],
  openGraph: {
    title: "Gajanan Pumps & Systems",
    description:
      "Engineered to move challenging fluids. Progressive cavity pumps and fluid-handling solutions across critical industries.",
    type: "website",
    locale: "en_IN",
    siteName: "Gajanan Pumps & Systems",
    images: [{ url: "/images/hero-pump.png", width: 1920, height: 819 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gajanan Pumps & Systems",
    description:
      "Progressive cavity pumps and fluid-handling solutions across critical industries.",
    images: ["/images/hero-pump.png"],
  },
  icons: {
    icon: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#021B3D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-full focus:bg-brand-yellow focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-navy-900"
        >
          Skip to content
        </a>
        <EnquiryProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </EnquiryProvider>
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
