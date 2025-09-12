import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex flex-col items-center gap-1">
      <a className="inline-block font-medium text-medium no-underline" href="/">
        <Image
          alt="Supacat"
          className="h-40 w-40"
          height={100}
          src="/supacat.svg"
          width={100}
        />
      </a>
      <a className="inline-block font-medium text-medium no-underline" href="/">
        Supacat
      </a>
    </header>
  );
};
