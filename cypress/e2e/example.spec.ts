import SignInFormPage from "../support/page-object/SignInFormPage";

describe('This is example Test Suite', () => {
    let signInFormPage: SignInFormPage;

    beforeEach(() => {
        signInFormPage = new SignInFormPage();
        cy.visit('/sign-in');
    });

    it('should check blank data error messages', () => {
        signInFormPage.exist();
        signInFormPage.submitLoginForm();
    });
});