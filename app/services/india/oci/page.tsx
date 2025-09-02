export default function Page() {
  return (
    <main className="section">
      <div className="container-balanced max-w-3xl">
        <h1 className="text-3xl font-semibold text-[#1E2E5A]">OCI Card Assistance</h1>
        <p className="mt-3 text-[#606F85]">New OCI, replacement for lost/damaged, address/occupation updates.</p>
        <h2 className="mt-6 text-xl font-semibold text-[#1E2E5A]">What you get</h2>
        <ul className="mt-2 list-disc pl-6 text-[#606F85]">
          <li>Specs for photo/signature scans</li>
          <li>Form filling and document checks</li>
          <li>Submission guidance and tracking</li>
        </ul>
        <a
          href="/start-application?service=indian&sub=oci" // pass preselected service/sub
          className="mt-6 inline-flex rounded-md bg-[#0061FF] px-4 py-2 text-white hover:bg-[#1E90FF]"
        >
          Start Application
        </a>
      </div>
    </main>
  )
}
