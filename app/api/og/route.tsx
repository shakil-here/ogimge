import { ImageResponse } from "@vercel/og"
import type { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const title = searchParams.get("title") || "ডিফল্ট শিরোনাম"

    // Load the Bengali font
    const notoSansBengaliRegular = await fetch(
      "https://cdn.jsdelivr.net/gh/notofonts/notofonts.github.io/fonts/NotoSansBengali/unhinted/ttf/NotoSansBengali-Bold.ttf",
    ).then((res) => res.arrayBuffer())

    // Load the new logo
    const logoUrl ="/phlogo.png"


    return new ImageResponse(
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #4158D0, #C850C0, #FFCC70)",
          padding: "40px",
          fontFamily: '"Noto Sans Bengali"',
          position: "relative",
        }}
      >
        {/* Logo at the top */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={logoUrl || "/placeholder.svg"}
            width="200"
            height="auto"
            alt="Physics Hunters Logo"
            style={{
              objectFit: "contain",
            }}
          />
        </div>

        {/* Text content */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            maxWidth: "900px",
            marginTop: "140px", // Increased to accommodate larger logo
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              margin: "0",
              lineHeight: "1.4",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              whiteSpace: "pre-wrap",
            }}
          >
            {decodeURIComponent(title).replace(/\\n/g, "\n")}
          </h1>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Noto Sans Bengali",
            data: notoSansBengaliRegular,
            style: "normal",
            weight: 700,
          },
        ],
      },
    )
  } catch (error) {
    console.error(error)
    return new Response("Failed to generate OG image", { status: 500 })
  }
}

