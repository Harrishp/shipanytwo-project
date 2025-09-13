import {
  Hero,
  Stats,
  Showcases,
  Pricing,
  FAQ,
  Testimonials,
  CTA,
  Features,
  Logos,
  FeaturesGrid,
  FeaturesList,
  FeaturesAccordion,
  FeaturesStep,
} from "@/blocks/landing";
import { loadMessages } from "@/core/i18n/request";
import { Header } from "@/types/blocks/landing";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = await getTranslations("landing.header");

  const { locale } = await params;
  setRequestLocale(locale);

  const landingData = await loadMessages("landing", locale);

  return (
    <>
      {landingData.hero && <Hero data={landingData.hero} />}
      {landingData.logos && <Logos data={landingData.logos} />}

      {/* {landingData.showcases && <Showcases data={landingData.showcases} />} */}
      {landingData.introduce && <FeaturesList data={landingData.introduce} />}
      {landingData.benefit && <FeaturesAccordion data={landingData.benefit} />}
      {landingData.usage && <FeaturesStep data={landingData.usage} />}
      {landingData.features && <Features data={landingData.features} />}

      {/* {landingData.introduce && <FeaturesGrid />} */}

      <Pricing />
      {landingData.faq && <FAQ data={landingData.faq} />}
      {landingData.testimonials && (
        <Testimonials data={landingData.testimonials} />
      )}
      <Stats />
      <CTA />
    </>
  );
}
