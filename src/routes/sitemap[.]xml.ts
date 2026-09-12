import { createFileRoute } from "@tanstack/react-router";
import { SERVICES } from "@/data/services";
import { INDUSTRIES } from "@/data/industries";
import { absoluteUrl } from "@/lib/seo";

const paths = [
  "/",
  "/about",
  "/services",
  "/industries",
  "/faqs",
  "/contact",
  ...SERVICES.map((s) => `/services/${s.slug}`),
  ...INDUSTRIES.map((i) => `/industries/${i.slug}`),
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const lastmod = new Date().toISOString().slice(0, 10);
        const urls = paths
          .map((p) => {
            // Sitemaps require absolute <loc> URLs — Google rejects relative paths.
            const loc = absoluteUrl(p);
            const priority = p === "/" ? "1.0" : "0.8";
            return `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>${priority}</priority></url>`;
          })
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
