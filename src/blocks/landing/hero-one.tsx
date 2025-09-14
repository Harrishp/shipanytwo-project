"use client";

import React from "react";

import { motion, useScroll, useTransform } from "motion/react";
import { Hero as HeroType } from "@/types/blocks/landing";

export function HeroOne({ hero }: { hero: HeroType }) {
  const { scrollY } = useScroll();
  const parallaxFactor = 0.25;
  const y = useTransform(scrollY, [0, 500], [0, 500 * parallaxFactor], {
    clamp: false,
  });
  return (
    <>
      <main
        role="main"
        data-theme="dark"
        className="bg-background overflow-hidden"
      >
        <section>
          <div className="relative pb-36 pt-24 lg:pt-16">
            <div className="relative z-10 mx-auto max-w-5xl px-6">
              <div className="text-center">
                <h1 className="mx-auto mt-8 max-w-xl text-balance text-4xl font-semibold md:text-5xl">
                  {hero.title}
                </h1>
                <p className="text-muted-foreground mx-auto mb-8 mt-4 max-w-xl text-balance text-lg">
                  {hero.description}
                </p>

                {/* <div className="flex items-center justify-center gap-3 max-sm:flex-col">
                  <Button asChild>
                    <Link href="#link">
                      <span className="text-nowrap">Start Using</span>
                    </Link>
                  </Button>
                  <Button key={2} asChild variant="outline" className="pl-3.5">
                    <Link href="#link">
                      <Play className="fill-foreground !size-3" />
                      <span className="text-nowrap">Watch Video</span>
                    </Link>
                  </Button>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
