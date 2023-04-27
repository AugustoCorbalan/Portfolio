import styles from "../styles/myTechnologies.module.css";
import stylesText from "../styles/index.module.css";

const MyTechnologies = ()=>{
    
    const myTechnologies=["JavaScript", "React", "Redux","NextJs", "NodeJS", "Express", "Sequelize", "PostgreSQL", "Html", "Css"]

    return(
        <>
            <div className={styles.container}>
                <h3 className={stylesText.text_h3}>Tecnologías</h3>
                <div className={styles.MyTechnologies}>
                    {
                        myTechnologies.map((name)=>{
                            return(
                                <div className={styles.technology}>
                                    <div className={styles[name]}/>
                                    <div className={styles.nameTechnology}>
                                        <h4 className={stylesText.text_h4min}>{name}</h4>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </>
    )
}

export default MyTechnologies;