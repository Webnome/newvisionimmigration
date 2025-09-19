export const metadata = {
  title: "IELTS & PTE Coaching | Newvisionimmi",
  description:
    "Expert trainers, in-person batches, and proven strategies for IELTS Academic/General, PTE Academic, and Spoken English.",
}

export default function CoachingPage() {
  return (
    <div className="section">
      <div className="container-balanced space-y-10">
        <header>
          <h1 className="font-heading text-3xl font-semibold">IELTS & PTE Coaching</h1>
          <p className="mt-2 text-ink/80">
            Expert trainers, flexible schedules, in-person only. Enroll now to boost your scores.
          </p>
        </header>

        <section id="ielts-academic">
          <h2 className="font-heading text-2xl font-semibold">IELTS Academic</h2>
          <p className="mt-1 text-ink/80">
            Skills: Listening, Reading, Writing, Speaking with exam strategies and timed mocks.
          </p>
        </section>

        <section id="ielts-general">
          <h2 className="font-heading text-2xl font-semibold">IELTS General Training</h2>
          <p className="mt-1 text-ink/80">Focused on workplace and everyday communication for migration pathways.</p>
        </section>

        <section id="pte">
          <h2 className="font-heading text-2xl font-semibold">PTE Academic</h2>
          <p className="mt-1 text-ink/80">Computer-based modules with practical templates and scoring tips.</p>
        </section>

        <section id="spoken">
          <h2 className="font-heading text-2xl font-semibold">Spoken English (In-person only)</h2>
          <ul className="list-disc pl-5 text-ink/80">
            <li>Beginner</li>
            <li>Intermediate</li>
            <li>Advanced</li>
          </ul>
        </section>

        <section aria-labelledby="timetable">
          <h2 id="timetable" className="font-heading text-2xl font-semibold">
            In-Person Batch Timetable
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm bg-white rounded-xl border">
              <thead className="bg-brand/5 text-ink">
                <tr>
                  <th className="text-left p-3">Course</th>
                  <th className="text-left p-3">Days</th>
                  <th className="text-left p-3">Timing</th>
                  <th className="text-left p-3">Mode</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  { course: "IELTS Academic", days: "Mon, Wed, Fri", time: "7:00–8:30 PM", mode: "In-person" },
                  { course: "IELTS General Training", days: "Tue, Thu", time: "7:00–8:30 PM", mode: "In-person" },
                  { course: "PTE Academic", days: "Mon–Thu", time: "6:00–7:00 PM", mode: "In-person" },
                  { course: "Spoken English (Beg/Int/Adv)", days: "Mon–Sat", time: "5:00–6:00 PM", mode: "In-person" },
                ].map((r) => (
                  <tr key={r.course} className="hover:bg-brand/3">
                    <td className="p-3 font-medium">{r.course}</td>
                    <td className="p-3">{r.days}</td>
                    <td className="p-3">{r.time}</td>
                    <td className="p-3">{r.mode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="/start-application" className="px-4 py-2 rounded-md btn-gradient">
              Enroll (In-Person)
            </a>
            <a
              href="https://wa.me/919000000000?text=I%20want%20to%20speak%20to%20a%20trainer%20about%20batches"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md border border-brand text-brand hover:bg-brand/5"
            >
              Speak to a Trainer
            </a>
          </div>
        </section>

        {/* <section>
          <a href="/success-stories" className="text-brand font-medium hover:underline">
            See Success Highlights →
          </a>
        </section> */}
      </div>
    </div>
  )
}
