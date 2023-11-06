import { test, expect } from '@playwright/test';

test.describe('log in should be allowed', () => {
  
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

test.describe('log in should not be allowed', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });
  test.afterEach(async ({ page }) => {    
    // Click login.
    await page.getByText('Login').click();
      
    // Same page - does not go to dashboard.
    await expect(page).toHaveURL('https://www.saucedemo.com/')
  });

  test('log in - user name incorrect', async ({ page }) => {
    // Input no existing username.
    await page.getByPlaceholder('Username').fill('no_user');
    // Input password.
    await page.getByPlaceholder('Password').fill('secret_sauce');
  });

  test('log in - password incorrect', async ({ page }) => {
    // Input username.
    await page.getByPlaceholder('Username').fill('standard_user');
    // Input incorrect password.
    await page.getByPlaceholder('Password').fill('incorrect_password');
  });

  test('log in - no username', async ({ page }) => {

    // Input only password.
    await page.getByPlaceholder('Password').fill('secret_sauce');
  });

  test('log in - no password', async ({ page }) => {
    // Input only username.
    await page.getByPlaceholder('Username').fill('standard_user');
  });


});