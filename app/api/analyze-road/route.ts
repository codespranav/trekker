import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { imageUrl } = await req.json();

  const response = await fetch(
    "https://serverless.roboflow.com/pranavs-workspace-vkhwj/workflows/detect-and-classify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: process.env.ROBOFLOW_API_KEY, // 🔐 ENV
        inputs: {
          image: {
            type: "url",
            value: imageUrl,
          },
        },
      }),
    }
  );

  const result = await response.json();
  return NextResponse.json(result);
}
