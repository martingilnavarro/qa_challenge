import { type Locator, type Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly getUsernameField: Locator;
    readonly getPasswordField: Locator;
    readonly getLoginButton: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.getUsernameField = page.locator('[data-test="username"]');
        this.getPasswordField = page.locator('[data-test="password"]');
        this.getLoginButton = page.locator(('[data-test="login-button"]'));
        
    }

    async clickLoginButton() {
        await this.getLoginButton.click();
    }
    async inputUsername(username: string) {
        await this.getUsernameField.fill(username);
    }
    async inputPassword(password: string) {
        await this.getPasswordField.fill(password);
    }

    async assertURL(url:string) {
        await expect(this.page).toHaveURL(url);
    }
}

export default HomePage;