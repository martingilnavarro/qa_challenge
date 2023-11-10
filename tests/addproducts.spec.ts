import { test, type Page } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { InventoryPage } from '../pages/inventory-page';

const HomeURL = 'https://www.saucedemo.com/';
const CartURL = 'https://www.saucedemo.com/cart.html'
const preprodUsername = 'standard_user';
const qaUsername = 'problem_user';
const password = 'secret_sauce';
let homePage: HomePage;
let inventoryPage: InventoryPage;

test.beforeEach(async ({ page }) => {
  await page.goto(HomeURL);
  homePage = new HomePage(page);
  await homePage.inputUsername(preprodUsername);
  await homePage.inputPassword(password);
  await homePage.clickLoginButton();
  inventoryPage = new InventoryPage(page);
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
  await homePage.assertURL(url);
}

test.describe('add products', () => {
  
    
    test('add backpack and bike light', async () => {
      await addBackpack();
      await addBikeLight();
      await assertNumberItems('2')
      await clickCart();
      await assertURL(CartURL)
    });

    test('add all products', async ({ page }) => {
      await addAllProducts();
      await assertNumberItems('6')
      await clickCart();
      await assertURL(CartURL)
    });

    test('add and remove', async () => {
      await addBackpack();
      await addBikeLight();
      await inventoryPage.removeBackpack();
      await assertNumberItems('1')
      await clickCart();
      await assertURL(CartURL)
    });
  

  
  });



