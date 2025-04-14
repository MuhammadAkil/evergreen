import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "My Next.js App",
    template: "%s | My Next.js App",
  },
  description: "A Next.js 15 app with Tailwind CSS and SEO optimization",
  keywords: ["Next.js", "Tailwind CSS", "SEO", "React"],
  openGraph: {
    title: "My Next.js App",
    description: "A Next.js 15 app with Tailwind CSS and SEO optimization",
    url: "https://your-site.com", // Replace with your domain
    siteName: "My Next.js App",
    images: [
      {
        url: "https://your-site.com/og-image.jpg", // Add an OG image in public/
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Next.js App",
    description: "A Next.js 15 app with Tailwind CSS and SEO optimization",
    images: ["https://your-site.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}