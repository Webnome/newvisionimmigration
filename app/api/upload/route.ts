import { NextResponse } from "next/server"
import { put } from "@vercel/blob"

// Accept multipart/form-data with one or multiple files in the "files" field
export async function POST(req: Request) {
  try {
    const form = await req.formData()
    const entries = form.getAll("files") as File[]
    if (!entries || entries.length === 0) {
      return NextResponse.json({ error: "No files uploaded" }, { status: 400 })
    }

    const uploaded: { name: string; url: string; size: number; type: string }[] = []
    for (const file of entries) {
      // Sanitize filename
      const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_")
      const { url } = await put(`newvisionimmi/${Date.now()}-${safeName}`, file, {
        access: "public",
      })
      uploaded.push({ name: safeName, url, size: file.size, type: file.type })
    }

    return NextResponse.json({ files: uploaded }, { status: 200 })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? "Upload failed" }, { status: 500 })
  }
}
