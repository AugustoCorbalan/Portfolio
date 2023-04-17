import React, { useState } from "react";
import styles from "../../styles/form.module.css";
import ButtonStyle from "./buttonStyle";
import { Content } from "next/font/google";

const Form = ({status, visibility})=>{

    const {setVisibles, visibles} = visibility;
    const [values, setValues] = useState({
        name: "",
        email:"",
        asunto:"",
        mensaje:""
    })

    const handlerOnChange=(id, newValue)=>{
        if(id==="inputName"){
            setValues({...values, name: newValue})
        } 
        else if(id==="inputEmail"){
            setValues({...values, email: newValue})
        }
        else if(id==="inputAsunto"){
            setValues({...values, asunto: newValue})
        }
        else if(id==="inputMensaje"){
            setValues({...values, mensaje: newValue})
        }
    }

    const handlerClick=(event)=>{
        const formulario = document.getElementById("form");
        if(!formulario.contains(event.target)){
            setVisibles({...visibles, form: false})
        }
    }

    const handlerSubmit=(event)=>{
        event.preventDefault();
        
    }
    return(
        <>
            <div className={status? styles.containerOn : styles.containerOff} onClick={(event)=>handlerClick(event)}>
                <div className={styles.subContainer}>
                    <form id="form" onSubmit={handlerSubmit}>
                        <div className={styles.subContainer1}>
                            <input 
                                key= "inputName" 
                                id="inputName" 
                                type="text" 
                                placeholder="Nombre" 
                                className={styles.inputName} 
                                onChange={({target})=>handlerOnChange(target.id, target.value)} 
                                value={values.name}
                            />
                            <input 
                                key= "inputEmail" 
                                id= "inputEmail" 
                                type="text" 
                                placeholder="Email" 
                                className={styles.inputEmail} 
                                onChange={({target})=>handlerOnChange(target.id, target.value)}
                                value={values.email}
                            />
                            <input 
                                key= "inputAsunto" 
                                id= "inputAsunto" 
                                type="text" 
                                placeholder="Asunto" 
                                className={styles.inputAsunto} 
                                onChange={({target})=>handlerOnChange(target.id, target.value)}
                                value={values.asunto}
                            />
                            <textarea 
                                key= "inputMensaje" 
                                id= "inputMensaje" 
                                type="" 
                                placeholder="Mensaje" 
                                className={styles.inputMessage} 
                                onChange={({target})=>handlerOnChange(target.id, target.value)}
                                value={values.mensaje}
                            />
                        </div>
                        <div className={styles.subContainer2}>
                            <ButtonStyle content={"_Enviar_"}/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form

