import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import envCompitable from "vite-plugin-env-compatible";

// https://vite.dev/config/
export default defineConfig({
  envPrefix: "REACT_APP_",
  plugins: [react(), envCompitable()],
});
