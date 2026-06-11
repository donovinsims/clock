import type { ReactNode } from "react";

type CardVariant = "soft" | "outline" | "ghost";

export function Card({
  children,
  className = "",
  variant = "soft",
}: {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
}) {
  const variants: Record<CardVariant, string> = {
    soft: "rounded-3xl border border-border bg-card",
    outline: "rounded-3xl border border-border bg-background",
    ghost: "rounded-3xl border border-transparent bg-transparent",
  };

  return <div className={`${variants[variant]} ${className}`}>{children}</div>;
}
