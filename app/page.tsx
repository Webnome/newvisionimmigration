import { Hero } from "@/components/hero"
import { QuickServices } from "@/components/quick-services"
import { HowItWorks } from "@/components/how-it-works"
import { FeaturedServices } from "@/components/featured-services"
import { StatsBar } from "@/components/stats-bar"
import { ReviewsCarousel } from "@/components/reviews-carousel"
import { FAQPreview } from "@/components/faq"
import { FinalCTA } from "@/components/cta-band"

export const metadata = {
  title: "Newvisionimmi | Visa, Coaching & Documentation Experts for Your Next Move",
  description: "From IELTS/PTE coaching to visas—complete support, stress-free.",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickServices />
      <HowItWorks />
      <FeaturedServices />
      <ReviewsCarousel />
      <FAQPreview />
      <StatsBar />
      {/* <FinalCTA /> */}

      {/* JSON-LD Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Visa & Coaching",
            provider: { "@type": "Organization", name: "Newvisionimmi" },
            areaServed: ["AU", "SG", "CA", "GB", "CY"],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Course", name: "IELTS Academic" } },
                { "@type": "Offer", itemOffered: { "@type": "Course", name: "IELTS General" } },
                { "@type": "Offer", itemOffered: { "@type": "Course", name: "PTE Academic" } },
                { "@type": "Offer", itemOffered: { "@type": "Course", name: "Spoken English (In-person)" } },
              ],
            },
          }),
        }}
      />
      {/* JSON-LD FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long does a visa process take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Timelines vary by country and category. We provide an indicative timeline after assessing your profile.",
                },
              },
              {
                "@type": "Question",
                name: "Is Spoken English only in-person?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We run classroom batches for Beginner, Intermediate, and Advanced levels.",
                },
              },
              {
                "@type": "Question",
                name: "Do you guarantee approvals?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We provide documentation guidance; final decisions rest with immigration authorities.",
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}
