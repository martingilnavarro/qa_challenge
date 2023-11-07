import { test, expect, type Page } from '@playwright/test';
import { HomePage } from '../pages/home-page';

const HomeURL = 'https://www.saucedemo.com/';
const InventoryURL = 'https://www.saucedemo.com/inventory.html';
let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  await page.goto(HomeURL);
  homePage = new HomePage(page);
});

async function clickLoginButton(page: Page) {
  await homePage.clickLoginButton();
}
async function inputUsername(page: Page, username: string) {
  await homePage.inputUsername(username);
}
async function inputPassword(page: Page, password: string) {
  await homePage.inputPassword(password);
}
async function assertURL(page: Page, url: string) {
  await homePage.assertURL(url);
}


test.describe('log in should be allowed', () => {
  
  test.afterEach(async ({ page }) => {
    await inputPassword(page, 'secret_sauce');
    await clickLoginButton(page)
    await assertURL(page, InventoryURL)
  });

  test('log in - pre prod', async ({ page }) => {
    await inputUsername(page, 'standard_user');
  });

  test('log in - QA', async ({ page }) => {
    await inputUsername(page, 'problem_user');
  });

  test('log in - dev', async ({ page }) => {
    await inputUsername(page, 'locked_out_user');
  });

});

test.describe('log in should not be allowed', () => {
  
  test.afterEach(async ({ page }) => {
    await clickLoginButton(page)
    await assertURL(page, HomeURL)
  });

  test('log in - incorrect user name', async ({ page }) => {
    await inputUsername(page, 'no_user');
    await inputPassword(page, 'secret_sauce');
  });

  test('log in - incorrect password', async ({ page }) => {
    await inputUsername(page, 'standard_user');
    await inputPassword(page, 'incorrect_password');
  });

});


