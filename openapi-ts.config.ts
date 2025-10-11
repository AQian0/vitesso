import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  input: {
    path: import.meta.env.VITE_API_DOCS,
    watch: true
  },
  output: {
    path: "src/fetch",
    // 官方推荐各自导入构件以避免歧义
    indexFile: false,
    lint: "oxlint",
  },

})
