import React from 'react';
import styleContainer from '../common/styles/Container.module.scss';
import style from './Main.module.scss';
import Particles from 'react-particles-js';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'

const particlesOpt = {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": {
                    "value_area": 600
                }
            },
        },
    },
}


function Main() {
    return (
        <div id="main" className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOpt}/>
            <div className={styleContainer.container}>
                <div className={style.textWrapper}>
                    <span>Hi There</span>
                    <h2>I am <p>Natalya Kostousova</p></h2>
                    <ReactTypingEffect className={style.profession}
                                       text="Frontend developer"
                    />
                </div>
                <Tilt className="Tilt" options={{max: 25}}>
                    <div className={style.photo}>
                        <div className={style.image}>
                        </div>
                    </div>
                </Tilt>
            </div>
        </div>
    );
}

export default Main;
