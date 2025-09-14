import { lazy, Suspense } from "react";

const iconCache: { [key: string]: any } = {};

export function SmartIcon({
  name,
  size = 24,
  className,
  ...props
}: {
  name: string;
  size?: number;
  className?: string;
  props?: {};
}) {
  if (!iconCache[name as keyof typeof iconCache]) {
    iconCache[name as keyof typeof iconCache] = lazy(() =>
      import("lucide-react").then((module: any) => ({
        default: module[name as keyof typeof module] || module.HelpCircle,
      }))
    );
  }

  const IconComponent = iconCache[name as keyof typeof iconCache];

  return (
    <Suspense fallback={<div style={{ width: size, height: size }} />}>
      <IconComponent size={size} className={className} {...props} />
    </Suspense>
  );
}
