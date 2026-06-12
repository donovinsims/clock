import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Props = {
  to: string;
  variant?: "primary" | "ghost" | "tertiary";
  children: ReactNode;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ink focus-visible:outline-none focus-visible:ring-offset-2";

const variants = {
  primary:
    "bg-ink text-bone hover:bg-ink/85 hover:-translate-y-0.5 active:scale-[0.97] active:translate-y-0 shadow-[0_1px_0_rgba(255,255,255,0.1)_inset]",
  ghost: "border border-ink/15 text-ink hover:bg-ink/5 active:bg-ink/10 active:scale-[0.97]",
  tertiary: "text-ink/60 hover:text-ink transition-colors",
};

export function CTAButton({ to, variant = "primary", children, className = "" }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const showArrow = variant !== "tertiary";
  return (
    <Link to={to} className={cls}>
      {children} {showArrow && <span aria-hidden>→</span>}
    </Link>
  );
}
