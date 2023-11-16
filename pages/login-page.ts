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

    async login(username: string, password: string) {   
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

    async assertURL(url:string) {
        await expect(this.page).toHaveURL(url);
    }
    
    async checkErrorMessage() {
        await expect(this.errorMessage).toBeVisible();
    }
}

export default LoginPage;