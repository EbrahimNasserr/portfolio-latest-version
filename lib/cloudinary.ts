import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

/**
 * Fetch all videos from a specific Cloudinary folder
 * @param folderPath - The folder path in Cloudinary (e.g., "portfolio")
 * @returns Array of video resources
 */
export async function getVideosFromFolder(folderPath: string = "portfolio") {
  try {
    const result = await cloudinary.search
      .expression(`resource_type:video AND folder:${folderPath}/*`)
      .sort_by("created_at", "desc")
      .max_results(100)
      .execute();

    return result.resources.map((resource: any) => ({
      publicId: resource.public_id,
      url: resource.secure_url,
      format: resource.format,
      width: resource.width,
      height: resource.height,
      duration: resource.duration,
      bytes: resource.bytes,
      createdAt: resource.created_at,
      folder: resource.folder,
    }));
  } catch (error) {
    console.error("Error fetching videos from Cloudinary:", error);
    return [];
  }
}

/**
 * Get video URL by public ID
 * @param publicId - The public ID of the video
 * @param options - Transformation options
 * @returns The video URL
 */
export function getVideoUrl(
  publicId: string,
  options?: {
    format?: string;
    quality?: string | number;
    transformation?: any[];
  }
) {
  return cloudinary.url(publicId, {
    resource_type: "video",
    ...options,
  });
}

/**
 * Get optimized video URL for web playback
 * @param publicId - The public ID of the video
 * @returns Optimized video URL
 */
export function getOptimizedVideoUrl(publicId: string) {
  return cloudinary.url(publicId, {
    resource_type: "video",
    format: "mp4",
    quality: "auto",
    fetch_format: "auto",
  });
}
