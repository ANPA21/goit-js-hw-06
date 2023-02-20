const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsListEl = document.querySelector("#ingredients");
let ingredientsList = [];
const makeIngedientItem = (i) => {
  const ingredientItem = document.createElement("li");

  ingredientItem.textContent = ingredients[i];
  ingredientItem.classList.add("item");

  return ingredientItem;
};

for (let i = 0; i < ingredients.length; i += 1) {
  ingredientsList.push(makeIngedientItem(i));
}

ingredientsListEl.append(...ingredientsList);
