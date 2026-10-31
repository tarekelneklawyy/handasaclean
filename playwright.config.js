import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  webServer: { command: "npm run build && npm run preview -- --port 4173", url: "http://localhost:4173", reuseExistingServer: true, timeout: 120000 },
  use: { baseURL: "http://localhost:4173" },
  projects: [
    { name: "desktop", use: { viewport: { width: 1440, height: 900 } } },
    { name: "laptop", use: { viewport: { width: 1280, height: 720 } } },
    { name: "ipad", use: { viewport: { width: 820, height: 1180 }, hasTouch: true } },
    { name: "mobile", use: { viewport: { width: 390, height: 844 }, hasTouch: true } },
  ],
});
