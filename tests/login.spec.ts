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


test.describe('log in should be allowed', () => {

  test('log in OK', async () => {
    //Act
    await loginPage.login(username, password)
    //Assert
    await loginPage.assertURL(InventoryURL);
  });
});

test.describe('log in should not be allowed', () => {
  
  test('log in - incorrect user name', async () => {
    //Act
    await loginPage.login('no_user', password);
    //Assert
    await loginPage.checkErrorMessage();
  });

  test('log in - incorrect password', async () => {
    //Act
    await loginPage.login(username, 'incorrect_password');
    //Assert
    await loginPage.checkErrorMessage();
  });
});


