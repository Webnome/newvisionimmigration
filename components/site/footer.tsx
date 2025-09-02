import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container-balanced grid gap-8 py-10 md:grid-cols-4">
        <div>
          <h3 className="font-heading font-semibold text-lg text-brand">Newvisionimmi</h3>
          <p className="text-sm mt-2 text-ink/70">Helping Students & Families Move Forward.</p>
          <p className="text-xs mt-4 text-ink/70">
            Newvisionimmi is an independent consultancy. We are not a government agency; final decisions rest with the
            respective authorities.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/visa" className="hover:underline">
                Visa Services
              </Link>
            </li>
            <li>
              <Link href="/coaching" className="hover:underline">
                IELTS & PTE Coaching
              </Link>
            </li>
            <li>
              <Link href="/success-results" className="hover:underline">
                Success Results
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:underline">
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:hello@newvisionimmi.com" className="hover:underline">
                hello@newvisionimmi.com
              </a>
            </li>
            <li>
              <a href="tel:+919000000000" className="hover:underline">
                +91 90000 00000
              </a>
            </li>
            <li>Mon–Sat, 10:00–18:00</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Follow</h4>
          <div className="flex gap-3 text-sm">
            <a href="#" className="hover:underline">
              Facebook
            </a>
            <a href="#" className="hover:underline">
              Instagram
            </a>
            <a href="#" className="hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container-balanced py-4 text-xs text-ink/70">
          © {new Date().getFullYear()} Newvisionimmi. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
