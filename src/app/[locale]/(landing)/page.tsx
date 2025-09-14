import {
  Stats,
  FAQ,
  CTA,
  Features,
  Logos,
  Hero,
  Testimonials,
  FeaturesStep,
  FeaturesAccordion,
  FeaturesGrid,
  Showcases,
  FeaturesList,
} from "@/blocks/landing";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("landing");

  return (
    <>
      <Hero hero={t.raw("hero")} />
      <Logos logos={t.raw("logos")} />
      <FeaturesList features={t.raw("introduce")} />
      <FeaturesAccordion features={t.raw("benefits")} />
      <FeaturesStep features={t.raw("usage")} />
      <Features features={t.raw("features")} />
      <Stats stats={t.raw("stats")} className="bg-muted" />
      <Showcases showcases={t.raw("showcases")} />
      <FAQ faq={t.raw("faq")} />
      <Testimonials testimonials={t.raw("testimonials")} />
      <CTA cta={t.raw("cta")} className="bg-muted" />
    </>
  );
}
