import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link
        className="inline-flex items-center gap-2 text-base font-medium text-foreground no-underline"
        href="/"
      >
        <Image
          alt=""
          className="size-6"
          height={24}
          loading="eager"
          src="/supacat.svg"
          width={24}
        />
        <span>Supacat</span>
      </Link>
      <ModeToggle />
    </header>
  );
}
