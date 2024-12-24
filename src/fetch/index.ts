export const api = wretch('/api').options({
  mode: 'cors',
  credentials: 'include',
}).middlewares([
  retry({
    maxAttempts: 3,
    delayTimer: 1000,
  }),
])

