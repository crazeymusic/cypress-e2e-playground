import PageObjectClass from "../utils/PageObjectClass";

export enum ESignInFormSelector {
    EMAIL = 'EmailInput',
    PASSWORD = 'PasswordInput',
    LOGIN = 'SubmitButton',
    SIGNUP = 'SignUpLink',
}

class SignInFormPage extends PageObjectClass {
    protected scopeName = 'login';

    exist() {
        this.shouldAllBeVisible([
            ESignInFormSelector.EMAIL,
            ESignInFormSelector.PASSWORD,
            ESignInFormSelector.SIGNUP,
            ESignInFormSelector.LOGIN
        ]);
    }

    submitLoginForm() {
        this.getElement(ESignInFormSelector.LOGIN).click();
    }
}

export default SignInFormPage;
