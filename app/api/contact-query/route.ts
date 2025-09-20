import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { Name?: string; Email?: string; Message?: string } | null
  if (!body?.Name || !body?.Email || !body?.Message) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 })
  }
  // In a real app, forward to an email service or CRM here.
  console.log("[v0] Contact Query submission:", body)
  return NextResponse.json({ ok: true })
}