// ======================================== VARIABLES ===================================================

const nameInput = document.querySelector("#name-input");
let nameOutput = document.querySelector("#name-output");

// ==================================  HANDLE NAME FUNCTION =============================================

const handleName = (event) => {
    if(event.currentTarget.value.trim() === "") {
        nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = event.currentTarget.value.trim();
    }
}

// ======================================= INPUT EVENT ==================================================

nameInput.addEventListener("input", handleName);




