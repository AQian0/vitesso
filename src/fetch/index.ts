export const api = wretch(import.meta.env.VITE_API_URL)
  .options({
    mode: 'cors',
    credentials: 'include',
  })
  .addon(QueryStringAddon)
  .middlewares([
    retry({
      maxAttempts: 3,
      delayTimer: 1000,
      resolveWithLatestResponse: true,
    }),
  ])
