import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import viteMd from "vite-plugin-markdown";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteMd.plugin({ mode: viteMd.Mode.HTML })],
});
