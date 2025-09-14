import { Button } from "@/components/ui/button";
import { Link } from "@/core/i18n/navigation";
import { SmartIcon } from "@/blocks/common/smart-icon";
import { CTA as CTAType } from "@/types/blocks/landing";

export function CTA({ cta, className }: { cta: CTAType; className?: string }) {
  return (
    <section id={cta.id} className={`py-16 md:py-24 ${className}`}>
      <div className="container">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            {cta.title}
          </h2>
          <p
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: cta.description ?? "" }}
          />

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {cta.buttons?.map((button, idx) => (
              <Button
                asChild
                size={button.size || "default"}
                variant={button.variant || "default"}
                key={idx}
              >
                <Link href={button.url || ""} target={button.target || "_self"}>
                  {button.icon && <SmartIcon name={button.icon as string} />}
                  <span>{button.title}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
