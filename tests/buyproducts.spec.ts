import { test, type Page } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { InventoryPage } from '../pages/inventory-page';
import { CartPage } from '../pages/cart-page';
import { CheckoutPage } from '../pages/checkout-page';
import { ConfirmationPage } from '../pages/confirmation-page';
import { CompletePage } from '../pages/complete-page';



const CartURL = 'https://www.saucedemo.com/cart.html'
const preprodUsername = 'standard_user';
const qaUsername = 'problem_user';
const password = 'secret_sauce';
let loginPage: LoginPage;
let inventoryPage: InventoryPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;
let confirmationPage: ConfirmationPage;
let completePage: CompletePage;

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  loginPage = new LoginPage(page);
  await loginPage.inputUsername(preprodUsername);
  await loginPage.inputPassword(password);
  await loginPage.clickLoginButton();
  inventoryPage = new InventoryPage(page);
  await inventoryPage.addAllProducts();
  await inventoryPage.clickCart();
  cartPage = new CartPage(page);
  checkoutPage= new CheckoutPage(page);
  confirmationPage = new ConfirmationPage(page);
  completePage = new CompletePage(page);
});

async function addBackpack() {
    await inventoryPage.addBackpack();
}
async function addBikeLight() {
    await inventoryPage.addBikeLight();
}
async function addAllProducts() {
  await inventoryPage.addAllProducts();
}

async function clickCart() {
    await inventoryPage.clickCart();
}

async function assertNumberItems(numberItems: string) {
  await inventoryPage.assertNumberItems(numberItems);
}
async function assertURL(url: string) {
  await loginPage.assertURL(url);
}

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



