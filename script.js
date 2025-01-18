const form = document.querySelector("form");
const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");
const dayInput = document.querySelector("#dayInput");
const yearInput = document.querySelector("#yearInput");
const termsCheckbox = document.querySelector("#termsInput");
const submitButton = document.querySelector("#submitButton");

const emailRegex = /^[a-zA-Z0-9]+([\.\-_][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([\-][a-zA-Z0-9]+)?(\.[a-zA-Z0-9]{2,})+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*\(\)])[a-zA-Z0-9!@#$%^&*\(\)]{8,}$/;
const dayRegex = /^(0?[1-9]|[1-2][0-9]|3[0-1])$/;
const yearRegex = /^(19[0-9][0-9]|20[0-1][0-9]|202[0-5])$/;

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
    console.log("Inputted")
    if (allInputIsValid()) {
        console.log("Valid")
        submitButton.disabled = false;
    }
    else {
        console.log("Invalid")
        submitButton.disabled = true;
    }
});