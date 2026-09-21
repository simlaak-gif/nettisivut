import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        className={`mt-4 text-3xl sm:text-4xl md:text-5xl font-display font-extrabold leading-[1.05] ${
          light ? "text-white" : "text-[var(--ink)]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base sm:text-lg leading-relaxed ${
            light ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
