import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
    trace: 'on',
    video: 'on',
    screenshot: 'on',
    headless: false
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chrome',
      use: { 
        channel:'chrome',
        baseURL:'https://login.salesforce.com/',
       },
    },
   
  ],
});
