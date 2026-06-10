import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Props = {
  to?: string;
  href?: string;
  variant?: "primary" | "ghost" | "imessage";
  children: ReactNode;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-all duration-200";

const variants = {
  primary:
    "bg-ink text-bone hover:bg-ink/85 hover:-translate-y-0.5 shadow-[0_1px_0_rgba(255,255,255,0.1)_inset]",
  ghost:
    "border border-ink/15 text-ink hover:bg-ink/5",
  imessage:
    "text-white bg-gradient-to-b from-[oklch(0.70_0.18_252)] to-[oklch(0.55_0.22_258)] hover:opacity-95 shadow-[0_8px_24px_-8px_oklch(0.55_0.22_258_/_0.6)]",
};

export function CTAButton({ to, href, variant = "primary", children, className = "" }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (to) return <Link to={to} className={cls}>{children} <span aria-hidden>→</span></Link>;
  return (
    <a href={href ?? "#"} className={cls}>
      {children} <span aria-hidden>→</span>
    </a>
  );
}