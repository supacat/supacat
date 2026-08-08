import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col gap-1">
      <h1 className="font-medium text-foreground">404: Page Not Found</h1>
      <p className="text-muted-foreground">The page you are looking for does not exist.</p>
      <Link
        className="mt-6 inline-flex items-center gap-1.5 self-start text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
        href="/"
      >
        <ArrowLeft aria-hidden="true" className="size-[18px]" />
        Back home
      </Link>
    </section>
  );
}
