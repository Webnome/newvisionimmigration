import Link from "next/link"

export function IndianServices() {
  return (
    <div className="md:col-span-2" id="indian-services-home">
      <h3 className="font-heading text-xl md:text-2xl font-semibold" style={{ color: "#1E2E5A" }}>
        Indian Services
      </h3>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border p-5 bg-[#a5b7ea]">
          <h4 className="font-semibold text-[#2464a8]">Indian Police Clearance Certificate (PCC)</h4>
          <p className="mt-2 text-sm text-white">
            Who needs it, required documents, timelines, and our end‑to‑end guidance.
          </p>
          <Link href="/services/india/pcc" className="mt-3 inline-flex text-[#0061FF] hover:underline">
            Learn more →
          </Link>
        </div>
        <div className="rounded-xl border p-5 bg-[#a5b7ea]">
          <h4 className="font-semibold text-[#2464a8]">Indian Passport</h4>
          <p className="mt-2 text-sm text-white">
            Adult, Minor, New Born, Surrender, Lost/Damaged — what to prepare and how we assist.
          </p>
          <Link href="/services/india/passport" className="mt-3 inline-flex text-[#0061FF] hover:underline">
            Learn more →
          </Link>
        </div>
        <div className="rounded-xl border p-5 bg-[#a5b7ea]">
          <h4 className="font-semibold text-[#2464a8]">OCI Card</h4>
          <p className="mt-2 text-sm text-white">
            New OCI, lost/damaged replacement, and address/occupation updates with proper specs.
          </p>
          <Link href="/services/india/oci" className="mt-3 inline-flex text-[#0061FF] hover:underline">
            Learn more →
          </Link>
        </div>
        <div className="rounded-xl border p-5 bg-[#a5b7ea]">
          <h4 className="font-semibold text-[#2464a8]">Indian Services Foreigners</h4>
          <p className="mt-2 text-sm text-white">
            Driver License Verification guidance. Indian Services for Foreigners
          </p>
          <Link href="/services/india/other" className="mt-3 inline-flex text-[#0061FF] hover:underline">
            Learn more →
          </Link>
        </div>
      </div>
    </div>
  )
}