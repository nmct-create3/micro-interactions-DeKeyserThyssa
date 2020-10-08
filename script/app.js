function handleFloatingLabel() {
   
}

const handleLoginValidation = function () {
    let email = {
            field: null,
            errorMessage: 0,
            input: 0,
        },
        password = {},
        signInButton;

        TODO
        email.field = document.querySelector('.js-email-field');
        email.errorMessage = document.querySelector('.js-email-error-message');
        email.input = document.querySelector('.js-email-input');
    }

const handlePasswordSwitcher = function () {
    const passwordInput = document.querySelector('.js-password-input'), passwordToggle = document.querySelector('.js-password-toggle');

    // simpele zelfcontrole
    if (!passwordInput || !passwordToggle) {
        console.error('De classes werden niet gevonden.', passwordInput, passwordToggle);
        return;
    }

    // We gaan luisteren of er geklikt wordt op de checkbox.
    passwordToggle.addEventListener('change', function() {
        // Als er geklikt wordt, veranderen we het type van de input van 'password' naar 'text' en vice versa.
        if (passwordInput.type == 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });
};

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    // handleFloatingLabel();
    handlePasswordSwitcher();

    handleLoginValidation();
});
