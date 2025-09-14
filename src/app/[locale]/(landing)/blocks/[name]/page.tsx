import {
  Hero,
  Logos,
  Features,
  Stats,
  Showcases,
  FAQ,
  CTA,
  FeaturesList,
  FeaturesStep,
  FeaturesAccordion,
} from "@/blocks/landing";
import { HeroOne } from "@/blocks/landing/hero-one";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

export default async function BlocksPage({
  params,
}: {
  params: Promise<{ locale: string; name: string }>;
}) {
  const { locale, name } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("landing");

  switch (name) {
    case "hero":
      return <Hero hero={t.raw("hero")} className="bg-muted" />;
    case "hero-one":
      return <HeroOne hero={t.raw("hero")} />;
    case "logos":
      return <Logos logos={t.raw("logos")} />;
    case "features":
      return (
        <>
          <Features features={t.raw("features")} />
          <FeaturesList features={t.raw("features")} className="bg-muted" />
          <FeaturesStep features={t.raw("features")} />
          <FeaturesAccordion features={t.raw("features")} />
        </>
      );
    case "stats":
      return <Stats stats={t.raw("stats")} />;
    case "faq":
      return <FAQ faq={t.raw("faq")} />;
    case "cta":
      return <CTA cta={t.raw("cta")} />;
    case "showcases":
      return <Showcases showcases={t.raw("showcases")} />;
    default:
      return <div>Block not found</div>;
  }
}
