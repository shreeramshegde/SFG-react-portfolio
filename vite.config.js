import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // CRITICAL FOR GITHUB PAGES:
  // Using './' ensures all JS/CSS asset links in dist/index.html are relative,
  // preventing 404 errors when hosted under https://<username>.github.io/<repo-name>/
  base: './',
});
