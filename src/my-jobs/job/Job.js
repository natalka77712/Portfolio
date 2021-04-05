import React from 'react';
import styles from './Job.module.scss'
import Button from "../../common/components/button/Button";


function Job({title, description, style}) {
    return (
        <div className={styles.job}>
            <div  className={styles.image} style={style}>
                <Button text={"Look"}/>
            </div>
            <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{title}</h3>
                <span className={styles.description}>{description}</span>
            </div>
        </div>
    );
}

export default Job;
