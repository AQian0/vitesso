import { retry } from "wretch/middlewares";

export const api = wretch().options({
  mode: 'cors',
  credentials: 'include',
}).middlewares([
  retry({
    maxAttempts: 3,
    delayTimer: 1000,
  }),
])

