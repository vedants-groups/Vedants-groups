/**
 * SEO / social-sharing helpers.
 *
 * Social crawlers (WhatsApp, Facebook, LinkedIn, Twitter/X, Slack) do NOT run
 * JavaScript and are strict about metadata. In particular:
 *   - `og:url` and `canonical` MUST be absolute https:// URLs. A relative value
 *     like "/about" causes several scrapers (notably WhatsApp) to drop the
 *     preview card entirely.
 *   - `og:image` MUST be an absolute https:// URL that returns 200 with an
 *     image/* content-type.
 *
 * This module is the single source of truth for the site origin so no route can
 * accidentally emit a relative social URL again.
 */

/** Canonical production origin (no trailing slash). */
export const SITE_URL = "https://vedantsgroups.com";

/** Default social share image (1200×630 JPEG served from /public). */
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

/** Build an absolute URL for a site-relative path (e.g. "/about"). */
export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

type MetaTag = Record<string, string>;

/**
 * Produce the per-route social meta + canonical link for a given path.
 * Always emits absolute URLs. Pass an absolute `image` to override the default.
 */
export function routeSeo(opts: {
  path?: string;
  title?: string;
  description?: string;
  image?: string;
}): { meta: MetaTag[]; links: MetaTag[] } {
  const url = absoluteUrl(opts.path ?? "/");
  const image = opts.image ?? OG_IMAGE;

  const meta: MetaTag[] = [];
  if (opts.title) {
    meta.push({ title: opts.title });
    meta.push({ property: "og:title", content: opts.title });
    meta.push({ name: "twitter:title", content: opts.title });
  }
  if (opts.description) {
    meta.push({ name: "description", content: opts.description });
    meta.push({ property: "og:description", content: opts.description });
    meta.push({ name: "twitter:description", content: opts.description });
  }
  meta.push({ property: "og:url", content: url });
  meta.push({ property: "og:image", content: image });
  meta.push({ property: "og:image:secure_url", content: image });
  meta.push({ name: "twitter:image", content: image });

  return { meta, links: [{ rel: "canonical", href: url }] };
}
