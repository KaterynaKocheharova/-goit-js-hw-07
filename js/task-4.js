// =================================================== VARIABLES =============================================

const loginForm = document.querySelector(".login-form");

// ======================================= HANDLE LOGIN FORM SUBMIT EVENT FUNCTION ===========================

const handleLogining = (event) => {

    // preventing updating of the page
event.preventDefault();

// variables
const form = event.target;
const email = form.elements.email.value;
const password = form.elements.password.value;
const valuesObject = {};

// Do I need trim here? Просто без метода трім все і так працює, тобто незважаючи на те яку кількість пробілів я ввела,
// воно все рівно не пропускає. Тобто будь-який пробіл вважається "". Якось дивно
if(email.trim() === "" || password.trim() === "") {
    alert("All form fields must be filled in");
} else {
    valuesObject.email = form.elements.email.value;
    valuesObject.password = form.elements.password.value;
    console.log(valuesObject);
    form.reset();
}
}

// ============================================ ADDING EVENT TO THE FORM =======================================

loginForm.addEventListener("submit", handleLogining);
