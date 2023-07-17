import Image from "next/image";
import styles from "../styles/index.module.css";
import profilePict from '../public/images/profile_picture.png';
import flecha from '../public/iconos/flecha_abajo.png';

const MyDescription = ({visibility, origin})=>{  
  const {setVisibles, visibles} = visibility;
    const handleVisibility=()=>{
        setVisibles({...visibles, myDescription: !visibles.myDescription})
    }
  
    return(
        <>
            <div className={styles.linea}/>
            <div className={styles.subcontainer3}>
              <h3 className={styles.text_h4}>¿ Quien soy ?</h3>
              <div className={styles.subcontainer3_1}>
                <div className={styles.myPhoto}>
                  <Image
                    className={styles.profilePict}
                    src={profilePict} 
                    alt= "Picture of the author"
                    width={200}
                  />
                </div>
                <div className={styles.myDescription1}>
                  <p className={styles.text_p}>
                    Hola, mi nombre es Augusto Corbalán, soy de Alta Gracia - Córdoba, Argentina.<br/>

                    <br/>Soy Full Stack web Developer, cuento con 800 horas de programación realizadas en el bootcamp 
                    "Soy Henry" tanto en tareas y proyectos individuales como grupales. Estando capacitado para trabajar 
                    con las tecnologías de JavaScript, React.js, Redux.js, Node.js, PostgreSQL, Sequelize.js, HTML, CSS, entre otras. 
                    Tanto de forma individual como en equipo con la tecnología GIT.
                    Posteriormente realicé un upskilling en Henry en donde aprení y puse en práctica tecnología de microservicios, y bases de
                    datos NoSql, utilizando las tecnologías MongoDb, Mongoose, Docker, Docker Compose, Google Cloud.
                    Además realicé una pasantía profesional en Qali un emprendimiento de Perú, en donde tuve la oportunidad
                    de poner en aprender y poner en práctica además de las tecnologías mencionadas anteriormente, Redux Toolkit, Tailwind Css,
                    PrimeReact, Formik.<br/>
                  </p>
                </div>
              </div>
              <div className={styles.question}>
                  <p className={styles.text_p}>
                    <br/>¿Cómo llegué a Full Stack Developer?
                  </p>
                </div>
              {(origin !== "about") ? 
              <div className={ visibles.myDescription ? styles.noVisible : styles.desplegator} onClick={()=>handleVisibility()}>
                <Image
                  src={flecha}
                  alt= "flecha hacia abajo"
                  width={45}
                />
              </div> :
              <></>
              }
              <div>
                <div className={(visibles.myDescription || origin) ? styles.myDescription2Visible : styles.noVisible }>
                  <p className={styles.text_p}>
                    Inicié mi carrera como Desarrollador luego de descubrir en la carrera de Ingeniería la importancia de la programación 
                    para la resolución de los problemas y búsqueda de las soluciones más eficientes para los problemas de la actualidad.<br/>

                    Desde chico tuve un gran interés y habilidad para la resolución de problemas relacionados con tecnología, es por ello 
                    que siempre dediqué mi tiempo y esfuerzo a buscar las herramientas que me permitan encontrar las soluciones más eficientes a estos.<br/>

                    <br/>- ¿Por qué desarrollo WEB?<br/>

                    <br/>Decidí comenzar en desarrollo web ya que considero que es la mejor forma de iniciar en el mundo de la programación y desarrollo de soluciones 
                    por medio de software. 
                    Actualmente sigo estudiando y capacitándome para profundizar cada vez más mis conocimientos en el desarrollo de software web, mejorar mi capacidad 
                    de razonamiento lógico, algoritmia, y conocimiento de nuevas tecnologías. 
                    Buscando de esta forma poder lograr soluciones cada vez mejores y más eficientes a los problemas que se presentan. 
                  </p>
                  {(origin !== "about") ?
                    <div className={ visibles.myDescription ? styles.desplegator: styles.noVisible } onClick={()=>handleVisibility()}>
                        <Image
                          src={flecha}
                          alt= "flecha hacia arriba"
                          width={45}
                          className={styles.iconFlechaArriba}
                        />
                    </div> :
                    <></>
                  }
                </div>
              </div>
            </div>
        </>
    )
}

export default MyDescription;



          