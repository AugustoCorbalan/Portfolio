import React from "react";
import ParticlesBackground from "../particles/particlesBackground";
import styles from "../../styles/index.module.css"

const FrontPage=()=>{
    return(
        <div className={styles.container1}>
          <div className={styles.subcontainer1}>
            <ParticlesBackground className={styles.particles}/>
            <div className={styles.presentation}>
              <div className={styles.message}>
                <h1 className={styles.text_h1}>Corbalan Augusto N.</h1>
                <h3 className={styles.text_h3}>___ Full Stack Developer ___</h3>
              </div>
            </div>
          </div>
        </div>
    )
}

export default FrontPage