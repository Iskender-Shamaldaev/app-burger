import React from 'react';

interface IBurgerProps {
    array: React.ReactNode[];
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
            <p>Price:</p>
        </div>
    );
};

export default Burger;
