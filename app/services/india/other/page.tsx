export default function Page() {
  return (
    <main className="section">
      <div className="container-balanced max-w-3xl">
        <h1 className="text-3xl font-semibold text-[#1E2E5A]">Other Indian Services</h1>
        <p className="mt-3 text-[#606F85]">
          Power of Attorney, Affidavits, Certificates, Driver License Verification & more.
        </p>
        <h2 className="mt-6 text-xl font-semibold text-[#1E2E5A]">Coverage</h2>
        <ul className="mt-2 list-disc pl-6 text-[#606F85]">
          <li>Document templates and attestation guidance</li>
          <li>Notary, apostille, and embassy procedures</li>
          <li>End‑to‑end coordination & timelines</li>
        </ul>
        <a
          href="/start-application?service=indian&sub=other" // pass preselected service/sub
          className="mt-6 inline-flex rounded-md bg-[#0061FF] px-4 py-2 text-white hover:bg-[#1E90FF]"
        >
          Start Application
        </a>
      </div>
    </main>
  )
}
