import type { ReactNode } from "react";

type SectionProps = {
  heading?: string;
  children: ReactNode;
};

export function Section({ heading, children }: SectionProps) {
  return (
    <section>
      {heading ? (
        <h2 className="text-foreground mb-4 text-lg font-medium text-balance">
          {heading}
        </h2>
      ) : null}
      <div>{children}</div>
    </section>
  );
}
