Feature: Iniciar Sesión

@inicio_sesión
Scenario: Iniciar Sesion con datos válidos
    Given que estoy en la página de OrangeHRM
    When ingreso mis credenciales username "Admin" y password "admin123"
    Then el inicio de sesión es satisfactorio