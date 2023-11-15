import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page';


const InventoryURL = 'https://www.saucedemo.com/inventory.html';
let loginPage: LoginPage;
const username = process.env.USERNAME || 'standard_user'
const password = process.env.PASSWORD || 'secret_sauce'

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


test.describe('log in should be allowed', () => {

  test('log in OK', async () => {
    await inputUsername(username);
    await inputPassword(password);
    await clickLoginButton();
    await loginPage.assertURL(InventoryURL);
  });

});

test.describe('log in should not be allowed', () => {
  
  test('log in - incorrect user name', async () => {
    await inputUsername('no_user');
    await inputPassword(password);
    await clickLoginButton();
    await loginPage.checkErrorMessage();
  });

  test('log in - incorrect password', async () => {
    await inputUsername(username);
    await inputPassword('incorrect_password');
    await clickLoginButton();
    await loginPage.checkErrorMessage();
  });

});


