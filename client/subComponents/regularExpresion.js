
const validarName=(value)=>{
    const contentSymbol = /^[A-Za-z\\s-]+$/
    const valueSplit= value.split(" ");
    console.log("valueSplit: ", valueSplit);
    for(let i=0; i<valueSplit.length; i++){
        if(!contentSymbol.test(valueSplit[i]) && valueSplit[i] !== ""){
            return "Ingresó un símbolo";
        }
    }
    if(valueSplit.length<2 || valueSplit[1] == ""){
        return "Debe ingresar nombre y apellido";
    }
    else if( valueSplit.length>2 && valueSplit[valueSplit.length-1] == ""){
        return "Ingresó un espacio al final"
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


