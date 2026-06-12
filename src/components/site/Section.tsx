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
    default: "bg-background",
    muted: "bg-secondary/40",
    highlight: "bg-signal/5",
    naked: "",
  };

  const toneClass = bleed ? "" : toneClasses[tone];

  return (
    <section className={`w-full ${toneClass} ${className}`}>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow mb-6">{children}</div>;
}

type H2Size = "sm" | "md" | "lg";

const h2Sizes: Record<H2Size, string> = {
  sm: "text-2xl md:text-4xl",
  md: "text-3xl md:text-5xl",
  lg: "text-4xl md:text-6xl",
};

export function H2({
  children,
  className = "",
  size = "md",
}: {
  children: ReactNode;
  className?: string;
  size?: H2Size;
}) {
  return (
    <h2 className={`font-display ${h2Sizes[size]} ${className}`}>
      {children}
    </h2>
  );
}

export function Lede({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`mt-5 max-w-2xl text-lg md:text-xl text-muted-foreground ${className}`}>
      {children}
    </p>
  );
}
