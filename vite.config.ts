import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Сайт публикуется на GitHub Pages по адресу https://lukinaleksandr.github.io/company-structure/
  base: "/company-structure/",
});
