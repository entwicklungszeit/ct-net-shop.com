/**
 * Prefixes a path with the configured base URL (for GitHub Pages subpath deployment).
 * Use this for all internal links and static assets when `base` is set in astro.config.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL
  const normalizedBase = base.replace(/\/$/, '')
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${normalizedBase}${normalizedPath}`
}
