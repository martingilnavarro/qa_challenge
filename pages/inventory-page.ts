import { type Locator, type Page, expect } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly addBackpackButton: Locator;
    readonly removeBackpackButton: Locator;
    readonly addBikeLightButton: Locator;
    readonly removeBikeLightButton: Locator;
    readonly addBoltShirtButton: Locator;
    readonly removeBoltShirtButton: Locator;
    readonly addJacketButton: Locator;
    readonly removeJacketButton: Locator;
    readonly addOnesieButton: Locator;
    readonly removeOnesieButton: Locator;
    readonly addRedShirtButton: Locator;
    readonly removeRedShirtButton: Locator;
    readonly cart: Locator;
    readonly menuButton: Locator;
    readonly resetButton: Locator

    constructor(page: Page) {
        this.page = page;
        this.addBackpackButton = page.getByTestId('add-to-cart-sauce-labs-backpack');
        this.removeBackpackButton = page.getByTestId('remove-sauce-labs-backpack');
        this.addBikeLightButton = page.getByTestId('add-to-cart-sauce-labs-bike-light');
        this.removeBikeLightButton = page.getByTestId('remove-sauce-labs-bike-light');
        this.addBoltShirtButton = page.getByTestId('add-to-cart-sauce-labs-bolt-t-shirt');
        this.removeBoltShirtButton = page.getByTestId('remove-sauce-labs-bolt-t-shirt');
        this.addJacketButton = page.getByTestId('add-to-cart-sauce-labs-fleece-jacket');
        this.removeJacketButton = page.getByTestId('remove-sauce-labs-fleece-jacket');
        this.addOnesieButton = page.getByTestId('add-to-cart-sauce-labs-onesie');
        this.removeOnesieButton = page.getByTestId('remove-sauce-labs-onesie');
        this.addRedShirtButton= page.getByTestId('add-to-cart-test.allthethings()-t-shirt-(red)');
        this.removeRedShirtButton = page.getByTestId('remove-test.allthethings()-t-shirt-(red)');
        this.cart = page.locator('#shopping_cart_container a');
        this.menuButton = page.getByRole('button', { name: 'Open Menu' })
        this.resetButton = page.getByRole('link', { name: 'Reset App State' })
    }

    async addBackpack() {
        await this.addBackpackButton.click();
    }
    async addBikeLight() {
        await this.addBikeLightButton.click();
    }
    async addBoltShirt() {
        await this.addBoltShirtButton.click();
    }
    async addJacket() {
        await this.addJacketButton.click();
    }
    async addOnesie() {
        await this.addOnesieButton.click();
    }
    async addRedShirt() {
        await this.addRedShirtButton.click();
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

    async removeBackpackEnabled() {
        await this.removeBackpackButton.isEnabled();
    }
    async removeBikeLightEnabled() {
        await this.removeBikeLightButton.isEnabled();
    }
    async removeBoltShirtEnabled() {
        await this.removeBoltShirtButton.isEnabled();
    }
    async removeJacketEnabled() {
        await this.removeJacketButton.isEnabled();
    }
    async removeOnesieEnabled() {
        await this.removeOnesieButton.isEnabled();
    }
    async removeRedShirtEnabled() {
        await this.removeRedShirtButton.isEnabled();
    }
    async addBackpackEnabled() {
        await this.addBackpackButton.isEnabled();
    }
    async addBikeLightEnabled() {
        await this.addBikeLightButton.isEnabled();
    }
    async addBoltShirtEnabled() {
        await this.addBoltShirtButton.isEnabled();
    }
    async addJacketEnabled() {
        await this.addJacketButton.isEnabled();
    }
    async addOnesieEnabled() {
        await this.removeOnesieButton.isEnabled();
    }
    async addRedShirtEnabled() {
        await this.removeRedShirtButton.isEnabled();
    }

    async addAllProducts() {
        await this.addBackpack();
        await this.addBikeLight();
        await this.addBoltShirt();
        await this.addJacket();
        await this.addOnesie();
        await this.addRedShirt();
    }
    
    async clickCart() {
        await this.cart.click();
    }

    async assertNumberItems(numberItems: string) {
        await expect (this.cart).toHaveText(numberItems)  
    }

    async assertURL() {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    }

    async resetAppState() {
        await this.menuButton.click();
        await this.resetButton.click();
    }


}

export default InventoryPage;