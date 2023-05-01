import Image from "next/image";
import styles from "../styles/foot_page.module.css";
import github from "../public/iconos/github.png";
import gmail from "../public/iconos/gmail.png";
import linkedin from "../public/iconos/linkedin.png";

const Foot_page=()=>{
    return(
        <>
            <div className={styles.container1}>
                <div className={styles.subContainer1}>
                    <div className={styles.subContainer1_1}>
                        <h1 className={styles.text_h4min}>Datos de contacto:</h1>
                    </div>
                    <div className={styles.subContainer1_2}>
                    <div className={styles.containerLink}>
                        <a className={styles.text_pmin} href="https://github.com/AugustoCorbalan">
                            <div className={styles.github}/>
                        </a>
                        </div> 
                        <div className={styles.containerLink}>
                            <a className={styles.text_pmin} href="mailto:corbalan.augusto.n@gmail.com">
                                <div className={styles.gmail}/>
                            </a>
                        </div>
                        <div className={styles.containerLink}>
                            <a className={styles.text_pmin} href="https://www.linkedin.com/in/augusto-corbalan-a6b857256">
                                <div className={styles.ln}/>
                            </a>
                        </div>                             
                    </div>
                </div>
            </div>
        </>
    )
}

export default Foot_page;
