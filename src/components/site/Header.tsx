import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { VERTICALS } from "@/lib/site";
import { CTAButton } from "./CTAButton";

export function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState(false);

  function isActive(path: string) {
    if (path === "/services") {
      return pathname === path || pathname.startsWith(path + "/");
    }
    return pathname === path;
  }

  function navLink(path: string) {
    const active = isActive(path);
    return [
      "rounded-full px-4 py-2 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2",
      active
        ? "bg-ink/8 text-ink font-medium"
        : "text-ink/80 hover:bg-ink/5 hover:text-ink active:bg-ink/10 active:scale-[0.97]",
    ].join(" ");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-signal" aria-hidden />
          <span className="font-display text-2xl">Clockout</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setServices(true)}
            onMouseLeave={() => setServices(false)}
          >
            <Link to="/services" className={navLink("/services")}>
              Services
            </Link>
            {services && (
              <div className="absolute left-0 top-full w-[28rem] rounded-2xl border border-border bg-card p-3 shadow-2xl">
                <div className="grid grid-cols-2 gap-1">
                  {VERTICALS.map((v) => (
                    <Link
                      key={v.slug}
                      to={`/services/${v.slug}`}
                      className="flex flex-col rounded-xl px-3 py-2 hover:bg-secondary"
                    >
                      <span className="text-sm font-medium">{v.name}</span>
                      <span className="text-xs text-muted-foreground">{v.short}</span>
                    </Link>
                  ))}
                </div>
                <div className="col-span-2 mt-1 border-t border-border pt-2">
                  <Link
                    to="/operator-os"
                    className="flex flex-col rounded-xl px-3 py-2 hover:bg-secondary"
                  >
                    <span className="text-sm font-medium">Operator OS</span>
                    <span className="text-xs text-muted-foreground">
                      Personal AI operating system methodology
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link to="/audit" className={navLink("/audit")}>
            Audit
          </Link>
          <Link to="/pricing" className={navLink("/pricing")}>
            Pricing
          </Link>
          <Link to="/operator-os" className={navLink("/operator-os")}>
            Operator OS
          </Link>
          <Link to="/about" className={navLink("/about")}>
            About
          </Link>
          <Link to="/blog" className={navLink("/blog")}>
            Blog
          </Link>
        </nav>

        <div className="hidden md:block">
          <CTAButton to="/assessment" variant="primary">
            Beta Access
          </CTAButton>
        </div>

        <button
          className="md:hidden rounded-full border border-border px-3 py-1.5 text-sm"
          onClick={() => setOpen((o) => !o)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setOpen((o) => !o);
            }
          }}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background md:hidden">
          <div className="mx-auto max-w-6xl px-6 py-4 grid gap-1">
            <Link to="/services" onClick={() => setOpen(false)}
              className={`py-2 text-sm rounded-lg px-2 -mx-2 ${isActive("/services") ? "bg-ink/8 font-medium" : "active:bg-ink/5"}`}>
              Services
            </Link>
            {VERTICALS.map((v) => (
              <Link
                key={v.slug}
                to={`/services/${v.slug}`}
                onClick={() => setOpen(false)}
                className={`pl-6 py-1.5 text-sm rounded-lg ${isActive("/services/" + v.slug) ? "bg-ink/8 font-medium text-foreground" : "text-muted-foreground active:bg-ink/5"}`}
              >
                {v.name}
              </Link>
            ))}
            <Link to="/audit" onClick={() => setOpen(false)}
              className={`py-2 text-sm rounded-lg px-2 -mx-2 ${isActive("/audit") ? "bg-ink/8 font-medium" : "active:bg-ink/5"}`}>
              Audit
            </Link>
            <Link to="/pricing" onClick={() => setOpen(false)}
              className={`py-2 text-sm rounded-lg px-2 -mx-2 ${isActive("/pricing") ? "bg-ink/8 font-medium" : "active:bg-ink/5"}`}>
              Pricing
            </Link>
            <Link to="/operator-os" onClick={() => setOpen(false)}
              className={`py-2 text-sm rounded-lg px-2 -mx-2 ${isActive("/operator-os") ? "bg-ink/8 font-medium" : "active:bg-ink/5"}`}>
              Operator OS
            </Link>
            <Link to="/about" onClick={() => setOpen(false)}
              className={`py-2 text-sm rounded-lg px-2 -mx-2 ${isActive("/about") ? "bg-ink/8 font-medium" : "active:bg-ink/5"}`}>
              About
            </Link>
            <Link to="/blog" onClick={() => setOpen(false)}
              className={`py-2 text-sm rounded-lg px-2 -mx-2 ${isActive("/blog") ? "bg-ink/8 font-medium" : "active:bg-ink/5"}`}>
              Blog
            </Link>
            <div className="pt-3" onClick={() => setOpen(false)}>
              <CTAButton to="/assessment" variant="primary">
                Beta Access
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
