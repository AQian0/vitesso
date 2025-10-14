import { createClient } from "./client/client";

export const api = createClient({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
})
