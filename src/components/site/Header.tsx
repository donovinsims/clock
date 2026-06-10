import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { VERTICALS } from "@/lib/site";
import { CTAButton } from "./CTAButton";

export function Header() {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState(false);
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
            <Link
              to="/services"
              className="rounded-full px-4 py-2 text-sm text-ink/80 hover:bg-ink/5 hover:text-ink"
            >
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
              </div>
            )}
          </div>
          <Link to="/solutions" className="rounded-full px-4 py-2 text-sm text-ink/80 hover:bg-ink/5 hover:text-ink">
            Solutions
          </Link>
          <Link to="/operator-os" className="rounded-full px-4 py-2 text-sm text-ink/80 hover:bg-ink/5 hover:text-ink">
            Operator OS
          </Link>
          <Link to="/about" className="rounded-full px-4 py-2 text-sm text-ink/80 hover:bg-ink/5 hover:text-ink">
            About
          </Link>
          <Link to="/blog" className="rounded-full px-4 py-2 text-sm text-ink/80 hover:bg-ink/5 hover:text-ink">
            Blog
          </Link>
        </nav>

        <div className="hidden md:block">
          <CTAButton to="/assessment">Book the audit</CTAButton>
        </div>

        <button
          className="md:hidden rounded-full border border-border px-3 py-1.5 text-sm"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto max-w-6xl px-6 py-4 grid gap-1">
            <Link to="/services" onClick={() => setOpen(false)} className="py-2 text-sm">Services</Link>
            {VERTICALS.map((v) => (
              <Link
                key={v.slug}
                to={`/services/${v.slug}`}
                onClick={() => setOpen(false)}
                className="pl-4 py-1.5 text-sm text-muted-foreground"
              >
                {v.name}
              </Link>
            ))}
            <Link to="/solutions" onClick={() => setOpen(false)} className="py-2 text-sm">Solutions</Link>
            <Link to="/operator-os" onClick={() => setOpen(false)} className="py-2 text-sm">Operator OS</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="py-2 text-sm">About</Link>
            <Link to="/blog" onClick={() => setOpen(false)} className="py-2 text-sm">Blog</Link>
            <div className="pt-3" onClick={() => setOpen(false)}><CTAButton to="/assessment">Book the audit</CTAButton></div>
          </div>
        </div>
      )}
    </header>
  );
}