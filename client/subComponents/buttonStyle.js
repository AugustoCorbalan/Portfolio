import React from "react";
import styles from "../styles/buttonStyles.module.css";

const ButtonStyle=({content, status})=>{
    return(
        <>
            <button className={status? styles.buttonContactOn : styles.buttonContactOff}>
                <span className={styles.buttonContact_lg}>
                    <span className={styles.buttonContact_sl}></span>
                    <span className={status ? styles.buttonContact_textOn : styles.buttonContact_textOff}>{content}</span>
                </span>
            </button>
        </>
    )
    
}

export default ButtonStyle