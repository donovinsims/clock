export function GuaranteeBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-3 rounded-full border border-signal/30 bg-signal/5 px-4 py-2 ${className}`}
    >
      <span className="op-label text-signal">Guarantee</span>
      <span className="text-sm text-ink/80">
        10 hrs/week or I keep working. Free.
      </span>
    </div>
  );
}
