import React from 'react';
import style from './Button.module.scss';


function Button({text}) {
    return (
        <a href="" className={style.button}>{text}</a>
    );
}

export default Button;
