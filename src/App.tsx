import React, { useState } from 'react';
import { IIngredient } from './types';
import Burger from './components/Burger/Burger';
import Ingredients from './components/Ingredients/Ingredients';
import Buttons from './components/Buttons/Buttons';
import meatImage from './assets/meat.png';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salad.png';
import baconImage from './assets/bacon.png';
import './App.css';

const App = () => {
    const INGREDIENTS: IIngredient[] = [
        { id: '1',name: 'Meat', price: 80, image: meatImage },
        { id: '2', name: 'Cheese', price: 50, image: cheeseImage },
        { id: '3', name: 'Salad', price: 10, image: saladImage },
        { id:'4',name: 'Bacon', price: 60, image: baconImage }
    ];

    const [ingredients, setIngredients] = useState([
        {id: '1', name: 'Meat', count: 0},
        {id: '2', name: 'Cheese', count: 0},
        {id: '3',name: 'Salad', count: 0},
        {id: '4', name: 'Bacon', count: 0}
    ]);

    const [totalPrice, setTotalPrice] = useState(30);

    const buttonClick = (name: string) => {
        setIngredients(prevState => {
            return prevState.map(ingredient => {
                if (ingredient.name === name) {
                    return {
                        ...ingredient,
                        count: ingredient.count + 1,
                    };
                }
                return ingredient;
            });
        });

        setTotalPrice((price) => {
            const ingredient = INGREDIENTS.find((item) => item.name === name);
            if (ingredient) {
                return price + ingredient.price;
            }
            return price;
        });
    };

    const removeClick = (id: string) => {
        setIngredients((prevState) => {
            return prevState.map((ingredient) => {
                if (ingredient.id === id && ingredient.count > 0) {
                    return {
                        ...ingredient,
                        count: ingredient.count - 1,
                    };
                }
                return ingredient;
            });
        });

        setTotalPrice((price) => {
            const ingredient = INGREDIENTS.find((item) => item.id === id);

            const current = ingredients.find((item) => item.id === id);

                if (current && current.count > 0 && price > 30) {

                        if (ingredient) {
                            return price - ingredient.price;
                        }
                    }

            return price;
        });
    };

    const array: React.ReactNode[] = [];

    ingredients.map(component => {
        if (component.count > 0) {
            for (let i = 0; i < component.count; i++) {
                array.push(<div className={component.name} key={component.id + i}></div>);
            }
        }
        return component;
    });

    return (
        <div className="App">
            <div className="ing-count">
                <div>
                    {INGREDIENTS.map((button) => (
                        <Buttons
                            key={button.name}
                            image={button.image}
                            name={button.name}
                            onClick={() => buttonClick(button.name)}
                        />
                    ))}
                </div>
                <div>
                    {ingredients.map((ingredient) => (
                        <Ingredients
                            count={ingredient.count}
                            id={ingredient.id}
                            key={ingredient.id}
                            onClick={removeClick}
                        />
                    ))}
                </div>
            </div>
            <div className="burger-wrap">
                <Burger
                    array={array}
                    totalPrice={totalPrice}
                />
            </div>
        </div>
    );
};

export default App;
