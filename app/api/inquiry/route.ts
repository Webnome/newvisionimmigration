import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    console.log("[v0] inquiry received:", data)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
