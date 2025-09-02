import { Gallery } from "@/components/gallery"

export const metadata = {
  title: "Success Stories | Newvisionimmi",
  description: "Results gallery for visas, IELTS/PTE, and Spoken English.",
}

export default function SuccessStories() {
  return (
    <div className="section">
      <div className="container-balanced">
        <h1 className="font-heading text-3xl font-semibold">Success Stories</h1>
        <p className="mt-2 text-ink/80">Explore real results from our clients.</p>
        <div className="mt-6 flex gap-6 text-sm">
          <div>
            <span className="font-semibold">x</span> visas approved
          </div>
          <div>
            <span className="font-semibold">y</span> IELTS/PTE achievers
          </div>
          <div>
            <span className="font-semibold">z</span> Spoken English graduates
          </div>
        </div>
        <div className="mt-6">
          <Gallery />
        </div>
      </div>
    </div>
  )
}
