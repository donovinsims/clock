export function GuaranteeBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-3 rounded-full border border-signal/30 bg-signal/5 px-4 py-2 ${className}`}
    >
      <span className="op-label text-[0.65rem] text-signal">Guarantee</span>
      <span className="text-sm text-ink/80">
         If the system doesn&apos;t recover 10 hours a week within 30 days, I keep working until it does. Free.
      </span>
    </div>
  );
}
