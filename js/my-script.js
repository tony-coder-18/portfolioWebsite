function leerEvaluar(){
    let nombre = document.getElementById('name-input').value;
    let correo = document.getElementById('email-Input').value;
    let mensaje = document.getElementById('mensaje-input').value;


    if (isNaN(nombre)
    && isNaN(correo) &&
    isNaN(mensaje)){
        alert('Mensaje enviado')
    }else{
        alert('Error')
    }

}


let botón = document.querySelector(".btnBtnEnviar");
botón.addEventListener('click', leerEvaluar);

