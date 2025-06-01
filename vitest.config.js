import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['pages/api/**/*.js'],
      exclude: ['**/*.test.js', '**/__mocks__/**', '**/node_modules/**'],
    },
    globals: true,
  },
})
