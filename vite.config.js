import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/PASSWORDGENERATOR/", // 👈 Add your repo name here
});
