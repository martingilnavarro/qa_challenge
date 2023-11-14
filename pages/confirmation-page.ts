import { type Locator, type Page, expect } from '@playwright/test';

export class ConfirmationPage {
    readonly page: Page;
    readonly finishButton: Locator;
   
    constructor(page: Page) {
        this.page = page;
        this.finishButton = page.getByTestId(('finish'));
    }

    async clickFinishButton() {
        await this.finishButton.click();
    }


}

export default ConfirmationPage;