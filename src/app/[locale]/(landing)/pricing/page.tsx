import { Pricing, FAQ, Testimonials } from "@/blocks/landing";
import { setRequestLocale } from "next-intl/server";
import { loadMessages } from "@/core/i18n/request";

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const landingData = await loadMessages("landing", locale);

  return (
    <>
      {landingData.pricing && <Pricing />}
      {landingData.faq && <FAQ data={landingData.faq} />}
      {landingData.testimonials && (
        <Testimonials data={landingData.testimonials} />
      )}
    </>
  );
}
