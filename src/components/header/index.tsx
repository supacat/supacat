import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
  return (
    <header className="-mr-2 flex items-center justify-between">
      <Link className="inline-flex items-center text-foreground no-underline" href="/">
        <Image
          alt="Supacat"
          className="size-6"
          height={24}
          loading="eager"
          src="/supacat.svg"
          width={24}
        />
      </Link>
      <ModeToggle />
    </header>
  );
}
