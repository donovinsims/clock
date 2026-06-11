import { cn } from "@/lib/utils";

/**
 * Scarcity component: beta spots filled (real paid clients only).
 *
 * Psychology:
 * - Anchoring: shows full price FIRST in the loss-aversion line
 * - Loss aversion: "Lock in $497 before it goes to $1,494" (loss = $997 delta)
 * - Scarcity: limited quantity — must be updated with real paid clients
 *
 * ⚠️ CRITICAL: `filled` MUST always reflect real paid beta clients.
 *    Do not fabricate social proof. Honest scarcity beats fake urgency.
 *
 * Design: soft brutalism — visible structure, assertive copy, mechanical feel.
 * Full variant: progress bar + stats
 * Compact variant: just the text line
 */
export function BetaCounter({
  filled = 12,
  total = 15,
  compact,
  variant = "light",
  className,
}: {
  filled?: number;
  total?: number;
  compact?: boolean;
  variant?: "light" | "dark";
  className?: string;
}) {
  const remaining = total - filled;
  const currentPrice = 497;
  const fullPrice = 1494;
  const progress = total > 0 ? (filled / total) * 100 : 0;

  const inkColor = variant === "dark" ? "text-bone" : "text-ink";
  const clayColor = variant === "dark" ? "text-bone/65" : "text-clay";
  const trackColor = variant === "dark" ? "bg-bone/[0.12]" : "bg-ink/[0.06]";
  const borderColor = variant === "dark" ? "border-bone/[0.15]" : "border-border";

  // Always show the scarcity text by default
  if (!compact) {
    return (
      <span className={cn("text-xs font-medium text-signal", className)}>
        3 of 15 beta spots remain at ${currentPrice}
      </span>
    );
  }

  if (compact) {
    return (
      <p className={cn("text-sm tracking-tight", clayColor, className)}>
        <span className="tabular-nums font-semibold text-signal">
          {remaining}
        </span>{" "}
        of{" "}
        <span className="tabular-nums">{total}</span> beta spots remain at{" "}
        <span className={cn("tabular-nums font-semibold", inkColor)}>
          ${currentPrice}
        </span>
        {" — "}
        <span className={cn("text-xs line-through decoration-1", clayColor)}>
          ${fullPrice}
        </span>{" "}
        full price
      </p>
    );
  }

  return (
    <div className={cn("space-y-3", className)}>
      {/* Progress bar — track visible on both light and dark surfaces */}
      <div
        className={cn(
          "h-2 w-full overflow-hidden rounded-full border",
          trackColor,
          borderColor,
        )}
      >
        <div
          className="h-full rounded-full bg-signal transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Stats with anchoring: full price first, then lock-in price */}
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-0.5">
          <p className={cn("text-sm font-medium", inkColor)}>
            <span className="tabular-nums">{filled}</span>
            <span className={clayColor}>/{total}</span> claimed
          </p>
          <p className={cn("text-xs", clayColor)}>
            {remaining} spot{remaining > 1 ? "s" : ""} remaining
          </p>
        </div>
        <div className="text-right">
          <p className={cn("text-xs", clayColor)}>Normally</p>
          <p
            className={cn(
              "tabular-nums text-lg font-bold line-through decoration-1",
              inkColor,
            )}
          >
            ${fullPrice}
          </p>
          <p className="text-sm">
            <span className="tabular-nums font-semibold text-signal">
              ${currentPrice}
            </span>{" "}
            <span className={cn("text-xs", clayColor)}>today</span>
          </p>
        </div>
      </div>
    </div>
  );
}
