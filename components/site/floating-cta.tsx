"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export function FloatingCTA() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <Link
      href="/start-application"
      aria-label="Start Application"
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)" }}
      className={`fixed right-4 md:right-6 lg:right-8 z-40 rounded-full px-5 py-3 font-medium text-white shadow-lg shadow-blue-500/20
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E90FF] focus-visible:ring-offset-2
        transition-all duration-300 ease-out transform
        ${show ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95 pointer-events-none"}
        bg-[#0061FF] hover:bg-[#1E90FF]`}
    >
      Start Application
    </Link>
  )
}
