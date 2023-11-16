import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { InventoryPage } from '../pages/inventory-page';
import { CartPage } from '../pages/cart-page';
import { CheckoutPage } from '../pages/checkout-page';


const username = process.env.USERNAME ||'standard_user'
const password = process.env.PASSWORD || 'secret_sauce'
let loginPage: LoginPage;
let inventoryPage: InventoryPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage= new CheckoutPage(page);
    await test.step('log in', async () => {
      await page.goto('/');
      await loginPage.login(username, password);
    });
    await test.step('add three products', async () => {
      await inventoryPage.addBackpack();
      await inventoryPage.addBikeLight();
      await inventoryPage.addBoltShirt();
    });
    await test.step('click cart', async () => {
      await inventoryPage.clickCart();
    });
  });


test.describe('inside the cart', () => {
     
    test('remove products from cart', async () => {
      //Act
      await test.step('remove products', async () => {
        await cartPage.removeBackpack();
        await cartPage.removeBikeLight();
      });
      //Assert
      await test.step('assert items number in cart', async () => {
        await cartPage.assertNumberItems('1')
      });
    });

    test('checkout', async () => {
      //Act
      await test.step('click checkout button', async () => {
        await cartPage.clickCheckoutButton();
      });
      //Assert
      await test.step('assert checkout page', async () => {
        await checkoutPage.assertURL();
      });

    });

    test('continue shopping', async () => {
      //Act
      await test.step('click continue shopping button', async () => {
        await cartPage.clickContinueShoppingButton();
      });
      //Assert
      await test.step('assert inventory page', async () => {
        await inventoryPage.assertURL();
      });

    });

  });



