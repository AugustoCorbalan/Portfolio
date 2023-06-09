import Link from "next/link";
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
                    <a className={styles.button} href="/">PRINCIPAL</a>   
                    <a className={styles.button} href="#about">SOBRE_MI</a>
                    <a className={styles.button} href="#myProjects">PORTAFOLIO</a>
                    <a className={styles.button} href="#myTechnologies">TECNOLOGIAS</a>
                </div>
                <div className={styles.container3}>
                    <div className={styles.subcontainer3_1}>
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