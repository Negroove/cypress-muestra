require('cypress-xpath') 
class login {
  txtUserName = "input[placeholder='Username']";
  txtPassword = "input[placeholder='Password']";
  btnLogin = "button[type='submit']";
  lblTexToVefiry = "//h6[normalize-space()='Dashboard']";
  setUsername(username) {
    cy.get(this.txtUserName).type(username);
  }

  setPassword(password) {
    cy.get(this.txtPassword).type(password);
  }

  clickLogin() {
    cy.get(this.btnLogin).click();
  }

  verifyLogin() {
    cy.xpath(this.lblTexToVefiry).should('have.text','Dashboard')
  }
}

export default login;
