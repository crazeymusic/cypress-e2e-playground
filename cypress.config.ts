import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: '',
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 10000,
  watchForFileChanges: false,
  retries: { runMode: 1, openMode: 0 },
  chromeWebSecurity: true,
  e2e: {
    baseUrl: 'https://practice.expandtesting.com',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}'
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: 'report_000',
    overwrite: false,
    html: true,
    json: true
  }
});
