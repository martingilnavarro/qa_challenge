import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { InventoryPage } from '../pages/inventory-page';
import { CartPage } from '../pages/cart-page';


const username = process.env.USERNAME ||'standard_user'
const password = process.env.PASSWORD || 'secret_sauce'
let loginPage: LoginPage;
let inventoryPage: InventoryPage;
let cartPage: CartPage;


test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  inventoryPage = new InventoryPage(page);
  cartPage = new CartPage(page);

  await page.goto('/');
  await loginPage.login(username, password);
});

test.afterEach(async ({ page }) => {
  //Act
  await inventoryPage.clickCart();
  //Assert
  await cartPage.assertURL();
});


test.describe('add products', () => {
     
    test('add backpack and bike light', async () => {
      //Act
      await inventoryPage.addBackpack();
      await inventoryPage.addBikeLight();
      //Assert
      await inventoryPage.removeBackpackEnabled();
      await inventoryPage.removeBikeLightEnabled();
      await inventoryPage.assertNumberItems('2')
    });

    test('add all products', async ({ page }) => {
      //Act
      await inventoryPage.addAllProducts();
      //Assert
      await inventoryPage.removeBackpackEnabled();
      await inventoryPage.removeBikeLightEnabled();
      await inventoryPage.removeBoltShirtEnabled();
      await inventoryPage.removeJacketEnabled();
      await inventoryPage.removeOnesieEnabled();
      await inventoryPage.removeRedShirtEnabled();
      await inventoryPage.assertNumberItems('6')
    });

    test('add and remove', async () => {
      //Act
      await inventoryPage.addBackpack();
      await inventoryPage.addBikeLight();
      await inventoryPage.removeBackpack();
      //Assert
      await inventoryPage.addBackpackEnabled();
      await inventoryPage.removeBikeLightEnabled();
      await inventoryPage.assertNumberItems('1');
    });
  
  });



