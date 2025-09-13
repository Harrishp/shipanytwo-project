import { ReactNode } from "react";
import { setRequestLocale } from "next-intl/server";
import { Header, Footer } from "@/blocks/landing";
import { loadMessages } from "@/core/i18n/request";

export default async function LandingLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const data = await loadMessages("landing", locale);

  return (
    <div className="w-screen h-screen">
      <Header header={data.header} />
      {children}
      <Footer footer={data.footer} />
    </div>
  );
}
