import { type Locator, type Page, expect } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly checkoutButton: Locator;
    readonly continueShoppingButton: Locator;
    readonly removeBackpackButton: Locator;
    readonly removeBikeLightButton: Locator;
    readonly removeBoltShirtButton: Locator;
    readonly removeJacketButton: Locator;
    readonly removeOnesieButton: Locator;
    readonly removeRedShirtButton: Locator;
    readonly cart: Locator

    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.getByTestId(('checkout'));
        this.continueShoppingButton = page.getByTestId(('continue-shopping'));
        this.removeBackpackButton = page.getByTestId('remove-sauce-labs-backpack');
        this.removeBikeLightButton = page.getByTestId('remove-sauce-labs-bike-light');
        this.removeBoltShirtButton = page.getByTestId('remove-sauce-labs-bolt-t-shirt');
        this.removeJacketButton = page.getByTestId('remove-sauce-labs-fleece-jacket');
        this.removeOnesieButton = page.getByTestId('remove-sauce-labs-onesie');
        this.removeRedShirtButton = page.getByTestId('remove-test.allthethings()-t-shirt-(red)');
        this.cart = page.locator('#shopping_cart_container a');
    }


    async removeBackpack() {
        await this.removeBackpackButton.click();
    }
    async removeBikeLight() {
        await this.removeBikeLightButton.click();
    }
    async removeBoltShirt() {
        await this.removeBoltShirtButton.click();
    }
    async removeJacket() {
        await this.removeJacketButton.click();
    }
    async removeOnesie() {
        await this.removeOnesieButton.click();
    }
    async removeRedShirt() {
        await this.removeRedShirtButton.click();
    }

    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }
    async clickContinueShoppingButton() {
        await this.continueShoppingButton.click();
    }
    async assertURL() {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html');
    }
    async assertNumberItems(numberItems: string) {
        await expect (this.cart).toHaveText(numberItems)  
    }


}

export default CartPage;