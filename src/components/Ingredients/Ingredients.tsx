import React from 'react';

interface IIngredientProps {
    name: string;
    count: number;
}

const Ingredients: React.FC<IIngredientProps> = props => {
    return (
        <div className="ingredients">
            <p>{props.name}</p>
            <p>{props.count}</p>
            <button className="btn-add">+</button>
            <button className="btn-minus">-</button>
            <button className="btn-remove">Remove</button>
        </div>
    );
};

export default Ingredients;