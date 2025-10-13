export type ConfigMap = Record<string, string>;

export const envConfigs = {
  app_url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  app_name: process.env.NEXT_PUBLIC_APP_NAME ?? "ShipAny App",
  theme: process.env.NEXT_PUBLIC_THEME ?? "default",
  appearance: process.env.NEXT_PUBLIC_APPEARANCE ?? "system",
  locale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? "en",
  database_url: process.env.DATABASE_URL ?? "",
  database_provider: process.env.DATABASE_PROVIDER ?? "postgresql",
  db_singleton_enabled: process.env.DB_SINGLETON_ENABLED || "false",
  auth_url: process.env.AUTH_URL || process.env.NEXT_PUBLIC_APP_URL || "",
  auth_secret: process.env.AUTH_SECRET ?? "", // openssl rand -base64 32
};
