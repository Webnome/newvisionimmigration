import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { name?: string; email?: string; message?: string } | null
  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 })
  }
  // In a real app, forward to an email service or CRM here.
  console.log("[v0] Contact submission:", body)
  return NextResponse.json({ ok: true })
}
