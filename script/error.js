let email = {},
    password = {},
    signInButton;

const getDOMElements = function () {

};

const enableListeners = function () {

};

const isValidEmailAddress = function(emailAddress) {
    // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function(fieldValue) {
    return !fieldValue || !fieldValue.length;
 };


document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded 🥳');
});