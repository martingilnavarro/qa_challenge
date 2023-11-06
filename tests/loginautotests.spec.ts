import { test, expect } from '@playwright/test';

test.describe('log in should be allowed', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });
  test.afterEach(async ({ page }) => {
    // Input password.
    await page.locator('[data-test="password"]').fill('secret_sauce');
    
    // Click login.
    await page.locator('[data-test="login-button"]').click();
      
    // Dashboard page.
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
  });

  test('log in - pre prod', async ({ page }) => {
    // Input username.
    await page.locator('[data-test="username"]').fill('standard_user');
  });

  test('log in - QA', async ({ page }) => {
    // Input username.
    await page.locator('[data-test="username"]').fill('problem_user');
  });

  test('log in - dev', async ({ page }) => {
    // Input username.
    await page.locator('[data-test="username"]').fill('locked_out_user');
  });

});

test.describe('log in should not be allowed', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });
  test.afterEach(async ({ page }) => {    
    // Click login.
    await page.locator('[data-test="login-button"]').click();
      
    // Same page - does not go to dashboard.
    await expect(page).toHaveURL('https://www.saucedemo.com/')
  });

  test('log in - user name incorrect', async ({ page }) => {
    // Input no existing username.
    await page.locator('[data-test="username"]').fill('no_user');
    // Input password.
    await page.locator('[data-test="password"]').fill('secret_sauce');
  });

  test('log in - password incorrect', async ({ page }) => {
    // Input username.
    await page.locator('[data-test="username"]').fill('standard_user');
    // Input incorrect password.
    await page.locator('[data-test="password"]').fill('incorrect_password');
  });

  test('log in - no username', async ({ page }) => {

    // Input only password.
    await page.locator('[data-test="password"]').fill('secret_sauce');
  });

  test('log in - no password', async ({ page }) => {
    // Input only username.
    await page.locator('[data-test="username"]').fill('standard_user');
  });


});