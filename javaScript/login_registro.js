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


// alertas al usuario

function alertas(claseDiv , textoP){
    let sectionAlert = document.getElementById('container-alert')
    sectionAlert.classList.add('open')

    let div_informacion = document.getElementById('div-container-information')    
    div_informacion.classList.add(claseDiv)

    let p_informacion = document.getElementById('pInformacion-alert')
    p_informacion.innerHTML = textoP
    
    let button_close = document.getElementById('btn_close-alert')
    button_close.addEventListener('click',()=>{
       sectionAlert.classList.remove('open')
       div_informacion.classList.remove(claseDiv)
    })
}




// peticion de creacion de usuario  a la api 

const API = 'http://localhost:8080/usuario'

async function obtenerUsuario(urlApi){
    let users = await fetch(urlApi)
    let data  = await users.json()
    return data
}


async function crearUnUsuario(form){

        let usuarios = obtenerUsuario(API)
        usuarios.then(async usrs=> {
            let arrayUsuario = Array.from(usrs)
            let cedula_encontrado = arrayUsuario.find(e=>  e.idcedula_usr ==form.get('cedula'))
            let correo_encontrado = arrayUsuario.find(e=> e.correo_usr == form.get('correo'))
            let contraseña_encontrada = arrayUsuario.find(e=> e.contrasena_usr == form.get('password'))
                
            
            if(cedula_encontrado){
                
                alertas('alert-denied','Lo sentimos la cédula ingresada ya existe, Esto se debe a que ya tiene una cuenta registrada bajo esta cédula , Por favor verifique si esta ingresando correctamente su  cedula o intente hacer Login')
                
            }
            else if(correo_encontrado){
                alertas('alert-denied','Lo sentimos el correo ingresado ya existe, Esto se debe a que ya tiene una cuenta registrada bajo este correo, Por favor verifique si esta ingresando correctamente su correo  o intente hacer Login' )
            }
            else if(contraseña_encontrada){
                alertas('alert-denied','Lo sentimos la contraseña ingresada ya se encuentra en uso , Intente con otra contraseña')
            }
            else{
            
                let crearUsuario = await fetch(API,{
                    method:'POST',
                    mode:'cors',
                    credentials:'same-origin',
                    headers:{
                        'Content-Type' : 'application/json;'
                    },
                    body:JSON.stringify({
                        'idcedula_usr':form.get('cedula'),
                        'alias_usr':form.get('usuario'),
                        'contrasena_usr': form.get('password'),
                        'correo_usr': form.get('correo'),
                        'nombres_usr': form.get('nombre'),
                        'apellidos_usr': form.get('apellidos'),
                        'direccion_usr': form.get('direccion'),
                        'telefono_usr': form.get('telefono'),
                        'tipoUsr' : form.get('tipoUsr')
                    })
                            
                }) 
            
                if(crearUsuario.status != 200) {
                    alertas('alert-denied', 'Lo sentimos , A ocurrido un error,  Intentelo mas tarde' )
                    console.log(`Error de conexion , estatus de la peticción : ${crearUsuario.status}`)
                }else{
                    alertas('alert-accepted','El usuario se ha creado correctamente')
                    let btn_registro = document.getElementById('btn-registro')

                    btn_registro.onclick = setTimeout(function(){
                        location.href="../cliente/main.html"
                    },2000)
                }
            }
           
    })

}



// previniendo el evento onsubmit del formulario registro y creando el usuario 
try {
    const formulario_registro = document.getElementById('singUp-form')
    formulario_registro.onsubmit = (e)=>{
        e.preventDefault()
        
        let form = new FormData(formulario_registro)
        crearUnUsuario(form)
        
    }
} catch (error) {
    console.log(error)
}



// previniendo el evento onsubmit del formulario login  y haciendo login 

try {
    const formulario_login = document.getElementById('form-login')
    const btn_login = document.getElementById('login')
    formulario_login.onsubmit=(e)=>{
        
        e.preventDefault()
        
        let usuarios = obtenerUsuario(API)
        usuarios.then(usrs=> {
            let arrayUsuarios = Array.from(usrs)
        
            let usr = arrayUsuarios.find(e=> e.correo_usr == emailInput.value) ?? false
           

            if(usr.correo_usr == emailInput.value && usr.contrasena_usr == inputPassword.value){
                alertas('alert-accepted','Bienvenido ' + usr.alias_usr)

                btn_login.onclick = setTimeout(function(){
                    location.href="../cliente/main.html"
                },2000)
                        
            }else{
                alertas('alert-denied', 'El email o la contraseña no ha sido encontrado , Por favor revise que la información añadida esté escrita correctamente , Caso contrario realize el formulario de registro')
            }

        })

    }   
} catch (error) {
    console.log(error)
}