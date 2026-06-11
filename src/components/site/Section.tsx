import type { ReactNode } from "react";

type SectionTone = "default" | "muted" | "highlight" | "naked";

export function Section({
  children,
  className = "",
  bleed = false,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  bleed?: boolean;
  tone?: SectionTone;
}) {
  const toneClasses: Record<SectionTone, string> = {
    default: "border-b border-border bg-background",
    muted: "border-b border-border bg-secondary/40",
    highlight: "border-b border-border bg-card/40",
    naked: "",
  };

  const toneClass = bleed ? "" : toneClasses[tone];

  return (
    <section className={`w-full ${toneClass} ${className}`}>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow mb-6">{children}</div>;
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h2 className={`text-4xl md:text-6xl tracking-tight ${className}`}>{children}</h2>;
}

export function Lede({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground ${className}`}>
      {children}
    </p>
  );
}
