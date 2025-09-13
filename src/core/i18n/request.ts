import { getRequestConfig } from "next-intl/server";
import { routing } from "./config";
import {
  defaultLocale,
  localeNamespaces,
  localeRootNamespace,
} from "@/config/locale";

export async function loadMessages(
  namespace: string = localeRootNamespace,
  locale: string = defaultLocale
) {
  try {
    const messages = await import(
      `@/config/locale/${namespace}/${locale}.json`
    );
    return messages.default;
  } catch (error) {
    return await import(
      `@/config/locale/${namespace}/${defaultLocale}.json`
    ).then((module) => module.default);
  }
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  if (["zh-CN"].includes(locale)) {
    locale = "zh";
  }

  if (!routing.locales.includes(locale as any)) {
    locale = "en";
  }

  try {
    const allMessages = await Promise.all(
      localeNamespaces.map((namespace) => loadMessages(namespace, locale))
    );
    const messagesMap: any = {};
    localeNamespaces.forEach((namespace, index) => {
      messagesMap[namespace] = allMessages[index];
    });

    return {
      locale: locale,
      messages: {
        ...messagesMap,
        ...(await loadMessages(localeRootNamespace, locale)),
      },
    };
  } catch (e) {
    console.log("yyy", localeRootNamespace, defaultLocale);
    return {
      locale: defaultLocale,
      messages: await loadMessages(localeRootNamespace, defaultLocale),
    };
  }
});
