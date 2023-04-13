import React from "react";
import styles from "../../styles/buttonStyles.module.css"

const ButtonStyle=({content})=>{
    return(
        <>
            <button className={styles.buttonContact}>
                <span className={styles.buttonContact_lg}>
                    <span className={styles.buttonContact_sl}></span>
                    <span className={styles.buttonContact_text}>{content}</span>
                </span>
            </button>
        </>
    )
    
}

export default ButtonStyle