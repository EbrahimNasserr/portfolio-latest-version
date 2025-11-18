export const revalidate = 0;

export async function GET() {
  const baseUrl = "https://ebrahim-nasser.vercel.app";
  const now = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${baseUrl}</loc>
      <lastmod>${now}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>${baseUrl}/about</loc>
      <lastmod>${now}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>${baseUrl}/projects</loc>
      <lastmod>${now}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>${baseUrl}/contact</loc>
      <lastmod>${now}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
  </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "no-store",
    },
  });
}
