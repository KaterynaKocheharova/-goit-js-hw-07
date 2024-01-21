// ================================== GENERATE RANDOM COLOR FUNCTION ========================================

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// ============================================== VRIABLES ==================================================

const changeColorBtn = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorSpan = document.querySelector(".color");

// ======================================= CHANGE COLORS FUNCTION ===========================================

const changeColor = () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}

// ======================================= ADDING EVEN LISTENER ============================================

changeColorBtn.addEventListener("click", changeColor);