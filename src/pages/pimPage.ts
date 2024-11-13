import { expect } from "@playwright/test";

export default class PimPage{
    private Elements = {
        pimButton: "//body/div[@id='app']/div[1]/div[1]/aside[1]/nav[1]/div[2]/ul[1]/li[2]",
        addButton: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/button[1]",
        searchButton: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[2]/button[2]",
        employeeNameInput: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/input[1]",
        recordsLabel: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/span[1]",
        firstNameInput: "//input[@name='firstName']",
        middleNameInput: "//input[@name='middleName']",
        lastNameInput: "//input[@name='lastName']",
        saveButton: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[2]/button[2]",
        confirmPopUp: "//body/div[@id='app']/div[@id='oxd-toaster_1']/div[1]/div[1]/div[2]",
        otherIdInput: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[2]/div[1]/div[2]/div[1]/div[2]/input[1]",
        driverLicenseInput: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[2]/div[2]/div[1]/div[1]/div[2]/input[1]",
        genderButton: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[3]/div[2]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/label[1]/span[1]",
        saveButton2: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[4]/button[1]"
    }

    async create_employee(firstName: string, middleName: string, lastName: string) {
        await global.page.waitForSelector(this.Elements.pimButton);
        await global.page.click(this.Elements.pimButton);
        await global.page.waitForSelector(this.Elements.addButton);
        await global.page.click(this.Elements.addButton);
        await global.page.waitForSelector(this.Elements.saveButton);
        await global.page.type(this.Elements.firstNameInput, firstName);
        await global.page.type(this.Elements.middleNameInput, middleName);
        await global.page.type(this.Elements.lastNameInput, lastName);
    }

    async click_button_add_employee() {
        await global.page.click(this.Elements.saveButton);
        await global.page.waitForSelector(this.Elements.confirmPopUp);
        await expect(global.page.locator(this.Elements.confirmPopUp)).toBeVisible(); 
    }

    async detail_employee() {
        await global.page.waitForSelector(this.Elements.saveButton2);
        await global.page.type(this.Elements.otherIdInput, "0244");
        await global.page.type(this.Elements.driverLicenseInput, "NO");
        await global.page.click(this.Elements.genderButton);
    }

    async view_employee(employeetName : String) {
        await global.page.waitForSelector(this.Elements.pimButton);
        await global.page.click(this.Elements.pimButton);
        await global.page.waitForSelector(this.Elements.searchButton);
        await global.page.type(this.Elements.employeeNameInput, employeetName);
    }

    async click_button_search_employee() {
        await global.page.click(this.Elements.searchButton);
        await global.page.waitForSelector(this.Elements.recordsLabel);
        await expect(global.page.locator(this.Elements.recordsLabel)).toBeVisible(); 
    }

}