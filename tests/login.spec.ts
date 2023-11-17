import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { InventoryPage } from '../pages/inventory-page';

let loginPage: LoginPage;
let inventoryPage: InventoryPage;
const username = process.env.USERNAME || 'standard_user'
const password = process.env.PASSWORD || 'secret_sauce'

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  inventoryPage = new InventoryPage(page);
  
  await page.goto('/');
});


test.describe('log in should be allowed', () => {

  test('log in OK', async () => {
  //QAB-T1
    //Act
    await loginPage.login(username, password)
    //Assert
    await inventoryPage.assertURL();
  });
});

test.describe('log in should not be allowed', () => {
  
  test('log in - incorrect user name', async () => {
  //QAB-T6
    //Act
    await loginPage.login('no_user', password);
    //Assert
    await loginPage.checkErrorMessage();
  });

  test('log in - incorrect password', async () => {
  //QAB-T2
    //Act
    await loginPage.login(username, 'incorrect_password');
    //Assert
    await loginPage.checkErrorMessage();
  });
});


