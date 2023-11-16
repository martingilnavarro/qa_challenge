import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { InventoryPage } from '../pages/inventory-page';
import { CartPage } from '../pages/cart-page';
import { CheckoutPage } from '../pages/checkout-page';
import { ConfirmationPage } from '../pages/confirmation-page';


const username = process.env.USERNAME ||'standard_user'
const password = process.env.PASSWORD || 'secret_sauce'
let loginPage: LoginPage;
let inventoryPage: InventoryPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;
let confirmationPage: ConfirmationPage;
const firstName = 'first name';
const lastName = 'last name';
const zipCode = 'zip code';

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage= new CheckoutPage(page);
    confirmationPage = new ConfirmationPage(page);
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
    await test.step('click checkout', async () => {
        await cartPage.clickCheckoutButton();
      });
  });


  test.describe('form completed', () => {

    test('form OK', async () => {
      //Act
      await checkoutPage.inputFirstName(firstName);
      await checkoutPage.inputLastName(lastName);
      await checkoutPage.inputZipCode(zipCode);
      await checkoutPage.clickContinueButton();
      //Assert
      await confirmationPage.assertURL();
    });
  });
  
  test.describe('form incomplete', () => {
    
    test('first name incomplete', async () => {
      //Act
      await checkoutPage.inputLastName(lastName);
      await checkoutPage.inputZipCode(zipCode);
      await checkoutPage.clickContinueButton();
      //Assert
      await checkoutPage.checkErrorMessage();
    });
  
    test('last name incomplete', async () => {
      //Act
      await checkoutPage.inputFirstName(firstName);
      await checkoutPage.inputZipCode(zipCode);
      await checkoutPage.clickContinueButton();
      //Assert
      await checkoutPage.checkErrorMessage();
    });

    test('zip code incomplete', async () => {
        //Act
        await checkoutPage.inputFirstName(firstName);
        await checkoutPage.inputLastName(lastName);
        await checkoutPage.clickContinueButton();
        //Assert
        await checkoutPage.checkErrorMessage();
      });
  });