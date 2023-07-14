import login from "../PageObjects/LoginPage"
//Suite//
// describe('Login Orange HRM', () => {
//     //Test//
//     it('Login', () => {
//         //Steps//
//         cy.visit("https://opensource-demo.orangehrmlive.com/")

//         cy
//     })
//   })

describe('Este es otro test', () => {
  it.only('Localizando elementos', () => {
    const loginPage = new login();

    cy.fixture('Credenciales').then((credenciales) => {

      cy.visit("https://opensource-demo.orangehrmlive.com/");

      loginPage.setUsername(credenciales.username);
      loginPage.setPassword(credenciales.password);
      loginPage.clickLogin();
      loginPage.verifyLogin();
    });
  });
});