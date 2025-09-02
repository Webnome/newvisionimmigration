"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

type MenuItem = {
  label: string
  href: string
  mega?: { label: string; href: string }[]
}

const menu: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Visa Services",
    href: "/visa",
    mega: [
      { label: "Australia", href: "/visa/australia" },
      { label: "Singapore", href: "/visa/singapore" },
      { label: "Canada", href: "/visa/canada" },
      { label: "United Kingdom", href: "/visa/uk" }, // keep country examples; path may already exist
      { label: "Cyprus", href: "/visa/cyprus" },
    ],
  },
  {
    label: "IELTS & PTE Coaching",
    href: "/coaching",
    mega: [
      { label: "IELTS Academic", href: "/coaching#ielts-academic" },
      { label: "IELTS General Training", href: "/coaching#ielts-general" },
      { label: "PTE Academic", href: "/coaching#pte" },
      { label: "Spoken English (In-person)", href: "/coaching#spoken" },
    ],
  },
  { label: "Indian Services", href: "/services/india" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [open, setOpen] = useState<number | null>(null)
  const [mobile, setMobile] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!navRef.current) return
      if (!navRef.current.contains(e.target as Node)) setOpen(null)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null)
    }
    document.addEventListener("click", onClick)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("click", onClick)
      document.removeEventListener("keydown", onKey)
    }
  }, [])

  return (
    <header className="bg-brand text-white">
      <div ref={navRef} className="container-balanced flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="New Vision Immigration logo" width={44} height={44} />
          <span className="sr-only">New Vision Immigration</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {menu.map((item, idx) => {
            const isOpen = open === idx
            const hasMega = !!item.mega?.length
            return (
              <div key={item.label} className="relative">
                {hasMega ? (
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-haspopup="menu"
                    onClick={() => setOpen(isOpen ? null : idx)}
                    className={`px-3 py-2 rounded-md hover:bg-white/10 transition text-sm font-medium`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 rounded-md hover:bg-white/10 transition text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                )}

                {hasMega && isOpen && (
                  <div
                    role="menu"
                    className="absolute left-1/2 -translate-x-1/2 mt-3 w-[620px] rounded-xl border border-white/10 bg-white text-ink shadow-2xl p-4 data-[state=open]:animate-in"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {item.mega!.map((m) => (
                        <Link
                          key={m.href}
                          href={m.href}
                          className="rounded-lg px-3 py-2 hover:bg-brand/5 transition"
                          onClick={() => setOpen(null)}
                        >
                          {m.label}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 flex justify-end">
                      <Link
                        href={item.href}
                        className="px-3 py-2 rounded-md btn-gradient"
                        onClick={() => setOpen(null)}
                      >
                        Explore {item.label}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
          <Link
            href="/start-application"
            className="ml-2 px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 transition"
          >
            Start Application
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => {
            setMobile((v) => !v)
            setOpen(null)
          }}
          aria-expanded={mobile}
          className="md:hidden rounded-md border border-white/20 px-3 py-2"
        >
          Menu
        </button>
      </div>

      {/* Mobile drawer */}
      {mobile && (
        <div className="md:hidden border-t border-white/10 bg-brand/95 text-white">
          <div className="container-balanced py-4 space-y-3">
            {menu.map((item, idx) => {
              const hasMega = !!item.mega?.length
              const isOpen = open === idx
              return (
                <div key={item.label}>
                  {hasMega ? (
                    <>
                      <button
                        onClick={() => setOpen(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between py-2 font-medium"
                        aria-expanded={isOpen}
                      >
                        <span>{item.label}</span>
                        <span className={`transition ${isOpen ? "rotate-180" : ""}`}>⌄</span>
                      </button>
                      {isOpen && (
                        <div className="pl-3 flex flex-col gap-1">
                          {item.mega!.map((m) => (
                            <Link
                              key={m.href}
                              href={m.href}
                              className="text-sm py-1 text-white/80"
                              onClick={() => setMobile(false)}
                            >
                              {m.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={item.href} className="block py-2 font-medium" onClick={() => setMobile(false)}>
                      {item.label}
                    </Link>
                  )}
                </div>
              )
            })}
            <Link
              href="/start-application"
              className="block text-center px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 transition"
            >
              Start Application
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
