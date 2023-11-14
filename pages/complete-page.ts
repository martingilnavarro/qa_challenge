import { type Locator, type Page, expect } from '@playwright/test';

export class CompletePage {
    readonly page: Page;
    readonly backHomeButton: Locator;
   
    constructor(page: Page) {
        this.page = page;
        this.backHomeButton = page.getByTestId(('back-to-products'));
    }

    async clickBackHomeButton() {
        await this.backHomeButton.click();
    }


}

export default CompletePage;