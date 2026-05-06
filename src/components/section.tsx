import type { ReactNode } from "react";

type SectionProps = {
  heading?: string;
  children: ReactNode;
};

export function Section({ heading, children }: SectionProps) {
  return (
    <section>
      {heading ? (
        <h2 className="mb-4 text-balance font-medium text-foreground text-lg">
          {heading}
        </h2>
      ) : null}
      <div>{children}</div>
    </section>
  );
}
