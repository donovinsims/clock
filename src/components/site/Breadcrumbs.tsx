import { Link } from "@tanstack/react-router";

interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-6 pt-6">
      <ol className="flex items-center gap-2 text-sm text-muted-foreground">
        <li>
          <Link to="/" className="hover:text-ink transition-colors">
            Home
          </Link>
        </li>
        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center gap-2" {...(!crumb.href ? { 'aria-current': 'page' } : {})}>
            <span aria-hidden className="text-muted-foreground/40">/</span>
            {crumb.href ? (
              <Link to={crumb.href} className="hover:text-ink transition-colors">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-ink font-medium">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
