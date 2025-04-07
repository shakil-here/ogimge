"use client"

import { useState } from "react"
import Image from "next/image"

export default function Home() {
  // Example Bengali text with multiple lines
  const defaultTitle = "বাংলা ওজি ইমেজ জেনারেটর\nমাল্টিপল লাইন সাপোর্ট করে"
  const [title, setTitle] = useState(defaultTitle)
  const encodedTitle = encodeURIComponent(title)
  const ogImageUrl = `/api/og?title=${encodedTitle}`

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 gap-8 bg-gradient-to-br from-indigo-100 to-purple-100">
      <div className="flex items-center gap-3">
        <Image
          src="https://i.postimg.cc/9FPnqTqQ/rsz-physics-01.png"
          alt="Physics Hunters Logo"
          width={100}
          height={50}
          className="h-auto"
        />
        <h1 className="text-3xl font-bold text-center">Bengali OG Image Generator</h1>
      </div>

      <div className="max-w-3xl w-full">
        <h2 className="text-xl font-semibold mb-2">Generated OG Image Preview:</h2>
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
          <img
            id="previewImg"
            src={ogImageUrl || "/placeholder.svg"}
            alt="OG Image Preview"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="max-w-3xl w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">How to Use:</h2>
        <p className="mb-4">Add this meta tag to your HTML head:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
          {`<meta property="og:image" content="https://phyhuntogimagegen.vercel.app/api/og?title=আপনার+শিরোনাম" />`}
        </pre>

        <h3 className="text-lg font-semibold mt-6 mb-2">Try with different text:</h3>
        <div className="flex flex-col gap-4">
          <textarea
            id="titleInput"
            placeholder="Enter Bengali text here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg min-h-[100px]"
          />
          <p className="text-sm text-gray-500">Use line breaks for multiple lines of text</p>
          <button
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
            onClick={() => {
              const encodedTitle = encodeURIComponent(title)
              const previewImg = document.getElementById("previewImg") as HTMLImageElement
              previewImg.src = `/api/og?title=${encodedTitle}`
            }}
          >
            Generate OG Image
          </button>
        </div>
      </div>

      <div className="max-w-3xl w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">API Usage:</h2>
        <p className="mb-2">Your OG image URL:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
          {`https://phyhuntogimagegen.vercel.app/og?title=${encodeURIComponent("বাংলা টেক্সট\nদ্বিতীয় লাইন")}`}
        </pre>
        <p className="mt-4 text-sm text-gray-600">Note: Use %0A or \n for line breaks in your URL-encoded text.</p>
      </div>
    </main>
  )
}

