import { type Locator, type Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.locator('[data-test="username"]');
        this.passwordField = page.locator('[data-test="password"]');
        this.loginButton = page.locator(('[data-test="login-button"]'));
        
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }
    async inputUsername(username: string) {
        await this.usernameField.fill(username);
    }
    async inputPassword(password: string) {
        await this.passwordField.fill(password);
    }
    async assertURL(url:string) {
        await expect(this.page).toHaveURL(url);
    }
}

export default HomePage;