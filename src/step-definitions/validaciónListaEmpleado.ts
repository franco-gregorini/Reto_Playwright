import { Given, Then, When } from "@cucumber/cucumber";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import PimPage from "../pages/pimPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const pimPage = new PimPage();

Given('que ingreso a la pagina de OrangeHRM con las credenciales username {string} y password {string}', async (user, password)=> {
    await loginPage.navigateToOrangePage();
    await loginPage.login(user, password);
    await loginPage.click_button_login();
    await dashboardPage.loginSuccess();
})

When('quiero buscar el nuevo empleado con nombre {string}', async (employeeName)=> {
    await pimPage.create_employee("Franco","Alonso","Gregorini")
    await pimPage.click_button_add_employee();
    await pimPage.view_employee(employeeName);
})

Then('el empleado fue creado satisfactoriamente en la lista', async ()=> {
    await pimPage.click_button_search_employee();
})