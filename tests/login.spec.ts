import { test, type Page } from '@playwright/test';
import { HomePage } from '../pages/home-page';

const HomeURL = 'https://www.saucedemo.com/';
const InventoryURL = 'https://www.saucedemo.com/inventory.html';
const preprodUsername = 'standard_user';
const qaUsername = 'problem_user';
const devUsername = 'locked_out_user';
const password = 'secret_sauce';
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
    await inputPassword(page, password);
    await clickLoginButton(page)
    await assertURL(page, InventoryURL)
  });

  test('log in - pre prod', async ({ page }) => {
    await inputUsername(page, preprodUsername);
  });

  test('log in - QA', async ({ page }) => {
    await inputUsername(page, qaUsername);
  });

  test('log in - dev', async ({ page }) => {
    await inputUsername(page, devUsername);
  });

});

test.describe('log in should not be allowed', () => {
  
  test.afterEach(async ({ page }) => {
    await clickLoginButton(page)
    await assertURL(page, HomeURL)
  });

  test('log in - incorrect user name', async ({ page }) => {
    await inputUsername(page, 'no_user');
    await inputPassword(page, password);
  });

  test('log in - incorrect password', async ({ page }) => {
    await inputUsername(page, preprodUsername);
    await inputPassword(page, 'incorrect_password');
  });

});


