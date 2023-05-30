import React from 'react';

interface IIngredientProps {
    count: number;
    id: string;
    onClick: (id: string) => void;
}

const Ingredients: React.FC<IIngredientProps> = (props) => {
    return (
        <div className="ingredients">
            <h1 className="count">x{props.count} </h1>
            <button className="btn-remove" onClick={() => props.onClick(props.id)}>
            </button>
        </div>
    );
};

export default Ingredients;
