import { type Locator, type Page, expect } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly zipCodeField: Locator;
    readonly continueButton: Locator;
    readonly errorMessage: Locator


    constructor(page: Page) {
        this.page = page;
        this.firstNameField = page.getByTestId(('firstName'));
        this.lastNameField = page.getByTestId(('lastName'));
        this.zipCodeField = page.getByTestId(('postalCode'));
        this.continueButton = page.getByTestId(('continue'));
        this.errorMessage = page.getByTestId('error')
    }

    async clickContinueButton() {
        await this.continueButton.click();
    }
    async inputFirstName(username: string) {
        await this.firstNameField.fill(username);
    }
    async inputLastName(password: string) {
        await this.lastNameField.fill(password);
    }
    async inputZipCode(password: string) {
        await this.zipCodeField.fill(password);
    }
    async checkErrorMessage() {
        await expect(this.errorMessage).toBeVisible();
    }


}

export default CheckoutPage;