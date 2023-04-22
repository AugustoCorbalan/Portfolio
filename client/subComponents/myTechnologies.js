import Image from 'next/image';
import { useState } from 'react';
import reactLogo from '../public/images/Logotipos/react.png';
import reactColorLogo from '../public/images/Logotipos/reactColor.png';
import jsLogo from '../public/images/Logotipos/js.png';
import jsColorLogo from '../public/images/Logotipos/jsColor.png';
import cssLogo from '../public/images/Logotipos/css.png';
import cssColorLogo from '../public/images/Logotipos/cssColor.png';
import html5Logo from '../public/images/Logotipos/html5.png';
import html5ColorLogo from '../public/images/Logotipos/html5Color.png';
import postgreSqlLogo from '../public/images/Logotipos/postgreSql.png';
import postgreSqlColorLogo from '../public/images/Logotipos/postgreSqlColor.png';
import nodeJsLogo from '../public/images/Logotipos/nodeJs.png';
import nodeJsColorLogo from '../public/images/Logotipos/nodeJsColor.png';
import styles from "../styles/index.module.css";

const MyTechnologies = ()=>{
    const [over, setOver] = useState({
        overJs: false,
        overReact: false,
        overCss: false,
        overHtml: false,
        overPostgreSql: false,
        overNodeJs: false
      })
    return(
        <>
            <div className={styles.subcontainer2}>
                <h3 className={styles.text_h3}>Tecnologías</h3>
                <div className={styles.logotypes}>
                <Image
                    className={styles.JavaScript}
                    src={over.overJs? jsColorLogo : jsLogo}
                    alt='JS Logo'
                    width={120}
                    onMouseOver={()=>setOver({...over, overJs: true})}
                    onMouseOut={()=>setOver({...over, overJs: false})}
                />
                <Image
                    className={styles.React}
                    src={over.overReact? reactColorLogo : reactLogo}
                    alt='React Logo'
                    width={150}
                    onMouseOver={()=>setOver({...over, overReact: true})}
                    onMouseOut={()=>setOver({...over, overReact: false})}
                />
                <Image
                    className={styles.Css}
                    src={over.overCss? cssColorLogo : cssLogo}
                    alt='Css Logo'
                    width={120}
                    onMouseOver={()=>setOver({...over, overCss: true})}
                    onMouseOut={()=>setOver({...over, overCss: false})}
                />
                <Image
                    className={styles.html5}
                    src={over.overHtml? html5ColorLogo : html5Logo}
                    alt='Html5 Logo'
                    width={120}
                    onMouseOver={()=>setOver({...over, overHtml: true})}
                    onMouseOut={()=>setOver({...over, overHtml: false})}
                />
                <Image
                    className={styles.postgreSql}
                    src={over.overPostgreSql? postgreSqlColorLogo : postgreSqlLogo}
                    alt='postgreSql Logo'
                    width={120}
                    onMouseOver={()=>setOver({...over, overPostgreSql: true})}
                    onMouseOut={()=>setOver({...over, overPostgreSql: false})}
                />
                <Image
                    className={styles.nodeJs}
                    src={over.overNodeJs? nodeJsColorLogo : nodeJsLogo}
                    alt='nodeJs Logo'
                    width={120}
                    onMouseOver={()=>setOver({...over, overNodeJs: true})}
                    onMouseOut={()=>setOver({...over, overNodeJs: false})}
                />
                </div>
            </div>
        </>
    )
}

export default MyTechnologies;