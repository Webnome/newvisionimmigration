"use client"

import { useEffect, useMemo, useState } from "react"
import FileUploader from "../../components/file-uploader"

type Service = "Visa" | "IELTS" | "PTE" | "Spoken English" | "Indian Services"
const subOptions: Record<Service, string[]> = {
  Visa: ["Tourist", "Study", "Family", "Work/Sponsor"],
  IELTS: ["Academic", "General Training"],
  PTE: ["Academic"],
  "Spoken English": ["Beginner", "Intermediate", "Advanced"],
  "Indian Services": ["PCC", "Passport", "OCI Card", "Other"],
}
type Step = 1 | 2 | 3 | 4 | 5
type UploadedFile = { name: string; url: string; size: number; type: string }

export default function StartApplicationClient() {
  const [step, setStep] = useState<Step>(1)
  const [service, setService] = useState<Service | "">("")
  const [sub, setSub] = useState<string>("")
  const [form, setForm] = useState({ name: "", email: "", country: "", notes: "" })
  const [schedule, setSchedule] = useState<{ date?: string; time?: string }>({})
  const [docs, setDocs] = useState<UploadedFile[]>([])
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("nv-wizard")
    if (saved) {
      try {
        const v = JSON.parse(saved)
        setStep(v.step ?? 1)
        setService(v.service ?? "")
        setSub(v.sub ?? "")
        setForm(v.form ?? form)
        setDocs(v.docs ?? [])
        setSchedule(v.schedule ?? {})
      } catch {}
    }
    try {
      const params = new URLSearchParams(window.location.search)
      const svc = params.get("service")
      if (svc && svc.toLowerCase() === "indian") {
        const rawSub = (params.get("sub") || "").toLowerCase()
        const subMap: Record<string, string> = { pcc: "PCC", passport: "Passport", oci: "OCI Card", other: "Other" }
        setService("Indian Services")
        if (rawSub && subMap[rawSub]) setSub(subMap[rawSub])
        // Start at Personal (step 1) for Indian services per your flow
        setStep(1 as Step)
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    localStorage.setItem("nv-wizard", JSON.stringify({ step, service, sub, form, docs, schedule }))
  }, [step, service, sub, form, docs, schedule])

  const progress = useMemo(() => (({ 1: 20, 2: 40, 3: 60, 4: 80, 5: 100 }) as const)[step], [step])
  const isIndian = service === "Indian Services"

  const stepLabels = ["Personal", "Service", "Documents", "Schedule", "Review"]

  const renderStepper = () => (
    <div className="stepper" aria-label="Application steps">
      {stepLabels.map((label, idx) => {
        const i = idx + 1
        const active = step === i
        const complete = step > i
        return (
          <div key={label} className="stepper-item" data-active={active} data-complete={complete}>
            <span className="stepper-badge" aria-hidden="true">
              {i}
            </span>
            <span className="whitespace-nowrap">{label}</span>
            {i < stepLabels.length && <span className="stepper-sep" />}
          </div>
        )
      })}
    </div>
  )

  return (
    <div className="bg-[#F5F7FA] py-8">
      <div className="container-balanced max-w-3xl">
        <h1 className="font-heading text-3xl font-semibold text-[#1E2E5A]">Start Your Application</h1>
        <p className="mt-1 text-[#606F85]">
          Complete these short steps. You can save-and-resume any time on this device.
        </p>

        <div className="mt-5">{renderStepper()}</div>

        <div className="mt-4 h-2 bg-black/10 rounded-full overflow-hidden" aria-label="Progress bar">
          <div className="h-full" style={{ width: `${progress}%`, backgroundColor: "#0061FF" }} />
        </div>

        {!submitted ? (
          <div className="mt-6 space-y-6">
            {/* Step 1: Personal */}
            {step === 1 && (
              <div className="card space-y-4">
                <h2 className="font-semibold text-[#1E2E5A]">Your Details</h2>
                <div>
                  <label className="block text-sm font-medium text-[#1E2E5A]">First and last name</label>
                  <input
                    className="mt-1 w-full rounded-md border px-3 py-2"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1E2E5A]">Email</label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-md border px-3 py-2"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1E2E5A]">Current country (optional)</label>
                  <input
                    className="mt-1 w-full rounded-md border px-3 py-2"
                    value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1E2E5A]">Notes (optional)</label>
                  <textarea
                    rows={4}
                    className="mt-1 w-full rounded-md border px-3 py-2"
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  />
                </div>
                <div className="flex justify-between">
                  <button className="btn-outline" onClick={() => setStep(1)} disabled>
                    Back
                  </button>
                  <button className="btn-primary" onClick={() => setStep(isIndian ? 3 : 2)}>
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Service (skip for Indian Services) */}
            {step === 2 && !isIndian && (
              <div className="card">
                <h2 className="font-semibold text-[#1E2E5A]">Select your service</h2>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {(["Visa", "IELTS", "PTE", "Spoken English", "Indian Services"] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => {
                        setService(s)
                        // reset sub if service changes
                        setSub("")
                      }}
                      className={`rounded-lg border px-3 py-2 text-left ${
                        service === s ? "border-[#0061FF] ring-1 ring-[#0061FF]" : "hover:border-[#0061FF]"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                {service && (
                  <div className="mt-5">
                    <h3 className="text-sm font-medium text-[#1E2E5A]">Choose {service} option</h3>
                    <div className="mt-2 grid grid-cols-2 gap-3">
                      {subOptions[service as Service].map((o) => (
                        <button
                          key={o}
                          onClick={() => setSub(o)}
                          className={`rounded-lg border px-3 py-2 text-left ${
                            sub === o ? "border-[#0061FF] ring-1 ring-[#0061FF]" : "hover:border-[#0061FF]"
                          }`}
                        >
                          {o}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                <div className="mt-4 flex justify-between">
                  <button className="btn-outline" onClick={() => setStep(1)}>
                    Back
                  </button>
                  <button
                    className="btn-primary disabled:opacity-50"
                    disabled={!service || !sub}
                    onClick={() => setStep(3)}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Documents */}
            {step === 3 && (
              <div className="card space-y-4">
                <h2 className="font-semibold text-[#1E2E5A]">Upload documents</h2>
                <p className="text-sm text-[#606F85]">
                  Add any supporting documents (passport, ID, scorecards, financials). You can upload multiple files.
                </p>
                <FileUploader onUploaded={(files) => setDocs(files)} accept=".pdf,.jpg,.jpeg,.png,.webp" maxFiles={8} />
                {docs?.length > 0 && (
                  <div className="rounded-md bg-neutral-50 border p-3">
                    <h3 className="text-sm font-medium">Selected ({docs.length})</h3>
                    <ul className="mt-2 space-y-1 text-sm">
                      {docs.map((d) => (
                        <li key={d.url} className="flex items-center justify-between">
                          <a
                            href={d.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0061FF] hover:text-[#1E90FF]"
                          >
                            {d.name}
                          </a>
                          <span className="text-ink/60">{(d.size / 1024).toFixed(1)} KB</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="flex justify-between">
                  <button className="btn-outline" onClick={() => setStep(isIndian ? 1 : 2)}>
                    Back
                  </button>
                  <button
                    className="btn-primary disabled:opacity-50"
                    onClick={() => setStep(4)}
                    disabled={docs.length === 0}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Schedule (simple optional) */}
            {step === 4 && (
              <div className="card space-y-4">
                <h2 className="font-semibold text-[#1E2E5A]">Schedule (optional)</h2>
                <p className="text-sm text-[#606F85]">
                  Share a preferred date and time for a brief call. We’ll try our best.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-[#1E2E5A]">Preferred date</label>
                    <input
                      type="date"
                      className="mt-1 w-full rounded-md border px-3 py-2"
                      value={schedule.date || ""}
                      onChange={(e) => setSchedule({ ...schedule, date: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1E2E5A]">Preferred time</label>
                    <input
                      type="time"
                      className="mt-1 w-full rounded-md border px-3 py-2"
                      value={schedule.time || ""}
                      onChange={(e) => setSchedule({ ...schedule, time: e.target.value })}
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <button className="btn-outline" onClick={() => setStep(3)}>
                    Back
                  </button>
                  <button className="btn-primary" onClick={() => setStep(5)}>
                    Continue to review
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Review */}
            {step === 5 && (
              <div className="card space-y-3">
                <h2 className="font-semibold text-[#1E2E5A]">Review & Submit</h2>
                <div className="text-sm">
                  <div>
                    <strong>Service:</strong> {service || (isIndian ? "Indian Services" : "-")}
                  </div>
                  <div>
                    <strong>{isIndian ? "Sub‑service" : "Option"}:</strong> {sub || "-"}
                  </div>
                  <div>
                    <strong>Name:</strong> {form.name}
                  </div>
                  <div>
                    <strong>Email:</strong> {form.email}
                  </div>
                  <div>
                    <strong>Country:</strong> {form.country || "-"}
                  </div>
                  <div>
                    <strong>Preferred time:</strong>{" "}
                    {schedule.date || schedule.time ? `${schedule.date || ""} ${schedule.time || ""}` : "-"}
                  </div>
                  <div className="mt-2">
                    <strong>Documents:</strong>{" "}
                    {docs.length > 0 ? `${docs.length} file${docs.length > 1 ? "s" : ""}` : "None attached"}
                  </div>
                  {docs.length > 0 && (
                    <ul className="mt-2 list-disc pl-5">
                      {docs.map((d) => (
                        <li key={d.url}>
                          <a
                            href={d.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0061FF] hover:text-[#1E90FF]"
                          >
                            {d.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-2">
                    <strong>Notes:</strong> {form.notes || "-"}
                  </div>
                </div>
                <div className="flex justify-between">
                  <button className="btn-outline" onClick={() => setStep(4)}>
                    Back
                  </button>
                  <button
                    onClick={() => {
                      console.log("[v0] Application submitted", { service, sub, form, docs, schedule })
                      localStorage.removeItem("nv-wizard")
                      setSubmitted(true)
                    }}
                    className="btn-primary"
                  >
                    Submit application
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="mt-8 card">
            <h2 className="font-semibold text-[#1E2E5A]">Thanks! We will contact you soon.</h2>
            <p className="text-sm text-[#606F85] mt-1">Your submission was saved locally for your reference.</p>
          </div>
        )}
      </div>
    </div>
  )
}
