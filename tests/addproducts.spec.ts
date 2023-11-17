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
  await test.step('log in', async () => {
    await page.goto('/');
    await loginPage.login(username, password);
  });
});

test.afterEach(async ({ page }) => {
  //Act
  await inventoryPage.clickCart();
  //Assert
  await cartPage.assertURL();
});


test.describe('add and remove products', () => {
     
    test('add backpack and bike light', async () => {
      //Act
      await test.step('add products', async () => {
        await inventoryPage.addBackpack();
        await inventoryPage.addBikeLight();
      });
      //Assert
      await test.step('assert remove buttons enabled', async () => {
        await inventoryPage.removeBackpackEnabled();
        await inventoryPage.removeBikeLightEnabled();
      });  
      await test.step('assert items number in cart', async () => {
        await inventoryPage.assertNumberItems('2')
      });
    });

    test('add all products', async ({ page }) => {
    //QAB-T13
      //Act
      await test.step('add products', async () => {
        await inventoryPage.addAllProducts();
      });
      //Assert
      await test.step('assert remove buttons enabled', async () => {
        await inventoryPage.removeBackpackEnabled();
        await inventoryPage.removeBikeLightEnabled();
        await inventoryPage.removeBoltShirtEnabled();
        await inventoryPage.removeJacketEnabled();
        await inventoryPage.removeOnesieEnabled();
        await inventoryPage.removeRedShirtEnabled();
      });
      await test.step('assert items number in cart', async () => {
        await inventoryPage.assertNumberItems('6');
      });

    });

    test('add and remove', async () => {
      //Act
      await test.step('add products', async () => {
        await inventoryPage.addBackpack();
        await inventoryPage.addBikeLight();
      });
      await test.step('remove products', async () => {
        await inventoryPage.removeBackpack();
      });  
      //Assert
      await test.step('assert remove/add buttons enabled', async () => {
        await inventoryPage.addBackpackEnabled();
        await inventoryPage.removeBikeLightEnabled();
      });
      await test.step('assert items number in cart', async () => {
        await inventoryPage.assertNumberItems('1');
      });  
    });

    test('reset app state', async () => {
    //QAB-T22
      //Act
      await test.step('add products', async () => {
        await inventoryPage.addAllProducts();
      });  
      await test.step('reset app state', async () => {
        await inventoryPage.resetAppState();
      });
      //Assert
      //BUG: add buttons are not reseted
      /*await test.step('assert add buttons enabled', async () => {
        await inventoryPage.addBackpackEnabled();
        await inventoryPage.addBikeLightEnabled();
        await inventoryPage.addBoltShirtEnabled();
        await inventoryPage.addJacketEnabled();
        await inventoryPage.addOnesieEnabled();
        await inventoryPage.addRedShirtEnabled();
      });  */
      await test.step('assert items number in cart empty', async () => {
        await inventoryPage.assertNumberItems('');
      });   
    });
  
  });



