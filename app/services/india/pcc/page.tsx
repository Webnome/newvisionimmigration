export default function Page() {
  return (
    <main className="section">
      <div className="container-balanced max-w-3xl">
        <h1 className="text-3xl font-semibold text-[#1E2E5A]">Indian Police Clearance Certificate (PCC)</h1>
        <p className="mt-3 text-[#606F85]">
          We provide end‑to‑end assistance for PCC: eligibility, document checklist, appointment guidance, and
          timelines.
        </p>
        <h2 className="mt-6 text-xl font-semibold text-[#1E2E5A]">Who needs PCC?</h2>
        <p className="mt-2 text-[#606F85]">Work/Study/PR pathways, employer verification, long‑stay visas and more.</p>
        <h2 className="mt-6 text-xl font-semibold text-[#1E2E5A]">Documents & Process</h2>
        <ul className="mt-2 list-disc pl-6 text-[#606F85]">
          <li>Valid passport, address proof, recent photos per spec</li>
          <li>Application form review and slot booking guidance</li>
          <li>Follow‑up and expected timeline brief</li>
        </ul>
        <a
          href="/start-application?service=indian&sub=pcc" // pass preselected service/sub
          className="mt-6 inline-flex rounded-md bg-[#0061FF] px-4 py-2 text-white hover:bg-[#1E90FF]"
        >
          Start Application
        </a>
      </div>
    </main>
  )
}
