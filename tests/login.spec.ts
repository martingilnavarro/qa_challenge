import { test, type Page } from '@playwright/test';
import { LoginPage } from '../pages/login-page';


const InventoryURL = 'https://www.saucedemo.com/inventory.html';
const preprodUsername = 'standard_user';
const qaUsername = 'problem_user';
const devUsername = 'locked_out_user';
const password = 'secret_sauce';
let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  loginPage = new LoginPage(page);
});

async function clickLoginButton() {
  await loginPage.clickLoginButton();
}
async function inputUsername(username: string) {
  await loginPage.inputUsername(username);
}
async function inputPassword(password: string) {
  await loginPage.inputPassword(password);
}
async function assertURL(url: string) {
  await loginPage.assertURL(url);
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
    await loginPage.checkErrorMessage();
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


