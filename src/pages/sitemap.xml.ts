import type { APIRoute } from "astro";

const pages = [
  "",
  "advisory/",
  "about/",
  "writing/",
  "contact/",
];

export const GET: APIRoute = ({ site }) => {
  const urls = pages
    .map((page) => `  <url>\n    <loc>${site}${page}</loc>\n  </url>`)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
};
