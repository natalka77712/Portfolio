import React from 'react';
import style from './Title.module.scss';


function Title({text}) {
    return (
        <div className={style.title}>
            <h2>{text}</h2>
        </div>
    );
}

export default Title;
