'use strict';

/* json data is from https://api.sampleapis.com/ */

// Select buttons and container
const icedBtn = document.getElementById("iced-btn");
const hotBtn = document.getElementById("hot-btn");
const container = document.querySelector(".container");

// Add event listener for Iced Coffee
icedBtn.addEventListener("click", () => {
    fetch("data/iced.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            addDrinks(data);
        });
});

// Add event listener for Hot Coffee
hotBtn.addEventListener("click", () => {
    fetch("data/hot.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            addDrinks(data);
        });
});

// Function to add drinks to page
function addDrinks(drinks) {
    // Clear the container
    container.innerHTML = "";

    drinks.forEach(drink => {
        // Create card article
        const article = document.createElement("article");
        article.classList.add("card");
        container.appendChild(article);

        // Add image
        const img = document.createElement("img");
        img.src = drink.image;
        img.alt = drink.title;
        article.appendChild(img);

        // Create content div
        const content = document.createElement("div");
        content.classList.add("content");
        article.appendChild(content);

        // Title
        const h3 = document.createElement("h3");
        h3.textContent = drink.title;
        content.appendChild(h3);

        // Description
        const p = document.createElement("p");
        p.textContent = `${drink.description} Ingredients include:`;
        content.appendChild(p);

        // Ingredients container
        const ingDiv = document.createElement("div");
        ingDiv.classList.add("ingredients");
        content.appendChild(ingDiv);

        // Loop through ingredients
        drink.ingredients.forEach(ingredient => {
            const ing = document.createElement("div");
            ing.classList.add("ingredient");
            ing.textContent = ingredient;
            ingDiv.appendChild(ing);
        });
    });
}
