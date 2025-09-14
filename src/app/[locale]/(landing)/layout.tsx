import { ReactNode } from "react";
import { Header, Footer } from "@/blocks/landing";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function LandingLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("landing");

  return (
    <div className="w-screen h-screen">
      <Header header={t.raw("header")} />
      {children}
      <Footer footer={t.raw("footer")} />
    </div>
  );
}
