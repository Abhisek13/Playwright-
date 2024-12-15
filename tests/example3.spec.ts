import { test, expect } from '@playwright/test';

test('verify valid Login in Lambatest', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground').click('Input Form Submit');
await page.getByRole('button' , {name: 'Submit'}).click();
await expect(page.getByText('“Please fill in the fields')).toBeVisible();
await page.getByPlaceholder('Name').fill('Abhiskae');
await page.getByPlaceholder('Email').fill('abhishek.pattanaik@gmail.com');
await page.getByPlaceholder('Password').fill('abhiskae1234');
await page.getByPlaceholder('Company').fill('XYZ');
await page.getByPlaceholder('Website').fill('https://wwww.lambatest.com');
await page.locator('.w-full border border-gray-90 text-size-14 rounded mt-10 px-10 py-5').selectOptions('United States').click();
await page.getByPlaceholder('City').fill('Bangalore');
await page.getByPlaceholder('Address 1').fill('HAL');
await page.getByPlaceholder('Address 2').fill('HAL main road');
await page.getByPlaceholder('State').fill('Karnataka');
await page.getByPlaceholder('Zip code').fill('453454');
await page.getByRole('button' , {name: 'Submit'}).click();
await expect (page.locator('.success-msg hidden')).toHaveText('Thanks for contacting us, we will get back to you shortly.')});
