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
    readonly Cart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addBackpackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.removeBackpackButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.addBikeLightButton = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.removeBikeLightButton = page.locator('[data-test="remove-sauce-labs-bike-light"]');
        this.addBoltShirtButton = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.removeBoltShirtButton = page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]');
        this.addJacketButton = page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
        this.removeJacketButton = page.locator('[data-test="remove-sauce-labs-fleece-jacket"]');
        this.addOnesieButton = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
        this.removeOnesieButton = page.locator('[data-test="remove-sauce-labs-onesie"]');
        this.addRedShirtButton= page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
        this.removeRedShirtButton = page.locator('[data-test="remove-test.allthethings()-t-shirt-(red)"]');
        this.Cart = page.locator('#shopping_cart_container a');
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

    async addAllProducts() {
        await this.addBackpack();
        await this.addBikeLight();
        await this.addBoltShirt();
        await this.addJacket();
        await this.addOnesie();
        await this.addRedShirt();
    }
    
    async clickCart() {
        await this.Cart.click();
    }

    async assertNumberItems(numberItems: string) {
        await expect (this.Cart).toHaveText(numberItems)  
    }


}

export default InventoryPage;