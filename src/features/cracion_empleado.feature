Feature: Creación de Empleado

@creacion_empleado
Scenario: Crear un empleado con datos válidos
    Given que ingreso a la pagina de OrangeHRM con mis credenciales username "Admin" y password "admin123"
    When quiero crear un nuevo empleado con nombre "Franco", segundo nombre "Alonso" y apellido "Gregorini"
    Then el empleado es creado satisfactoriamente