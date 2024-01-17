// Виводимо кількість категорій
const categoriesArray = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesArray.length}`);

// Ітеруємо через кожну категорію
categoriesArray.forEach((category) => {
    // Виводимо назву категорії
    console.log(`Category: ${category.firstElementChild.textContent}`);
    // Виводимо кількість елементів у категорії
    console.log(`Elements: ${category.lastElementChild.querySelectorAll("li").length}`);
})

