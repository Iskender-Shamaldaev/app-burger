import React, {useState} from 'react';
import {IIngredient} from "./types";
import Burger from "./components/Burger/Burger";
import './App.css';
import meatImage from './assets/meat.png';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salad.png';
import baconImage from './assets/bacon.png';
import Ingredients from "./components/Ingredients/Ingredients";
const App = () => {

    const INGREDIENTS: IIngredient[] = [
        {name: 'Meat', price: 80, image: meatImage},
        {name: 'Cheese', price: 50, image: cheeseImage},
        {name: 'Salad', price: 10, image: saladImage},
        {name: 'Bacon', price: 60, image: baconImage}
    ];



    const [ingredients, setIngredients] = useState([
        {name: 'Meat', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Salad', count: 0},
        {name: 'Bacon', count: 0}
    ])

    const ingredientCount = ingredients.reduce((acc, value) => {
            return acc + value.count;
    }, 30);

    console.log(ingredientCount);





    return (
        <div className="App">
            <div>
                {ingredients.map((ingredient) => (
                    <Ingredients
                        name={ingredient.name}
                        count={ingredient.count}
                    />
                ))}
            </div>
                <Burger />
        </div>
    );
};

export default App;
