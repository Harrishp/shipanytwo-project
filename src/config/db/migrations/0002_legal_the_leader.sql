ALTER TABLE "post" ADD COLUMN "sort" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "taxonomy" ADD COLUMN "sort" integer DEFAULT 0 NOT NULL;