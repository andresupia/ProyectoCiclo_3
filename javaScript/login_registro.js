// Login :
// evento  sobre el input email login 
let emailInput =document.getElementById('email')
let iconEmail = document.querySelector(".bi-envelope")

emailInput.addEventListener('keyup',()=>{

    let pattern =/^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 

    if(emailInput.value===""){
         iconEmail.classList.replace("bi-check2-circle" , "bi-envelope")
        return  iconEmail.style.color= "rgba(0,0,0,0.6)" 
    }
    if(emailInput.value.match(pattern)){
        iconEmail.classList.replace("bi-envelope" , "bi-check2-circle")
        return iconEmail.style.color="rgba(0,255,0,0.8)"
    }    

    iconEmail.classList.replace("bi-check2-circle" , "bi-envelope")
    iconEmail.style.color="rgba(255,0,0,0.4)"
})


// Registro : 

//  evento en el  icono del input password  

let iconPassword= document.querySelector(".bi-eye")

let inputPassword = document.getElementById("password")

iconPassword.addEventListener("click", ()=>{
    iconPassword.classList.replace("bi-eye-slash" , "bi-eye")

    if(inputPassword.type == "password"){
        iconPassword.classList.replace("bi-eye" , "bi-eye-slash")
        inputPassword.type= "text"
    }else{
        inputPassword.type= "password"

    }
})


function alertas(claseDiv , textoP){
    let alert = document.getElementById('container-alert')
    // alert.classList.remove('close')
    let div = document.createElement('div')
    div.classList.add(claseDiv)

    let p = document.createElement('p')
    let pContenido = document.createTextNode(textoP)
    p.appendChild(pContenido)

    let button  = document.createElement('button')
    button.classList.add('btn-close', )

    div.appendChild(p)
    div.appendChild(button)

    alert.appendChild(div)
    

    // button.addEventListener('click',()=>{
    //     alert.classList.add('close')
    // })
}


// peticion de creacion de usuario  a la api 

const API = 'http://localhost:8080/usuario'



async function obtenerUsuario(){
    let users = await fetch(API)
    let data  = await users.json()
    console.log(data)
}


async function eliminarUsuario(){

}

async function crearUnUsuario(alias , nombres , apellidos, cedula , direccion, telefono , correo, contraseña){
   let crearUsuario = await fetch(API,{
        method:'POST',
        mode:'cors',
        credentials:'same-origin',
        headers:{
            'Content-Type' : 'application/json; charset=utf-8'
        },
        body:JSON.stringify({
            'idcedula_usr':cedula,
            'alias_usr':alias,
            'contrasena_usr': contraseña,
            'correo_usr': correo,
            'nombres_usr': nombres,
            'apellidos_usr': apellidos,
            'direccion_usr': direccion,
            'telefono_usr': telefono,
            'tipoUsr' : '1'
        })
                
    }) 
    let data =crearUsuario.json()

    if(crearUsuario.status != 200) {
        alertas('alert-denied', 'Lo sentimos hubo un error  intentelo ma tarde' + crearUsuario.status )
    }else{
        alertas('alert-accepted','El usuario se ha creado correctamente')
    }
}

try {
    
    const formulario_registro = document.getElementById('singUp-form')
    
    formulario_registro.onsubmit = (e)=>{
        e.preventDefault()
        
        let btn_registro = document.getElementById('btn-registro')
    
        let alias_usr = document.getElementById('usuario')
        let nombres_usr = document.getElementById('nombre')
        let apellidos_usr = document.getElementById('apellidos')
        let idcedula_usr =  document.getElementById('cedula')
        let direccion_usr =  document.getElementById('direccion')
        let telefono_usr = document.getElementById('telefono')
       
        btn_registro.addEventListener('click',crearUnUsuario(alias_usr.value , nombres_usr.value , apellidos_usr.value , idcedula_usr.value , direccion_usr.value , telefono_usr.value , emailInput.value, inputPassword.value))
    
        alias_usr.value = ""
        nombres_usr.value = ""
        apellidos_usr.value= ""
        idcedula_usr.value = ""
        direccion_usr.value = ""
        telefono_usr.value = ""
        emailInput.value = ""
        inputPassword.value = ""
    }
} catch (error) {
    console.log(error)
}



