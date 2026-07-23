import { LinkRow } from "@/components/link-row";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

export default function Page() {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="sr-only">Supacat</h1>
      <Reveal index={0}>
        <p className="leading-relaxed text-pretty text-foreground">
          We create software to help people because it&apos;s fulfilling and we&apos;re passionate
          about it. We believe that&apos;s the best reason to do anything.
        </p>
      </Reveal>

      <Reveal index={1}>
        <Section heading="Projects">
          <ul>
            <LinkRow
              description="The best place to find the best products"
              href="https://neeed.directory"
              title="Neeed Directory"
            />
            <LinkRow
              description="Track daily habits with lock in challenges and maintain your streaks"
              href="https://www.uselockin.app"
              title="Lock In"
            />
          </ul>
        </Section>
      </Reveal>

      <Reveal index={2}>
        <Section heading="Elsewhere">
          <ul>
            <LinkRow
              description="Official Supacat merchandise and apparel"
              href="https://merch.supacat.io"
              title="Merch"
            />
            <LinkRow
              description="julien@supacat.io"
              href="mailto:julien@supacat.io"
              title="Get in touch"
            />
          </ul>
        </Section>
      </Reveal>
    </div>
  );
}
