import { expect } from "@playwright/test";

export default class DashboardPage{
    private Elements = {
        dashboardTitle: "//header/div[1]/div[1]/span[1]/h6[1]",
        dashboardPost: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[4]/div[1]/div[2]/div[1]/div[1]/p[1]"
    }

    async loginSuccess(){
        await global.page.waitForSelector(this.Elements.dashboardTitle);
        await global.page.waitForSelector(this.Elements.dashboardPost);
        await expect(global.page.locator(this.Elements.dashboardPost)).toBeVisible(); 
    }
}