import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import Navbar from "@/components/ui/Navbar"
import Footer from "@/components/ui/Footer"
import StickyDownloadBar from "@/components/ui/StickyDownloadBar"
import { organizationSchema, websiteSchema } from "@/lib/schema"
import { siteConfig } from "@/data/site"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Rumi Slot Game Pakistan | Free Download Official APK",
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.name} is Pakistan's fastest-growing real-money casino app with 100+ games, instant JazzCash and Easypaisa withdrawals, and a PKR 5,000 welcome bonus. Download free APK ${siteConfig.versionLabel}.`,
  keywords: [siteConfig.keywords.primary, siteConfig.keywords.secondary, siteConfig.keywords.third],
  authors: [{ name: siteConfig.developer }],
  creator: siteConfig.developer,
  publisher: siteConfig.name,
  icons: {
    icon: [
      { url: "/images/rumi-slot.ico", type: "image/x-icon" },
    ],
    shortcut: "/images/rumi-slot.ico",
    apple: "/images/rumi-slot.webp",
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
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/rumi-slot-game-pakistan.webp",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/rumi-slot-game-pakistan.webp"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`} data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/images/rumi-slot.ico" type="image/x-icon" />
      </head>
      <body className="bg-stone-950 text-gray-100 min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
        <Navbar />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
        <StickyDownloadBar />

        {process.env.NEXT_PUBLIC_GA_ID && process.env.NEXT_PUBLIC_GA_ID !== "G-XXXXXXXXXX" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
