import ButtonStyle from "./buttonStyle";
import styles from "../styles/index.module.css";
import CardsProject from "./cardProject";

const MyProjects = ()=>{
    return(
        <>
            <div className={styles.subcontainer4}>
                <h3 className={styles.text_h3}>Mis proyectos</h3>
                <p className={styles.text_p}> 
                Te invito a conocer mis proyectos dando click a la "card", y a que luego me dejes tu feedback para seguir mejorando !!
                </p>
                <div className={styles.subcontainer4_1}>
                    <CardsProject/>
                </div>
            </div>
        </>
    )
}

export default MyProjects;
