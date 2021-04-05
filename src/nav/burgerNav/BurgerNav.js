import React, {useState} from 'react';
import style from './BurgerNav.module.scss';
import { Link } from "react-scroll";

function BurgerNav() {
    const [menuIsOpen, setBurgerMenu] = useState(false);

    let onBurgerButtonClick = () => {
        setBurgerMenu ( !menuIsOpen)
    };

    return (
        <div className={style.burgerNav}>
            <div className={menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
                <Link
                    className={style.navLink}
                    activeClass={style.active}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Main</Link>
                <Link
                    className={style.navLink}
                    activeClass={style.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Skills</Link>
                <Link
                    className={style.navLink}
                    activeClass={style.active}
                    to="my-jobs"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Projects</Link>
                <Link
                    className={style.navLink}
                    activeClass={style.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Contacts</Link>
            </div>
            <div onClick={onBurgerButtonClick} className={menuIsOpen ? style.burgerBtn : style.burgerBtnClosed} aria-label={"открыть меню"}></div>
        </div>
    );
}

export default BurgerNav;
