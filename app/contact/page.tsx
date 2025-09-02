import ContactForm from "./ContactForm"

export const metadata = {
  title: "Contact | Newvisionimmi",
  description: "Get in touch: WhatsApp, phone, email, or form. Office map included.",
}

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container-balanced grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="font-heading text-3xl font-semibold">Contact</h1>
          <p className="mt-2 text-ink/80">We usually respond within one business day.</p>
          <ContactForm />
          <div className="mt-6 text-sm space-y-2">
            <div>Email: hello@newvisionimmi.com</div>
            <div>Phone: +91 90000 00000</div>
            <div className="flex gap-3">
              <a className="text-brand hover:underline" href="https://wa.me/919000000000" aria-label="WhatsApp chat">
                WhatsApp
              </a>
              <a className="text-brand hover:underline" href="#" aria-label="Instagram">
                Instagram
              </a>
              <a className="text-brand hover:underline" href="#" aria-label="Facebook">
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded-xl border bg-white overflow-hidden">
            {/* Map placeholder */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/office-map.png" alt="Office map placeholder" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
