import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // لأنك تستخدم دومين مخصص join2dxn.art
  publicDir: 'public', // يضمن نسخ الملفات مثل sitemap.xml إلى dist/
});
