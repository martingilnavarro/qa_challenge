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



