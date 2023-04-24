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
                    <Link className={styles.button} href="/">PRINCIPAL</Link>   
                    <Link className={styles.button} href="/about">SOBRE_MI</Link>
                    <Link className={styles.button} href="/portfolio">PORTAFOLIO</Link>
                    <Link className={styles.button} href="technologies">TECNOLOGIAS</Link>
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