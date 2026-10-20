import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Относительные пути — сборка работает из любой папки.
  // Адрес страницы должен заканчиваться слешем, иначе ./assets будут искаться в корне сайта.
  base: "./",
});
