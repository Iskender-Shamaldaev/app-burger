import React from 'react';

interface IButtonProps {
    image: string;
    onClick: React.MouseEventHandler;
    name: string;
}

const Buttons: React.FC<IButtonProps> = (props) => {

    return (
        <div className="pic-btn">
            <button className="btn" onClick={props.onClick}>
                <img className="img" src={props.image} alt="Ingredient"/>
            </button>
            <h1 className="name">{props.name}</h1>
        </div>
    );
};

export default Buttons;