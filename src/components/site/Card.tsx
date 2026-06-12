import type { ReactNode } from "react";

type CardVariant = "soft" | "outline" | "ghost" | "elevated";

export function Card({
  children,
  className = "",
  variant = "elevated",
}: {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
}) {
  const variants: Record<CardVariant, string> = {
    soft: "rounded-2xl border border-border bg-card",
    outline: "rounded-2xl border border-border bg-transparent",
    ghost: "rounded-2xl border border-transparent bg-transparent",
    elevated: "rounded-2xl bg-card shadow-sm",
  };

  return <div className={`${variants[variant]} ${className}`}>{children}</div>;
}
