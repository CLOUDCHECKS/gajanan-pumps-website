import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Gajanan CRM",
    template: "%s | Gajanan CRM",
  },
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
};

export default function AdminRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
