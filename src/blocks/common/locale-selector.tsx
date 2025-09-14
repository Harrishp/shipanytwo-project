"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { localeNames } from "@/config/locale";
import { Globe, Languages, Check } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/core/i18n/navigation";
import { Button } from "@/components/ui/button";

export function LocaleSelector({
  type = "icon",
}: {
  type?: "icon" | "button";
}) {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {type === "icon" ? (
          <Languages size={18} />
        ) : (
          <Button variant="outline" size="sm" className="hover:bg-primary/10">
            <Globe size={16} />
            {localeNames[currentLocale]}
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {Object.keys(localeNames).map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => router.push(pathname, { locale })}
            className="flex items-center justify-between"
          >
            <span>{localeNames[locale]}</span>
            {locale === currentLocale && (
              <Check size={16} className="text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
