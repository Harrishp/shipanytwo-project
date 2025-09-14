import React from "react";
import { Link } from "@/core/i18n/navigation";
import { Button } from "@/components/ui/button";
import { SmartIcon } from "@/blocks/common/smart-icon";
import Image from "next/image";
import { SocialAvatars } from "@/blocks/common";
import { Hero as HeroType } from "@/types/blocks/landing";

export function Hero({
  hero,
  className,
}: {
  hero: HeroType;
  className?: string;
}) {
  return (
    <>
      <section
        id={hero.id}
        className={`pt-24 pb-8 md:pt-36 md:pb-8 ${hero.className} ${className}`}
      >
        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="text-foreground text-balance text-4xl font-semibold sm:mt-12 sm:text-6xl">
            {hero.title}
          </h1>
          <p
            className="text-muted-foreground mb-8 mt-4 text-balance text-lg"
            dangerouslySetInnerHTML={{ __html: hero.description ?? "" }}
          />

          {hero.buttons && (
            <div className="flex items-center justify-center gap-4">
              {hero.buttons.map((button, idx) => (
                <Button
                  asChild
                  size={button.size || "default"}
                  variant={button.variant || "default"}
                  className="px-4 text-sm"
                  key={idx}
                >
                  <Link
                    href={button.url ?? ""}
                    target={button.target ?? "_self"}
                  >
                    {button.icon && <SmartIcon name={button.icon as string} />}
                    <span>{button.title}</span>
                  </Link>
                </Button>
              ))}
            </div>
          )}

          {hero.tip && (
            <p
              className="text-muted-foreground mt-6 block text-center text-sm"
              dangerouslySetInnerHTML={{ __html: hero.tip ?? "" }}
            />
          )}

          {hero.show_avatars && <SocialAvatars num={999} />}
        </div>
      </section>
      {hero.image && (
        <section className="border-foreground/10 relative mt-8 border-y sm:mt-16">
          <div className="relative z-10 mx-auto max-w-6xl border-x px-3">
            <div className="border-x">
              <div
                aria-hidden
                className="h-3 w-full bg-[repeating-linear-gradient(-45deg,var(--color-foreground),var(--color-foreground)_1px,transparent_1px,transparent_4px)] opacity-5"
              />
              <Image
                className="border-t shadow-md"
                src={hero.image?.src ?? ""}
                alt={hero.image?.alt ?? ""}
                width={1280}
                height={720}
                sizes="(max-width: 640px) 768px, (max-width: 768px) 1024px, (max-width: 1024px) 1280px, 1280px"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
