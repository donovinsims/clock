import type { ReactNode } from "react";

export function GuaranteeBadge({
  description = "10 hrs/wk in 30 days",
  className = "",
  children,
}: {
  description?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`inline-flex whitespace-nowrap items-center gap-2 rounded-full border border-signal/30 bg-signal/5 px-2.5 py-2 ${className}`}
    >
      <span className="op-label text-signal">{children ?? "Guarantee"}</span>
      <span className="text-sm text-ink/80">{description}</span>
    </div>
  );
}
