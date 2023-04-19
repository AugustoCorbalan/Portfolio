
const validarName=(value)=>{
    const contentSymbol = /^[A-Za-z\\s-]+$/
    const contentNombreyApellido = /\\b[A-Za-z]+\\b\\s+\\b[A-Za-z]+\\b/
    const valueSplit= value.split(" ");
    
    if(!contentSymbol.test(value)){
        return "Ingresó un símbolo";
    }
    else if(contentNombreyApellido.test(value)){
        return "Debe ingresar nombre y apellido";
    }
    return "";
}
const validarMail=(value)=>{
    const validateMail = /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return(
        validateMail.test(value) ? "" : "El mail no es valido" 
    )
}
const validarAsunto=(value)=>{
    if(value.length<3){
        return "Asunto muy corto"
    }
    else if(value.length>49){
        return "Asunto muy largo"
    }
    else return ""
}
const validarMessage=(value)=>{
    if(value.length<3){
        return "Mensaje muy corto"
    }
    else if(value.length>1000){
        return "Mensaje muy largo"
    }
    else return ""
}

module.exports = { validarName, validarMail, validarAsunto, validarMessage }


