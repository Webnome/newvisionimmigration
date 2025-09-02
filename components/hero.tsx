import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="container-balanced py-16 md:py-24 grid gap-8 md:grid-cols-2 items-center">
        <div className="reveal revealed">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-balance text-ink">
            Visa & Coaching Experts for Your Next Move
          </h1>
          <p className="mt-4 text-ink/80 leading-relaxed">
            From IELTS/PTE coaching to visas—complete support, stress-free.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/start-application" className="px-5 py-3 rounded-md btn-gradient">
              Start Application
            </Link>
            <Link href="/contact" className="px-5 py-3 rounded-md border border-brand text-brand hover:bg-brand/5">
              Book a Free Consultation
            </Link>
          </div>
          <div className="mt-6 text-sm text-ink/60">5,000+ Clients • 95% Success • 10+ Years Experience</div>
        </div>
        <div
          className="relative aspect-[4/3] md:aspect-[16/9] rounded-lg overflow-hidden bg-white border shadow-inner reveal"
          aria-label="Hero illustration"
        >
          <img
            src="/images/hero-illustration.png"
            alt="Visa & coaching experts assisting with passport and travel documents"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
