import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './ColorBox.css';

ColorBox.propTypes = {
    
};

function getRandomColor(){
    const  COLOR_LIST =  ['deeppink', 'yellow', 'blue', 'green', 'red'];
    const randomIndex = Math.trunc(Math.random()*5);
    return  COLOR_LIST[randomIndex];
}

function ColorBox() {
    
    const [color, setColor] = useState(()=>{
        const initialColor = localStorage.getItem('box_color') || 'deeppink';
        return initialColor;
    });

    function handleBoxClick(){
        //get random color -> set color
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor);
    }
    return (
        <div 
            className="color-box"
            style={{backgroundColor: color}}
            onClick={handleBoxClick}
        >
        </div>
    );
}

export default ColorBox;