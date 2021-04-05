import React from 'react';
import styleContainer from "../common/styles/Container.module.scss";
import style from './Header.module.scss';
import Nav from "../nav/Nav";
import BurgerNav from "../nav/burgerNav/BurgerNav";


function Header() {
    return (
        <div className={style.headerBlock}>
            <div className={`${styleContainer.container} ${style.headerContainer}` }>
                <Nav/>
                <BurgerNav/>
            </div>
        </div>
    );
}

export default Header;
