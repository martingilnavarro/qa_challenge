import { test, type Page } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { InventoryPage } from '../pages/inventory-page';

const HomeURL = 'https://www.saucedemo.com/';
const InventoryURL = 'https://www.saucedemo.com/inventory.html';
const preprodUsername = 'standard_user';
const qaUsername = 'problem_user';
const password = 'secret_sauce';
let homePage: HomePage;
let inventoryPage: InventoryPage;

test.beforeEach(async ({ page }) => {
  await page.goto(HomeURL);
  homePage = new HomePage(page);
  inventoryPage = new InventoryPage(page);
  await homePage.inputUsername(preprodUsername);
  await homePage.inputPassword(password);
  await homePage.clickLoginButton();
});

async function addBackpack(page: Page) {
    await inventoryPage.addBackpack();
}
async function addBikeLight(page: Page) {
    await inventoryPage.addBikeLight();
}
async function addAllProducts(page: Page) {
  await inventoryPage.addAllProducts();
}

async function clickCart(page: Page) {
    await inventoryPage.clickCart();
}

async function assertNumberItems(page: Page, numberItems: string) {
  await inventoryPage.assertNumberItems(numberItems);
}

test.describe('add products', () => {
  
    
    test('add backpack and bike light', async ({ page }) => {
      await addBackpack(page);
      await addBikeLight(page);
      await assertNumberItems(page,'2')
      await clickCart(page);
    });

    test('add all products', async ({ page }) => {
      await addAllProducts(page);
      await assertNumberItems(page,'6')
      await clickCart(page);
    });
  

  
  });



