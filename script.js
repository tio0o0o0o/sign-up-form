const form = document.querySelector("form");

const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");
const dayInput = document.querySelector("#dayInput");
const yearInput = document.querySelector("#yearInput");
const termsCheckbox = document.querySelector("#termsInput");

const submitButton = document.querySelector("#submitButton");

const emailError = document.querySelector("#emailError");
const passwordError1 = document.querySelector("#passwordError1");
const passwordError2 = document.querySelector("#passwordError2");
const passwordError3 = document.querySelector("#passwordError3");
const dateError = document.querySelector("#dateError");

const emailRegex = /^[a-zA-Z0-9]+([\.\-_][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([\-][a-zA-Z0-9]+)?(\.[a-zA-Z0-9]{2,})+$/;
// Pattern has to be eight or more characters, uses uppercase, lowercase, and special character, and only uses a set character range
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*\(\)])[a-zA-Z0-9!@#$%^&*\(\)]{8,}$/;
// Pattern has to be eight or more characters
const passwordRegex1 = /^.{8,}$/;
// Pattern has to include uppercase, lowercase, and special character
const passwordRegex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*\(\)]).*$/;
// Pattern has to only use characters from a set range
const passwordRegex3 = /^[a-zA-Z0-9!@#$%^&*\(\)]*$/
const dayRegex = /^(0?[1-9]|[1-2][0-9]|3[0-1])$/;
const yearRegex = /^(19[0-9][0-9]|20[0-1][0-9]|202[0-5])$/;

// Shitty version of a finite state machine. Possible states are untouched, touched, unfocused, userValid, userInvalid. userValid and userInvalid are meant to replicate the CSS element state of user-valid and user-invalid. 
let emailInputState = "untouched";
let passwordInputState = "untouched";
let dayInputState = "untouched";
let yearInputState = "untouched";

function allInputIsValid() {
    if (!inputIsValid(emailInput, emailRegex)) return false;
    if (!inputIsValid(passwordInput, passwordRegex)) return false;
    if (!inputIsValid(dayInput, dayRegex)) return false;
    if (!inputIsValid(yearInput, yearRegex)) return false;
    if (!termsCheckbox.checked) return false;
    return true;
}

function inputIsValid(inputControl, regex) {
    if (inputControl.value.match(regex) !== null) return true;
    else return false;
}

form.addEventListener("input", () => {
    if (allInputIsValid()) submitButton.disabled = false;
    else submitButton.disabled = true;
});

// Update emailInputState on events
emailInput.addEventListener("input", () => {
    if (emailInputState === "valid" || emailInputState === "invalid") {
        if (inputIsValid(emailInput, emailRegex)) {
            emailInputState = "valid";
            emailError.style.display = "none";
        }
        else {
            emailInputState = "invalid";
            emailError.style.display = "block";
        }
    } 
    if (emailInputState === "untouched") emailInputState = "touched";
});

emailInput.addEventListener("focusout", () => {
    if (emailInputState === "touched" || emailInputState === "valid" || emailInputState === "invalid") {
        if (inputIsValid(emailInput, emailRegex)) {
            emailInputState = "valid";
            emailError.style.display = "none";
        }
        else {
            emailInputState = "invalid";
            emailError.style.display = "block";
        }
    }
});

// Update dayInputState on events
dayInput.addEventListener("input", () => {
    if (dayInputState === "valid" || dayInputState === "invalid") {
        if (inputIsValid(dayInput, dayRegex)) {
            dayInputState = "valid";
            dateError.style.display = "none";
        }
        else {
            dayInputState = "invalid";
            dateError.style.display = "block";
        }
    } 
    if (dayInputState === "untouched") dayInputState = "touched";
});

dayInput.addEventListener("focusout", () => {
    if (dayInputState === "touched" || dayInputState === "valid" || dayInputState === "invalid") {
        if (inputIsValid(dayInput, dayRegex)) {
            dayInputState = "valid";
            dateError.style.display = "none";
        }
        else {
            dayInputState = "invalid";
            dateError.style.display = "block";
        }
    }
});

// Update yearInputState on events
yearInput.addEventListener("input", () => {
    if (yearInputState === "valid" || yearInputState === "invalid") {
        if (inputIsValid(yearInput, yearRegex)) {
            yearInputState = "valid";
            dateError.style.display = "none";
        }
        else {
            yearInputState = "invalid";
            dateError.style.display = "block";
        }
    } 
    if (yearInputState === "untouched") yearInputState = "touched";
});

yearInput.addEventListener("focusout", () => {
    if (yearInputState === "touched" || yearInputState === "valid" || yearInputState === "invalid") {
        if (inputIsValid(yearInput, yearRegex)) {
            yearInputState = "valid";
            dateError.style.display = "none";
        }
        else {
            yearInputState = "invalid";
            dateError.style.display = "block";
        }
    }
});

// Update passwordInputState on events
function checkPasswordError(inputControl) {
    let enteredPassword = inputControl.value;

    if (enteredPassword.match(passwordRegex1) === null) return "invalid1";
    if (enteredPassword.match(passwordRegex2) === null) return "invalid2"; 
    if (enteredPassword.match(passwordRegex3) === null) return "invalid3"; 
    return "valid"
}

passwordInput.addEventListener("input", () => {
    if (passwordInputState === "valid" || passwordInputState === "invalid") {
        switch(checkPasswordError(passwordInput)) {
            case "invalid1":
                passwordInputState = "invalid";
                passwordError1.style.display = "block";
                passwordError2.style.display = "none";
                passwordError3.style.display = "none";
                break;
            case "invalid2":
                passwordInputState = "invalid";
                passwordError1.style.display = "none";
                passwordError2.style.display = "block";
                passwordError3.style.display = "none";
                break;
            case "invalid3":
                passwordInputState = "invalid";
                passwordError1.style.display = "none";
                passwordError2.style.display = "none";
                passwordError3.style.display = "block";
                break;
            case "valid":
                passwordInputState = "valid";
                passwordError1.style.display = "none";
                passwordError2.style.display = "none";
                passwordError3.style.display = "none";
                break;
            default:
                break;
        }
    } 
    if (passwordInputState === "untouched") passwordInputState = "touched";
});

passwordInput.addEventListener("focusout", () => {
    if (passwordInputState === "touched" || passwordInputState === "valid" || passwordInputState === "invalid") {
        switch(checkPasswordError(passwordInput)) {
            case "invalid1":
                passwordInputState = "invalid";
                passwordError1.style.display = "block";
                passwordError2.style.display = "none";
                passwordError3.style.display = "none";
                break;
            case "invalid2":
                passwordInputState = "invalid";
                passwordError1.style.display = "none";
                passwordError2.style.display = "block";
                passwordError3.style.display = "none";
                break;
            case "invalid3":
                passwordInputState = "invalid";
                passwordError1.style.display = "none";
                passwordError2.style.display = "none";
                passwordError3.style.display = "block";
                break;
            case "valid":
                passwordInputState = "valid";
                passwordError1.style.display = "none";
                passwordError2.style.display = "none";
                passwordError3.style.display = "none";
                break;
            default:
                break;
        }
    }
});

// Toggle password visibility
function toggleVisibility() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    }
    else {
        passwordInput.type = "password";
    }
}
