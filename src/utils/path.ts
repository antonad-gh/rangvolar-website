const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

/** Prefix a root-relative path with the deployment base path (needed for GitHub Pages). */
export function href(path: string): string {
  if (!path.startsWith('/')) return path;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return path === '/' ? `${base}/` : `${base}${path}`;
}
