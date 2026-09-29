import { execSync } from 'node:child_process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function getCommitCount(): number {
  try {
    return parseInt(execSync('git rev-list --count HEAD').toString().trim(), 10)
  } catch {
    return 0
  }
}

export default defineConfig({
  plugins: [react()],
  define: {
    __COMMIT_COUNT__: JSON.stringify(getCommitCount()),
  },
  server: {
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
})
