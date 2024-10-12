import Image from "next/image";
import Supacat from "@/app/supacat.svg";

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-1">
      <a className="text-medium inline-block font-medium no-underline" href="/">
        <Image
          src={Supacat}
          alt="Supacat"
          width={100}
          height={100}
          className="w-40 h-40"
        />
      </a>
      <a className="text-medium inline-block font-medium no-underline" href="/">
        Supacat
      </a>
    </header>
  );
}
