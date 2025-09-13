import Image from "next/image";
import { type Brand } from "@/types/blocks/base";
import { Link } from "@/core/i18n/navigation";

export function Logo({ brand }: { brand: Brand }) {
  return (
    <Link
      href={brand.url || ""}
      className="flex items-center space-x-2 cursor-pointer"
    >
      {brand.logo && (
        <Image
          src={brand.logo.src}
          alt={brand.logo.alt || brand.title || ""}
          width={100}
          height={100}
          className="h-10 w-auto"
        />
      )}
      {brand.title && (
        <span className="text-lg font-medium">{brand.title}</span>
      )}
      {brand.description && (
        <p className="text-sm text-muted-foreground">{brand.description}</p>
      )}
    </Link>
  );
}
