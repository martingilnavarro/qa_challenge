import { test, expect } from '@playwright/test';

test.describe('log in', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });
  test.afterEach(async ({ page }) => {
    // Input password.
    await page.getByPlaceholder('Password').fill('secret_sauce');
    
    // Click login.
    await page.getByText('Login').click();
      
    // Dashboard page.
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
  });

  test('log in - pre prod', async ({ page }) => {
    // Input username.
    await page.getByPlaceholder('Username').fill('standard_user');
  });

  test('log in - QA', async ({ page }) => {
    // Input username.
    await page.getByPlaceholder('Username').fill('problem_user');
  });

  test('log in - dev', async ({ page }) => {
    // Input username.
    await page.getByPlaceholder('Username').fill('locked_out_user');
  });

});
