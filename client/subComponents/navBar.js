import React from "react";
import styles from "../styles/navBar.module.css";

const NavBar=({visibility})=>{

    const {setVisibles, visibles} = visibility;
    const handleClick=()=>{
        setVisibles({...visibles, form: true});
    }

    return(
        <>
            <div className={styles.navBar}>
                <div className={styles.container1}>
                </div>
                <div className={styles.container2}>
                    <button className={styles.button}>PORTAFOLIO</button>
                    <button className={styles.button}>SOBRE_MI</button>
                    <button className={styles.button}>TECNOLOGIAS</button>
                </div>
                <div className={styles.container3}>
                    <div>
                        <button className={styles.buttonContact} onClick={handleClick}>
                            <span className={styles.buttonContact_lg}>
                                <span className={styles.buttonContact_sl}></span>
                                <span className={styles.buttonContact_text}>_CONTACTAME_</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}


export default NavBar;