import Head from 'next/head';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import styles from '../styles/index.module.css';
import NavBar from '../subComponents/navBar';
import Form from '../subComponents/form';
import About from '@/subComponents/about';
import FrontPage from '../subComponents/frontPage';
import MyProjects from '@/subComponents/myProjects';
import MyTechnologies from '@/subComponents/myTechnologies';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const [visibles, setVisibles] = useState({
    myDescription: false,
    form: false
  });

  return (
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
        <Form status={visibles.form} visibility={{setVisibles, visibles}}/>
        <FrontPage/>
        <div className={visibles.form? styles.containerOff : styles.containerOn}>
          <About visibility={{setVisibles, visibles}}/>
          <div className={styles.linea}/>
          <MyProjects/>
          <div className={styles.linea}/>
          <MyTechnologies/>
          <div className={styles.linea}/>
        </div>
      </main>
    </>
  )
}
