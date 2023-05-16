import axios from "axios";
import DataSource from "../data/data-source.js";
import "../component/search-bar.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const cardContent = document.getElementById("cardContent");
  const IMG_URL = "https://www.themealdb.com/images/media/meals/";

  const getAllCategories = async () => {
    try {
      const response = await DataSource.getAllCategories();
      renderResult(response.data.meals);
      console.log(response.data.meals);
    } catch (error) {
      fallbackResult(error);
    }
  };

  const onButtonSearchClicked = async () => {
    try {
      const response = await DataSource.searchFood(searchElement.value);
      renderResult(response.data.meals);
      console.log(response.data.meals);
    } catch (message) {
      console.log(message);
    }
  };

  const renderResult = (categories) => {
    cardContent.innerHTML = "";

    categories.forEach((Meals) => {
        const { strMeal, strMealThumb } = Meals;
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
          if (Meals[`strIngredient${i}`]) {
            ingredients.push(Meals[`strIngredient${i}`]);
          }
        }
      
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img class="category-image" id="categoryImage" src="${strMealThumb}" alt="${strMeal}">
            <h3 class="category-name" id="categoryName">${strMeal.slice(0, 50)}</h3>
            <h3 class="title-ingredients"> Ingredients: </h3>
            <p class="category-ingredients">${ingredients.join(", ")}</p>
        `;
      
      cardContent.appendChild(card);
    });
  };

  const fallbackResult = (message) => {
    cardContent.innerHTML = `
            <h2>${message}</h2>
        `;
    };
    getAllCategories();
    searchElement.clickEvent = onButtonSearchClicked;
  };
  
  export default main;