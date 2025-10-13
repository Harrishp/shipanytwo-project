import { betterAuth } from "better-auth";
import { authOptions, getAuthOptions } from "./config";

// static auth
export const auth = betterAuth({
  ...authOptions,
  emailAndPassword: {
    enabled: true,
  },
});

// dynamic auth
export async function getAuth() {
  return betterAuth(await getAuthOptions());
}
