import React from 'react';

interface IBurgerProps {
    array: React.ReactNode[];
    totalPrice: number;
}

const Burger: React.FC<IBurgerProps> = (props) => {
    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {props.array}
            <div className="BreadBottom"></div>
            <p>Price: {props.totalPrice}</p>
        </div>
    );
};

export default Burger;
