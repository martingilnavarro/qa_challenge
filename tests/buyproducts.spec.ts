import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { InventoryPage } from '../pages/inventory-page';
import { CartPage } from '../pages/cart-page';
import { CheckoutPage } from '../pages/checkout-page';
import { ConfirmationPage } from '../pages/confirmation-page';
import { CompletePage } from '../pages/complete-page';

const username = process.env.USERNAME || 'standard_user'
const password = process.env.PASSWORD || 'secret_sauce'

let loginPage: LoginPage;
let inventoryPage: InventoryPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;
let confirmationPage: ConfirmationPage;
let completePage: CompletePage;

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  loginPage = new LoginPage(page);
  await loginPage.login(username, password);
  inventoryPage = new InventoryPage(page);
  await inventoryPage.addAllProducts();
  await inventoryPage.clickCart();
  cartPage = new CartPage(page);
  checkoutPage= new CheckoutPage(page);
  confirmationPage = new ConfirmationPage(page);
  completePage = new CompletePage(page);
});

test.describe('buy products', () => {
   
    test('buy products', async () => {
      await cartPage.clickCheckoutButton();
      await checkoutPage.inputFirstName('first name');
      await checkoutPage.inputLastName('last name');
      await checkoutPage.inputZipCode('zip code');
      await checkoutPage.clickContinueButton();
      await confirmationPage.clickFinishButton();
      await completePage.clickBackHomeButton();
    });

  });



