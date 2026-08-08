export function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-[692px] items-center justify-between gap-4 px-6 pt-14 pb-12 sm:pb-16 md:pb-20">
      <span className="font-mono text-xs text-muted-foreground tabular-nums">
        {new Date().getFullYear()}
      </span>
      <span className="text-xs text-muted-foreground">We build software because we care.</span>
    </footer>
  );
}
