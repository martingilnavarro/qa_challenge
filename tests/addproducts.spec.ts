import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { InventoryPage } from '../pages/inventory-page';


const CartURL = 'https://www.saucedemo.com/cart.html'
const username = process.env.USERNAME || 'standard_user'
const password = process.env.PASSWORD || 'secret_sauce'
let loginPage: LoginPage;
let inventoryPage: InventoryPage;


test.beforeEach(async ({ page }) => {
  await page.goto('/');
  loginPage = new LoginPage(page);
  await loginPage.login(username, password);
  inventoryPage = new InventoryPage(page);
});

test.afterEach(async ({ page }) => {
  //Act
  await inventoryPage.clickCart();
  //Assert
  await loginPage.assertURL(CartURL);
});


test.describe('add products', () => {
     
    test('add backpack and bike light', async () => {
      //Act
      await inventoryPage.addBackpack();
      await inventoryPage.addBikeLight();
      //Assert
      await inventoryPage.assertNumberItems('2')
    });

    test('add all products', async ({ page }) => {
      //Act
      await inventoryPage.addAllProducts();
      //Assert
      await inventoryPage.assertNumberItems('6')
    });

    test('add and remove', async () => {
      //Act
      await inventoryPage.addBackpack();
      await inventoryPage.addBikeLight();
      await inventoryPage.removeBackpack();
      //Assert
      await inventoryPage.assertNumberItems('1')
    });
  

  
  });



