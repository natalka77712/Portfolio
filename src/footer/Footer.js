import React from 'react';
import styleContainer from '../common/styles/Container.module.scss';
import style from './Footer.module.scss';
import telegramIcon from "../assets/images/telegram.svg"
import vkIcon from "../assets/images/vk.svg"
import facebookIcon from "../assets/images/facebook.svg"
import Fade from 'react-reveal/Fade';

function Footer() {
    return (
        <div className={style.footerBlock}>
            <Fade>
                <div className={`${styleContainer.container} ${style.footerContainer}`}>
                    <h2 className={style.title}>Natalya Kostousova</h2>
                    <div className={style.wrapper}>
                        <ul className={style.socialLinks}>
                            <li className={style.socialIcon}>
                                <a href="https://www.facebook.com/kostonatalya/">
                                    <img src={facebookIcon} alt=""/>
                                </a>
                            </li>
                            <li className={style.socialIcon}>
                                <a href="https://t.me/Natalya_77712">
                                    <img src={telegramIcon} alt=""/>
                                </a>
                            </li>
                            <li className={style.socialIcon}>
                                <a href="">
                                    <img src={vkIcon} alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <p className={style.copyright}>All Rights Reserved</p>
                </div>
            </Fade>
        </div>
    );
}

export default Footer;
