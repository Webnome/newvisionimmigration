import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import { Topbar } from "@/components/site/topbar"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { FloatingCTA } from "@/components/site/floating-cta"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800", "500", "400"],
  variable: "--font-heading",
  display: "swap",
})
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Newvisionimmi | Visa & Coaching Experts",
  description:
    "Immigration & training consultancy offering IELTS/PTE coaching, Spoken English (in-person), and visa/documentation services.",
  openGraph: {
    title: "Newvisionimmi | Visa & Coaching Experts",
    description: "From IELTS/PTE coaching to visas—complete support, stress-free.",
    images: ["/images/logo.png"],
  },
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} antialiased`}>
      <body className="bg-surface text-ink">
        <Topbar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Newvisionimmi",
              url: "https://example.com", // replace on publish
              logo: "https://example.com/images/logo.png",
              sameAs: [
                "https://facebook.com/newvisionimmi",
                "https://instagram.com/newvisionimmi",
                "https://www.linkedin.com/company/newvisionimmi",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "hello@newvisionimmi.com",
                telephone: "+91 90000 00000",
                areaServed: ["IN", "AU", "SG", "CA", "GB", "CY"],
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
