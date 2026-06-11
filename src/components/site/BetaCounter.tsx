type Props = {
  variant?: "compact" | "full";
  filled?: number;
  total?: number;
  /** Render with light-on-dark colors (for use on bg-ink surfaces) */
  dark?: boolean;
};

/**
 * Scarcity progress bar + copy that tells the whole story:
 * "12 of 15 beta spots filled · 3 remaining at $497 · price goes to $1,494"
 *
 * Uses Anchoring (start count of 15), Goal-Gradient (12/15 filled),
 * Scarcity (3 left), and Loss Aversion ($997 delta).
 */
export function BetaCounter({
  variant = "full",
  filled = 12,
  total = 15,
  dark = false,
}: Props) {
  const remaining = total - filled;
  const pct = (filled / total) * 100;
  const t = (light: string, darkCls: string) => (dark ? darkCls : light);

  if (variant === "compact") {
    return (
      <span>
        {filled} OF {total} FILLED · {remaining} LEFT
      </span>
    );
  }

  return (
    <div className="space-y-3">
      {/* Progress bar */}
      <div className={`h-2 w-full overflow-hidden rounded-full ${t("bg-ink/10", "bg-bone/10")}`} aria-hidden>
        <div
          className="h-full w-full origin-left rounded-full bg-signal transition-all"
          style={{ transform: `scaleX(${pct / 100})` }}
        />
      </div>

      {/* Stats line — told as a story, not just numbers */}
      <div className="flex items-center justify-between gap-2 text-sm">
        <span className={`font-medium ${t("text-ink", "text-bone")}`}>
          {filled}
          <span className={t("text-clay", "text-bone/50")}>/{total}</span> beta spots filled
        </span>
        <span className={`op-label whitespace-nowrap ${t("text-clay", "text-bone/50")}`}>
          {remaining} left
        </span>
      </div>

      {/* Loss-aversion line */}
      <p className={`text-sm leading-relaxed ${t("text-clay", "text-bone/60")}`}>
        <span className="font-medium text-signal">{remaining} spots</span> remain at
        beta pricing.
        <span className="block md:inline">
          {" "}Price goes to <span className={`font-medium ${t("text-ink", "text-bone")} line-through`}>$1,494</span> when
          they're gone.
        </span>
      </p>
    </div>
  );
}
