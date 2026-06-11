import type { ReactNode } from "react";

export function GuaranteeBadge({
  description = "10 hrs/wk back in 30 days or I keep working",
  className = "",
  children,
}: {
  description?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`inline-flex items-center gap-3 whitespace-nowrap rounded-full border border-signal/30 bg-signal/5 px-4 py-2 ${className}`}
    >
      <span className="op-label text-signal">{children ?? "Guarantee"}</span>
      <span className="text-sm text-ink/80">{description}</span>
    </div>
  );
}
