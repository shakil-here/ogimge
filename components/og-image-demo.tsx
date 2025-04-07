"use client"

import { useState } from "react"
import Image from "next/image"

export default function OGImageDemo() {
  const [title, setTitle] = useState("বাংলা ওজি ইমেজ\nমাল্টিপল লাইন সাপোর্ট")
  const [ogImageUrl, setOgImageUrl] = useState(`/api/og?title=${encodeURIComponent(title)}`)

  const handleGenerate = () => {
    setOgImageUrl(`/api/og?title=${encodeURIComponent(title)}`)
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <Image
          src="https://i.postimg.cc/9FPnqTqQ/rsz-physics-01.png"
          alt="Physics Hunters Logo"
          width={100}
          height={50}
          className="h-auto"
        />
        <h2 className="text-2xl font-bold">OG Image Generator</h2>
      </div>

      <div className="mb-6">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Title (Bengali Text)
        </label>
        <textarea
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md"
          rows={4}
          placeholder="Enter Bengali text here..."
        />
        <p className="mt-1 text-sm text-gray-500">Use line breaks for multiple lines</p>
      </div>

      <button
        onClick={handleGenerate}
        className="mb-6 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md hover:opacity-90 transition-opacity"
      >
        Generate OG Image
      </button>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Preview:</h3>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <img src={ogImageUrl || "/placeholder.svg"} alt="OG Image Preview" className="w-full h-auto" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">HTML Meta Tag:</h3>
        <pre className="p-3 bg-gray-100 rounded-md overflow-x-auto text-sm">
          {`<meta property="og:image" content="https://phyhuntogimagegen.vercel.app${ogImageUrl}" />`}
        </pre>
      </div>
    </div>
  )
}

