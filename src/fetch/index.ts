export const api = ofetch.create({
  baseURL: import.meta.env.VITE_API_URL,
  credentials: "include",
  mode: "cors",
})
