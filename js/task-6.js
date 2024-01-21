function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// ========================================= VARIBALES =========================================

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const clearBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

// ================================== ADDING ELEMENTS FUNCTION =================================

function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    let width = 30;
    let height = 30;
    for (let i = 0; i < amount; i++) {
      const element = document.createElement("div");
      element.style.width = width + "px";
      element.style.height = width + "px";
      element.style.backgroundColor = getRandomHexColor();
      width += 10;
      height += 10;
      boxesContainer.appendChild(element);
    }
  }
  return boxesContainer;
}

// ============================ REMOVING ELEMENTS FUNCTION ======================================

function removeBoxes() {
  boxesContainer.innerHTML = "";
}

// =============================== ADDING EVENT LISTENER TO CREATE BUTTON =========================
createBtn.addEventListener("click", function () {
  createBoxes(input.value);
});

// =============================== ADDING EVENT LISTENER TO CLEAR BUTTON ==========================

clearBtn.addEventListener("click", function () {
  removeBoxes(input.value);
});
