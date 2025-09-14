import { Logos as LogosType } from "@/types/blocks/landing";

export function Logos({
  logos,
  className,
}: {
  logos: LogosType;
  className?: string;
}) {
  return (
    <section className={`bg-background py-16 ${logos.className} ${className}`}>
      <div className={`mx-auto max-w-5xl px-6`}>
        <p className="text-center text-muted-foreground text-md font-medium">
          {logos.title}
        </p>
        <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
          {logos.items?.map((item, idx) => (
            <img
              key={idx}
              className="h-8 w-fit dark:invert"
              src={item.image?.src ?? ""}
              alt={item.image?.alt ?? ""}
              height="20"
              width="auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
