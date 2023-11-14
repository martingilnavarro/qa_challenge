import { type Locator, type Page, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator
    

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.getByTestId('username');
        this.passwordField = page.getByTestId('password');
        this.loginButton = page.getByTestId('login-button');
        this.errorMessage = page.getByTestId('error')
        
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
    async checkErrorMessage() {
        await expect(this.errorMessage).toBeVisible();
    }
}

export default LoginPage;