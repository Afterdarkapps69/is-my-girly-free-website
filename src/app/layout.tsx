import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ismygirlyfree.com"),
  title: {
    default: "Is My Girly Free?",
    template: "%s | Is My Girly Free?",
  },
  description:
    "Find your favourite girlies, see where they’re working, check their availability and send digital drinks with Is My Girly Free?",
  applicationName: "Is My Girly Free?",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Is My Girly Free?",
    description:
      "Find your favourite girlies, see where they’re working, check their availability and send digital drinks.",
    url: "https://ismygirlyfree.com",
    siteName: "Is My Girly Free?",
    images: [
      {
        url: "/logo-main.png",
        width: 1024,
        height: 1024,
        alt: "Is My Girly Free?",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Is My Girly Free?",
    description:
      "Find your favourite girlies, see where they’re working, check their availability and send digital drinks.",
    images: ["/logo-main.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
