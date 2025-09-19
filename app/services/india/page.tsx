import ServiceInquiryForm from "@/components/service-inquiry-form"

export default function IndianServicesPage() {
  return (
    <main>
      <section className="container-balanced py-10 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1E2E5A]">Indian Services</h1>
        <p className="mt-2 max-w-3xl text-[#606F85]">
          Outside India and need official documentation? We help you choose the right category, assemble documents, book
          appointments, and submit correctly the first time—saving you time and stress.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href="/start-application?service=indian" className="btn-primary">
            Start Application
          </a>
          <a href="/contact?subject=Indian%20Services" className="btn-outline">
            Speak to an Advisor
          </a>
        </div>
      </section>

      <section className="container-balanced pb-8">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border bg-white p-6">
            <h3 className="text-xl font-semibold text-[#1E2E5A]">Indian Police Clearance Certificate (PCC)</h3>
            <p className="mt-1 text-[#606F85]">Who needs it, documents, timelines, and how we guide you end-to-end.</p>
            <a href="/services/india/pcc" className="mt-3 inline-flex text-[#0061FF] hover:text-[#1E90FF] text-sm">
              Learn more →
            </a>
          </article>
          <article className="rounded-xl border bg-white p-6">
            <h3 className="text-xl font-semibold text-[#1E2E5A]">Indian Passport</h3>
            <p className="mt-1 text-[#606F85]">
              Adult, Minor, New Born, Surrender, Lost/Damaged — what to prepare and how we assist.
            </p>
            <a href="/services/india/passport" className="mt-3 inline-flex text-[#0061FF] hover:text-[#1E90FF] text-sm">
              Learn more →
            </a>
          </article>
          <article className="rounded-xl border bg-white p-6">
            <h3 className="text-xl font-semibold text-[#1E2E5A]">OCI Card</h3>
            <p className="mt-1 text-[#606F85]">
              New OCI, lost/damaged replacement, address/occupation updates with proper specs.
            </p>
            <a href="/services/india/oci" className="mt-3 inline-flex text-[#0061FF] hover:text-[#1E90FF] text-sm">
              Learn more →
            </a>
          </article>
          <article className="rounded-xl border bg-white p-6">
            <h3 className="text-xl font-semibold text-[#1E2E5A]">Other Indian Services</h3>
            <p className="mt-1 text-[#606F85]">
              Power of Attorney, Affidavits, Certificates, and Driver License Verification guidance.
            </p>
            <a href="/services/india/other" className="mt-3 inline-flex text-[#0061FF] hover:text-[#1E90FF] text-sm">
              Learn more →
            </a>
          </article>
        </div>
      </section>

      <section className="container-balanced py-10 md:py-12">
        <h2 className="text-2xl font-semibold text-[#1E2E5A]">Quick inquiry</h2>
        <p className="mt-1 text-[#606F85]">Tell us a few details and we’ll reach out shortly.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="rounded-xl border bg-white p-5 md:p-6 shadow-sm">
              <ServiceInquiryForm service="Indian Services" />
            </div>
          </div>
          <aside className="md:col-span-5">
            <div className="rounded-xl border bg-white overflow-hidden shadow-sm">
              <div
                className="h-40 w-full bg-[url('/consultants-helping-with-documents.png')] bg-cover bg-center"
                aria-hidden="true"
              />
              <div className="p-5 md:p-6">
                <h3 className="text-lg font-semibold text-[#1E2E5A]">How we help</h3>
                <ul className="mt-3 space-y-2 text-[#606F85] list-disc pl-5">
                  <li>Confirm the right category for your case</li>
                  <li>Give you a clear document checklist</li>
                  <li>Prepare forms and appointment guidance</li>
                  <li>Review and submit to avoid rejection</li>
                </ul>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="/start-application?service=indian"
                    className="h-7 rounded-md bg-[#0061FF] hover:bg-[#1E90FF] text-white px-4 text-sm"
                  >
                    Start Application
                  </a>
                  <a
                    href="/contact?subject=Indian%20Services"
                    className="h-7 rounded-md border px-4 text-sm text-[#1E2E5A] hover:text-[#0061FF]"
                  >
                    Speak to an Advisor
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
