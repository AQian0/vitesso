export const api = wretch('/api')
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
