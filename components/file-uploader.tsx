"use client"

import React from "react"

type UploadedFile = { name: string; url: string; size: number; type: string }

export default function FileUploader({
  onUploaded,
  accept = ".pdf,.jpg,.jpeg,.png,.webp",
  maxFiles = 5,
}: {
  onUploaded?: (files: UploadedFile[]) => void
  accept?: string
  maxFiles?: number
}) {
  const [files, setFiles] = React.useState<File[]>([])
  const [uploading, setUploading] = React.useState(false)
  const [uploaded, setUploaded] = React.useState<UploadedFile[]>([])
  const [error, setError] = React.useState<string | null>(null)

  const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const picked = Array.from(e.target.files ?? [])
    const next = [...files, ...picked].slice(0, maxFiles)
    setFiles(next)
  }

  const handleUpload = async () => {
    if (files.length === 0) return
    setUploading(true)
    setError(null)
    try {
      const form = new FormData()
      for (const f of files) form.append("files", f)
      const res = await fetch("/api/upload", { method: "POST", body: form })
      const json = await res.json()
      if (!res.ok) throw new Error(json?.error || "Upload failed")
      setUploaded(json.files)
      onUploaded?.(json.files)
    } catch (e: any) {
      setError(e?.message ?? "Something went wrong")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="rounded-lg border bg-white p-4">
      <label className="block text-sm font-medium text-[#1E2E5A]">Upload supporting documents</label>
      <p className="mt-1 text-sm text-[#606F85]">
        Accepted: PDF, JPG, PNG, WEBP. Max {maxFiles} files. Do not include sensitive data unless required.
      </p>

      <div className="mt-3 flex items-center gap-3">
        <input
          type="file"
          multiple
          onChange={onSelect}
          accept={accept}
          className="block w-full text-sm text-[#606F85]"
        />
        <button
          type="button"
          onClick={handleUpload}
          disabled={uploading || files.length === 0}
          className="inline-flex items-center rounded-md bg-[#0061FF] px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1E90FF] disabled:opacity-50"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>

      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

      {files.length > 0 && (
        <ul className="mt-3 space-y-2 text-sm text-[#606F85]">
          {files.map((f, i) => (
            <li key={i} className="flex items-center justify-between rounded-md bg-[#F5F7FA] px-3 py-2">
              <span className="truncate">{f.name}</span>
              <span className="shrink-0">{(f.size / 1024).toFixed(1)} KB</span>
            </li>
          ))}
        </ul>
      )}

      {uploaded.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-[#1E2E5A]">Uploaded</h4>
          <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {uploaded.map((f) => (
              <li key={f.url} className="rounded-md border bg-[#F5F7FA] p-2">
                <a href={f.url} target="_blank" rel="noopener noreferrer" className="text-[#0061FF] hover:underline">
                  {f.name}
                </a>
                <p className="text-xs text-[#606F85]">{(f.size / 1024).toFixed(1)} KB</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
