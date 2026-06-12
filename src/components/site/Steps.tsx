type Step = { title: string; body: string };

export function Steps({ steps }: { steps: Step[] }) {
  return (
    <div className="relative">
      {/* Decorative connector — desktop only */}
      <div
        className="absolute top-11 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-border to-transparent hidden md:block"
        aria-hidden
      />
      <div className="grid gap-6 md:grid-cols-3 md:items-start md:gap-8">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className={`relative flex flex-col rounded-2xl border border-border bg-card p-6 md:p-8 ${
              i === 1 ? 'md:mt-10' : i === 2 ? 'md:mt-4' : ''
            }`}
          >
            {/* Large decorative step number */}
            <span
              className="font-display text-6xl text-signal/10 select-none leading-none"
              aria-hidden
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="card-title mt-3">{step.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{step.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
