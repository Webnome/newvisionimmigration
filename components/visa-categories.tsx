import Link from "next/link"

const visaCats = ["Tourist", "Study", "Family", "Work/Sponsor"]

export function VisaCategories() {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-start">
      {/* Left side */}
      <div>
        <h3
          className="font-heading text-xl md:text-2xl font-semibold"
          style={{ color: "#1E2E5A" }}
        >
          Visa Categories
        </h3>
        <div className="mt-4 flex flex-col gap-3">
          {visaCats.map((v) => (
            <div
              key={v}
              className="rounded-xl border p-4 hover:border-[#0061FF] transition-colors bg-white"
            >
              {v}
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Link
            href="/visa"
            className="text-[#0061FF] font-medium hover:underline"
          >
            Explore Visa Services →
          </Link>
        </div>
      </div>

      {/* Right side */}
      <div className="flex justify-center items-start">
        <img
          src="/visa-approval-stamp.png"
          alt="Visa illustration"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  )
}