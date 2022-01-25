// import module data-source.js
import '../component/meal-list.js';
import '../component/search-meal.js';
import DataSource from "../data/data-source.js";

const main = () => {
    const searchElement = document.querySelector("search-meal");
    const mealListElement = document.querySelector("meal-list");

    const onButtonSearchClicked = async () => {
        // menggunakan metode async/await
        try {
            const result = await DataSource.searchMeal(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        mealListElement.meals = results;
    };

    const fallbackResult = message => {
        mealListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;