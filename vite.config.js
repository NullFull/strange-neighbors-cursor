import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: 'public', // public 디렉토리 명시적 설정
  base: '/' // 베이스 URL 설정
}) 