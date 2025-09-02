export default function Page() {
  return (
    <main className="section">
      <div className="container-balanced max-w-3xl">
        <h1 className="text-3xl font-semibold text-[#1E2E5A]">Indian Passport Assistance</h1>
        <p className="mt-3 text-[#606F85]">
          Adult, Minor, New Born, Surrender, Lost/Damaged — documentation to appointment support.
        </p>
        <h2 className="mt-6 text-xl font-semibold text-[#1E2E5A]">How we help</h2>
        <ul className="mt-2 list-disc pl-6 text-[#606F85]">
          <li>Checklist and form validation</li>
          <li>Photo & document spec guidance</li>
          <li>Appointment preparation and next steps</li>
        </ul>
        <a
          href="/start-application?service=indian&sub=passport" // pass preselected service/sub
          className="mt-6 inline-flex rounded-md bg-[#0061FF] px-4 py-2 text-white hover:bg-[#1E90FF]"
        >
          Start Application
        </a>
      </div>
    </main>
  )
}
