export function Steps({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {steps.map((s, i) => (
        <div key={i} className="relative rounded-2xl border border-border bg-card p-6">
          <div className="op-label text-[0.7rem] text-signal">STEP 0{i + 1}</div>
          <h3 className="card-title mt-3 text-xl">{s.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
        </div>
      ))}
    </div>
  );
}
