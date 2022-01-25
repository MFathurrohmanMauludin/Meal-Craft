class MealItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }



    render() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                :host {
                    display: block;
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                }

                small{
                    font-size: 12pt;
                }

                .meal-group {
                    width: 100%;
                    max-height: 400px;
                    object-fit: cover;
                    object-position: center;
                }
                
                .meal-info {
                    padding: 24px;
                }
                
                .meal-info > h2 {
                    font-size: 24pt;
                }
                
                .meal-info > p {
                    margin-top: 10px;
                    font-size: 14pt;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 20;
                }
            </style>
            <img class="meal-group" src="${this._meal.strMealThumb}" alt="this is meal">
            <div class="meal-info">
                <h2>${this._meal.strMeal}</h2>
                <small>Meal from: ${this._meal.strArea}</small>
                <p><strong>Ingredient:</strong> ${this._meal.strIngredient1}, ${this._meal.strIngredient2}, ${this._meal.strIngredient3}, ${this._meal.strIngredient4}</p>
                <p><strong>Steps:</strong> ${this._meal.strInstructions}</p>
                <span><a href="${this._meal.strYoutube}" target="_blank">View video</a></span>
            </div>
            `;
    }
}

customElements.define("meal-item", MealItem);