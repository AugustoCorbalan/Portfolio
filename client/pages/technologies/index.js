import { useState } from "react";
import Head from "next/head";
import styles from "../../styles/index.module.css"
import MyTechnologies from "@/subComponents/myTechnologies";
import NavBar from "@/subComponents/navBar";
const Technologies = ()=>{

    const [visibles, setVisibles] = useState({
        myDescription: false,
        form: false
      }); 

    return(
        <>  
            <Head>
                <title>Corbalan Augusto</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap"/>
            </Head>
            <main className={styles.main}>
                <NavBar visibility={{setVisibles, visibles}}/>
                <MyTechnologies/>
            </main>
        </>
    )
}

export default Technologies;