import { ArrowUpRight } from "lucide-react";

type LinkRowProps = {
  href: string;
  title: string;
  description: string;
};

export function LinkRow({ href, title, description }: LinkRowProps) {
  const isHttp = href.startsWith("http");
  const isMailto = href.startsWith("mailto:");
  const rel = isHttp || isMailto ? "noopener" : undefined;
  const target = isHttp ? "_blank" : undefined;

  return (
    <li>
      <a
        className="group -mx-4 flex items-start gap-3 rounded-lg px-4 py-3 transition-colors duration-150 hover:bg-card-hover focus-visible:bg-card-hover"
        href={href}
        rel={rel}
        target={target}
      >
        <div className="flex flex-1 flex-col gap-y-0.5 text-sm">
          <h3 className="font-medium text-foreground">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
          {target === "_blank" ? <span className="sr-only">(opens in new tab)</span> : null}
        </div>
        <ArrowUpRight
          aria-hidden="true"
          className="mt-0.5 size-[18px] shrink-0 -translate-x-0.5 text-muted-foreground opacity-0 transition-[opacity,transform] duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
        />
      </a>
    </li>
  );
}
