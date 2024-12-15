import { test, expect } from '@playwright/test';

test('verify valid Login in Lambatest', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://www.lambdatest.com/selenium-playground');
  
  // Verify if the header is visible
  await expect(page.locator('#vheader')).toBeVisible();
  
  // Click the "Simple Form Demo" link (assuming it’s a clickable element)
  await page.locator('text=Simple Form Demo').click();

  await except (page.getByText('Simple Form Demo')).toBeVisible();
await page.getByPlaceholder('Please enter your Message').fill('testing');
await page.getByRole('button' ,{name: 'Get Checked Value'}).click();
await expect (page.locator('.text-size-48 font-bold text-black text-center leading-none text-shadow md:w-full leading-height-70 mx-auto smtablet:text-size-30 smtablet:leading-height-42')).toHaveText('testing');

});

