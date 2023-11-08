import { type Locator, type Page, expect } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly getAddBackpack: Locator;
    readonly getRemoveBackpack: Locator;
    readonly getAddBikeLight: Locator;
    readonly getRemoveBikeLight: Locator;
    readonly getAddBoltShirt: Locator;
    readonly getRemoveBoltShirt: Locator;
    readonly getAddJacket: Locator;
    readonly getRemoveJacket: Locator;
    readonly getAddOnesie: Locator;
    readonly getRemoveOnesie: Locator;
    readonly getAddRedShirt: Locator;
    readonly getRemoveRedShirt: Locator;
    readonly getCart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getAddBackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.getRemoveBackpack = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.getAddBikeLight = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.getRemoveBikeLight = page.locator('[data-test="remove-sauce-labs-bike-light"]');
        this.getAddBoltShirt = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.getRemoveBoltShirt = page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]');
        this.getAddJacket = page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
        this.getRemoveJacket = page.locator('[data-test="remove-sauce-labs-fleece-jacket"]');
        this.getAddOnesie = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
        this.getRemoveOnesie = page.locator('[data-test="remove-sauce-labs-onesie"]');
        this.getAddRedShirt= page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
        this.getRemoveRedShirt = page.locator('[data-test="remove-test.allthethings()-t-shirt-(red)"]');
        this.getCart = page.locator('#shopping_cart_container a');
    }

    async addBackpack() {
        await this.getAddBackpack.click();
    }
    async addBikeLight() {
        await this.getAddBikeLight.click();
    }
    async addBoltShirt() {
        await this.getAddBoltShirt.click();
    }
    async addJacket() {
        await this.getAddJacket.click();
    }
    async addOnesie() {
        await this.getAddOnesie.click();
    }
    async addRedShirt() {
        await this.getAddRedShirt.click();
    }

    async removeBackpack() {
        await this.getRemoveBackpack.click();
    }
    async removeBikeLight() {
        await this.getRemoveBikeLight.click();
    }
    async removeBoltShirt() {
        await this.getRemoveBoltShirt.click();
    }
    async removeJacket() {
        await this.getRemoveJacket.click();
    }
    async removeOnesie() {
        await this.getRemoveOnesie.click();
    }
    async removeRedShirt() {
        await this.getRemoveRedShirt.click();
    }

    async addAllProducts() {
        await this.getAddBackpack.click();
        await this.getAddBikeLight.click();
        await this.getAddBoltShirt.click();
        await this.getAddJacket.click();
        await this.getAddOnesie.click();
        await this.getAddRedShirt.click();
    }
    
    async clickCart() {
        await this.getCart.click();
    }

    async assertNumberItems(numberItems: string) {
        await expect (this.getCart).toHaveText(numberItems)  
    }


}

export default InventoryPage;