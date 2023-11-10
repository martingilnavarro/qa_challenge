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

async function clickLoginButton() {
  await homePage.clickLoginButton();
}
async function inputUsername(username: string) {
  await homePage.inputUsername(username);
}
async function inputPassword(password: string) {
  await homePage.inputPassword(password);
}
async function assertURL(url: string) {
  await homePage.assertURL(url);
}


test.describe('log in should be allowed', () => {
  
  test.afterEach(async () => {
    await inputPassword(password);
    await clickLoginButton();
    await assertURL(InventoryURL);
  });

  test('log in - pre prod', async () => {
    await inputUsername(preprodUsername);
  });

  test('log in - QA', async () => {
    await inputUsername(qaUsername);
  });

  test.skip('log in - dev', async () => {
    await inputUsername(devUsername);
  });

});

test.describe('log in should not be allowed', () => {
  
  test.afterEach(async () => {
    await clickLoginButton();
    await assertURL(HomeURL);
  });

  test('log in - incorrect user name', async () => {
    await inputUsername('no_user');
    await inputPassword(password);
  });

  test('log in - incorrect password', async () => {
    await inputUsername(preprodUsername);
    await inputPassword('incorrect_password');
  });

});


