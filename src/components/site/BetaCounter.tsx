type Props = {
  variant?: "compact" | "full";
  filled?: number;
  total?: number;
};

/**
 * Scarcity component: 12/15 beta spots filled, $497 vs $1,494 anchoring.
 *
 * Psychology:
 * - Anchoring: shows full price FIRST in the loss-aversion line
 * - Loss aversion: "Lock in $497 before it goes to $1,494" (loss = $997 delta)
 * - Social proof: "12 of 15 claimed" = others committed
 * - Scarcity: "3 spots remaining" = limited quantity
 *
 * Design: soft brutalism — visible structure, assertive copy, mechanical feel.
 * Full variant: progress bar + stats
 * Compact variant: just the text line
 */
export function BetaCounter({
  compact,
  variant = "light",
  className,
}: {
  compact?: boolean;
  variant?: "light" | "dark";
  className?: string;
}) {
  const filled = 12;
  const total = 15;
  const remaining = total - filled;
  const currentPrice = 497;
  const fullPrice = 1494;
  const progress = (filled / total) * 100;

  const inkColor = variant === "dark" ? "text-bone" : "text-ink";
  const clayColor = variant === "dark" ? "text-bone/65" : "text-clay";
  const trackColor = variant === "dark" ? "bg-bone/[0.12]" : "bg-ink/[0.06]";
  const borderColor = variant === "dark" ? "border-bone/[0.15]" : "border-border";

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

  return (
    <div className="space-y-3">
      {/* Progress bar */}
      <div className="h-2 w-full overflow-hidden rounded-full bg-ink/10" aria-hidden>
        <div
          className="h-full w-full origin-left rounded-full bg-signal transition-all"
          style={{ transform: `scaleX(${pct / 100})` }}
        />
      </div>

      {/* Stats line — told as a story, not just numbers */}
      <div className="flex items-center justify-between gap-2 text-sm">
        <span className="font-medium text-ink">
          {filled}
          <span className="text-clay">/{total}</span> beta spots filled
        </span>
        <span className="op-label whitespace-nowrap text-clay">
          {remaining} left
        </span>
      </div>

      {/* Loss-aversion line */}
      <p className="text-sm leading-relaxed text-clay">
        <span className="font-medium text-signal">{remaining} spots</span> remain at
        beta pricing.
        <span className="block md:inline">
          {" "}Price goes to <span className="font-medium text-ink line-through">$1,494</span> when
          they're gone.
        </span>
      </p>
    </div>
  );
}
