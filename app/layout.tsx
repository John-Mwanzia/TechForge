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
  title: "TechForge - Custom Software Development & Tech Solutions",
  description:
    "Transform your business with innovative software solutions and premium hardware. Expert web development, mobile apps, cloud solutions, and IT consulting services in Nairobi, Kenya.",
  keywords:
    "software development, web development, mobile apps, cloud solutions, IT consulting, hardware supply, Nairobi, Kenya, TechForge",
  authors: [{ name: "TechForge" }],
  creator: "TechForge",
  publisher: "TechForge",
  openGraph: {
    title: "TechForge - Custom Software Development & Tech Solutions",
    description:
      "Transform your business with innovative software solutions and premium hardware.",
    url: "https://techforge.co.ke",
    siteName: "TechForge",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechForge - Custom Software Development & Tech Solutions",
    description:
      "Transform your business with innovative software solutions and premium hardware.",
    creator: "@techforge",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/icon.svg", sizes: "180x180", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
