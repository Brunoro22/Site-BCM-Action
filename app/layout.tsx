import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "BCM ACTION - Serviços Especializados",
  description:
    "Soluções completas em serviços de alta qualidade para sua empresa. Limpeza, conservação e serviços especializados no Rio de Janeiro, Minas Gerais e Espírito Santo.",
  keywords: "BCM ACTION, serviços especializados, limpeza, conservação, Rio de Janeiro, Minas Gerais, Espírito Santo",
  authors: [{ name: "BCM ACTION" }],
  creator: "BCM ACTION",
  publisher: "BCM ACTION",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "BCM ACTION - Serviços Especializados",
    description: "Soluções completas em serviços de alta qualidade para sua empresa",
    siteName: "BCM ACTION",
  },
  twitter: {
    card: "summary_large_image",
    title: "BCM ACTION - Serviços Especializados",
    description: "Soluções completas em serviços de alta qualidade para sua empresa",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
