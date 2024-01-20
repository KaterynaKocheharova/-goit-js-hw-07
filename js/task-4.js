// =================================================== VARIABLES =============================================

const loginForm = document.querySelector(".login-form");

// ======================================= HANDLE LOGIN FORM SUBMIT EVENT ===========================

const handleLogining = (event) => {

    // preventing updating of the page
event.preventDefault();

// variables
const form = event.target;
const email = form.elements.email.value;
const password = form.elements.password.value;
const valuesObject = {};

// Validation
if(email.trim() === "" || password.trim() === "") {
    alert("All form fields must be filled in");
} else {
    // Collecting user's data
    valuesObject.email = form.elements.email.value;
    valuesObject.password = form.elements.password.value;
    console.log(valuesObject);
    form.reset();
}
}

// ============================================ ADDING EVENT TO THE FORM =======================================

loginForm.addEventListener("submit", handleLogining);
