import React from 'react';
import './myButton.css'

const MyButton = (props) => {
    return (
        <div>
            <button className="my_button">
                {props.children}
            </button>
        </div>
    );
};

export default MyButton;