import { type Locator, type Page, expect } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly checkoutButton: Locator;
    readonly continueShoppingButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.getByTestId(('checkout'));
        this.continueShoppingButton = page.getByTestId(('continue-shopping'));
    }

    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }
    async clickContineShoppingButton() {
        await this.checkoutButton.click();
    }
    async assertURL() {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html');
    }


}

export default CartPage;