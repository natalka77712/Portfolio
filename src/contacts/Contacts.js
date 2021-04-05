import React from 'react';
import styleContainer from '../common/styles/Container.module.scss';
import style from './Contacts.module.scss';
import Title from "../common/components/title/Title";
import Button from "../common/components/button/Button";
import Fade from 'react-reveal/Fade';


function Contacts() {
    return (
        <div id="contacts" className={style.contactsBlock}>
            <Fade>
                <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                    <Title text={'Contacts'}/>
                    <div className={style.formWrapper}>
                        <form className={style.form}>
                            <input className={style.input} placeholder={'Name'} required/>
                            <input className={style.input} placeholder={'E-mail'} required/>
                            <textarea className={style.textarea} placeholder={'Your message'} required/>
                            <Button type="submit" text={"Send"}/>
                        </form>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Contacts;
