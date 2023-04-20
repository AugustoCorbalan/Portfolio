import React, { useState } from "react";
import { validarName, validarMail, validarAsunto, validarMessage } from "./regularExpresion.js"
import styles from "../styles/form.module.css";
import ButtonStyle from "./buttonStyle.js";
import axios from "axios";

const Form = ({status, visibility})=>{

    const {setVisibles, visibles} = visibility;
    const [values, setValues] = useState({
        name: "",
        email:"",
        asunto:"",
        mensaje:""
    })
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        asunto: "",
        mensaje: ""
    })

    const handlerOnChange=(id, newValue)=>{
        if(id==="inputName"){
            setValues({...values, name: newValue})
            const error = validarName(newValue);
            setErrors({...errors, name: error});
        } 
        else if(id==="inputEmail"){
            setValues({...values, email: newValue})
            const error = validarMail(newValue);
            setErrors({...errors, email: error});
        }
        else if(id==="inputAsunto"){
            setValues({...values, asunto: newValue})
            const error = validarAsunto(newValue);
            setErrors({...errors, asunto: error});
        }
        else if(id==="inputMensaje"){
            setValues({...values, mensaje: newValue})
            const error = validarMessage(newValue);
            setErrors({...errors, mensaje: error});
        }
    }

    const handlerClick=(event)=>{
        const formulario = document.getElementById("form");
        if(!formulario.contains(event.target)){
            setVisibles({...visibles, form: false})
        }
    }

    const handlerSubmit= async (event)=>{
        event.preventDefault();
        const response = await axios.post("https://portfolio-production-07fa.up.railway.app/send", values)
        console.log(response.data)
    }
    return(
        <>
            <div className={status? styles.containerOn : styles.containerOff} onClick={(event)=>handlerClick(event)}>
                <div className={styles.subContainer}>
                    <form id="form" onSubmit={handlerSubmit}>
                        <div className={styles.subContainer1}>
                            <div className={styles.subContainer1_1}>
                                <input 
                                    key= "inputName" 
                                    id="inputName" 
                                    type="text" 
                                    placeholder="Nombre" 
                                    className={styles.inputName} 
                                    onChange={({target})=>handlerOnChange(target.id, target.value)} 
                                    value={values.name}
                                />
                                <div className={errors.name? styles.errorOn : styles.errorOff}>
                                    <p>{errors.name}</p>
                                </div>
                            </div>
                            <div className={styles.subContainer1_1}>
                                <input 
                                    key= "inputEmail" 
                                    id= "inputEmail" 
                                    type="text" 
                                    placeholder="Email" 
                                    className={styles.inputEmail} 
                                    onChange={({target})=>handlerOnChange(target.id, target.value)}
                                    value={values.email}
                                />
                                <div className={errors.email? styles.errorOn : styles.errorOff}>
                                    <p>{errors.email}</p>
                                </div>
                            </div>
                            <div className={styles.subContainer1_2}>
                                <input 
                                    key= "inputAsunto" 
                                    id= "inputAsunto" 
                                    type="text" 
                                    placeholder="Asunto" 
                                    className={styles.inputAsunto} 
                                    onChange={({target})=>handlerOnChange(target.id, target.value)}
                                    value={values.asunto}
                                />
                                <div className={errors.asunto? styles.errorOn : styles.errorOff}>
                                    <p>{errors.asunto}</p>
                                </div>
                            </div>
                            <div className={styles.subContainer1_3}>
                                <textarea 
                                    key= "inputMensaje" 
                                    id= "inputMensaje" 
                                    type="" 
                                    placeholder="Mensaje" 
                                    className={styles.inputMessage} 
                                    onChange={({target})=>handlerOnChange(target.id, target.value)}
                                    value={values.mensaje}
                                />
                                <div className={errors.mensaje? styles.errorOn : styles.errorOff}>
                                    <p>{errors.mensaje}</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className={styles.subContainer1_4}>
                            <ButtonStyle content={"_Enviar_"}/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form

