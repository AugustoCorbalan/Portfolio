import styles from "../styles/cardsProject.module.css";
import ButtonStyle from "./buttonStyle";

const CardsProject = ()=>{
    return(
        <>
            <div className={styles.container}>
                <div className={styles.subcontainer4_1}>
                    <div className={styles.containerProject} >
                        <a href='https://pi-henry-2.vercel.app'>
                            <div className={styles.containerProject1}>
                                <div className={styles.project}>
                                    <div className={styles.nameProject}>
                                        <h4 className={styles.text_h4}>PI-FOOD</h4>
                                        <p className={styles.text_pmin}>  by AUGUSTO CORBALAN</p>
                                    </div>
                                    <div className={styles.descriptionProject}>
                                        <p className={styles.text_p}>Descripción:</p>
                                        <p className={styles.text_pmin}>
                                            "RecipesHenry" es una aplicación en la cual se pueden ver distintas recetas de comida 
                                            junto con información relevante de las mismas utilizando la api externa "spoonacular" 
                                            y a partir de ella poder, entre otras cosas: Buscar, Filtrar y Ordenar resultados y Crear nuevas recetas
                                        </p>
                                        <p className={styles.text_p}>Tecnologías:</p>
                                        <p className={styles.text_pmin}>
                                            React | Redux | nodeJs | Sequelize | PostgreSQL
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div className={styles.verticalLine}></div>
                        <div className={styles.projectDetails}>
                            <p className={styles.text_pmin}>Nombre: PI-FOOD </p><br/>
                            <p className={styles.text_pmin}>Modalidad: Individual</p><br/>
                            <p className={styles.text_pmin}>Tecnologías: React | Redux | nodeJs | Sequelize | PostgreSQL </p>
                            <div className={styles.button}>
                                <div><ButtonStyle content={"_Feedback_"}/></div>
                            </div>                 
                        </div>
                    </div>
                </div> 
                <div className={styles.subcontainer4_1}>
                <div className={styles.containerProject} >
                    <a href='https://front-end-six-black.vercel.app'>
                        <div className={styles.containerProject2}>
                        <div className={styles.project}>
                            <div className={styles.descriptionProject}>
                            <p className={styles.text_p}>Descripción:</p>
                            <p className={styles.text_pmin}>
                                Nace con la idea de crear un espacio amigable en el que los desarrolladores puedan distenderse,
                                compartir ideas y proyectos propios.
                                Resolver dudas, buscar compañeros para trabajar en equipo y buscar trabajo.
                                Todo dentro de un mismo espacio
                            </p>
                            <p className={styles.text_p}>Tecnologías:</p>
                            <p className={styles.text_pmin}>
                                React | Redux | nodeJs | Sequelize | PostgreSQL | MaterialUI | Auth0              
                            </p>
                            </div>
                        </div>
                        </div>
                    </a>
                    <div className={styles.verticalLine}></div>
                    <div className={styles.projectDetails}>
                        <p className={styles.text_pmin}>Nombre: codeCuak </p><br/>
                        <p className={styles.text_pmin}>Modalidad: Grupal (8 programadores)</p><br/>
                        <p className={styles.text_pmin}>Tecnologías: React | Redux | nodeJs | Sequelize | PostgreSQL | MaterialUI | Auth0 </p>
                        <div className={styles.button}>
                            <div><ButtonStyle content={"_Feedback_"}/></div>
                        </div>
                    </div>
                </div>
                </div>    
            </div>
        </>
    )
}

export default CardsProject;
               