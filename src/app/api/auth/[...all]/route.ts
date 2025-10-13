import { getAuthOptions } from "@/core/auth/config";
import { betterAuth } from "better-auth";
import { toNextJsHandler } from "better-auth/next-js";

export const auth = betterAuth(await getAuthOptions());

export const { POST, GET } = toNextJsHandler(auth.handler);
