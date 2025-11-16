import { NextResponse } from "next/server";
import { getVideosFromFolder } from "@/lib/cloudinary";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get("folder") || "portfolio";

    const videos = await getVideosFromFolder(folder);

    return NextResponse.json(
      {
        success: true,
        videos,
        count: videos.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching videos:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch videos",
        videos: [],
      },
      { status: 500 }
    );
  }
}
