import React from 'react';
import styleContainer from '../common/styles/Container.module.scss';
import style from './MyJobs.module.scss';
import Job from "./job/Job";
import Title from "../common/components/title/Title";
import monstroyImage from '../assets/images/montstroy.png';
import smartDeviceImage from '../assets/images/smart-device.png';
import Fade from 'react-reveal/Fade';

function MyJobs() {
    const montstroy = {
        backgroundImage: `url(${monstroyImage})`
    };
    const smartDevice = {
        backgroundImage: `url(${smartDeviceImage})`
    };

    return (
        <div id="my-jobs" className={style.jobsBlock}>
            <Fade>
                <div className={`${styleContainer.container} ${style.jobsContainer}`}>
                    <Title text={'My jobs'}/>
                    <div className={style.jobs}>
                        <Job title='Smart Device ' style={smartDevice}
                             description='Adaptive website which includes less, bam html, javascript'/>
                        <Job title='Montstroy' style={montstroy}
                             description='Adaptive website which includes less, bam html, javascript'/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}


export default MyJobs;
