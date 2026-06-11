import { SITE } from "./site";

/** Full absolute URL for a given path */
export function fullUrl(path: string): string {
  const base = SITE.url.replace(/\/+$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${cleanPath}`;
}
