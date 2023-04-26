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
                    
                </div>
                <div className={styles.subContainer2}>
                    <div className={styles.subContainer2_1}>
                        <h1 className={styles.text_h4min}>Datos de contacto:</h1>
                    </div>
                    <div className={styles.subContainer2_2}>
                    <div className={styles.containerLink}>
                            <Image 
                                className={styles.icon}
                                src={gmail}
                                alt='Gmail icon'
                                width={15}
                            />
                            <a className={styles.text_pmin} href="mailto:corbalan.augusto.n@gmail.com">corbalan.augusto.n@gmail.com</a>
                        </div>
                        <div className={styles.containerLink}>
                            <Image 
                                className={styles.icon}
                                src={github}
                                alt='GitHub icon'
                                width={15}
                            />
                            <a className={styles.text_pmin} href="https://github.com/AugustoCorbalan"> https://github.com/AugustoCorbalan</a>
                        </div> 
                        <div className={styles.containerLink}>
                            <Image 
                                className={styles.icon}
                                src={linkedin}
                                alt='Linkedin icon'
                                width={15}
                            />
                            <a className={styles.text_pmin} href="https://www.linkedin.com/in/augusto-corbalan-a6b857256">www.linkedin.com/in/augusto-corbalan</a>
                        </div>                             
                    </div>
                </div>
            </div>
        </>
    )
}

export default Foot_page;

// Datos de contacto: mail, telefono, github, linkedin
// Boton de contacto
// ¿Necesitas un desarrollador web? Construyamos algo!