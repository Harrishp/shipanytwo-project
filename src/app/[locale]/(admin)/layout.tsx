import { ReactNode } from "react";
import { DashboardLayout } from "@/blocks/dashboard/layout";
import { loadMessages } from "@/core/i18n/request";
import { setRequestLocale } from "next-intl/server";

export default async function AdminLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const data = await loadMessages("admin", locale);

  return <DashboardLayout dashboard={data}>{children}</DashboardLayout>;
}
