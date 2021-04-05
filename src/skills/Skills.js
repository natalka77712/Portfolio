import React from 'react';
import styleContainer from '../common/styles/Container.module.scss';
import style from './Skills.module.scss';
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import reactIcon from "./../assets/images/react-icon.svg";
import jsIcon from "./../assets/images/js-icon.svg";
import htmlIcon from "./../assets/images/html-icon.svg";
import Fade from 'react-reveal/Fade';


function Skills() {
    let react = reactIcon;
    let js = jsIcon;
    let html = htmlIcon;

    return (
        <div id="skills" className={style.skillsBlock}>
            <Fade top>
                <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                    <Title text={'Skills'}/>
                    <div className={style.skills}>
                        <Skill title={"JS"} icon={js} description={"ES5, ES6"}/>
                        <Skill title={"HTML/CSS"} icon={html} description={"LESS, SASS"}/>
                        <Skill title={"React"} icon={react} description={"React, Redux"}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;
