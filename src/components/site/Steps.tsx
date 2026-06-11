type Step = { title: string; body: string };

export function Steps({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid gap-4 md:grid-cols-3">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="relative flex flex-col rounded-2xl border border-border bg-card p-6"
        >
          <span className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-signal/10 text-xs font-mono text-signal">
            0{i + 1}
          </span>
          <h3 className="text-base font-semibold">{step.title}</h3>
          <p className="mt-3 text-sm text-muted-foreground">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
