import { Hero, Showcases } from "@/blocks/landing";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

export default async function ShowcasesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("landing");
  const tt = await getTranslations("demo.showcases");

  return (
    <>
      <Hero
        hero={{
          title: tt.raw("title"),
          description: tt.raw("description"),
          buttons: tt.raw("buttons"),
        }}
      />
      <Showcases showcases={t.raw("showcases")} />
    </>
  );
}
