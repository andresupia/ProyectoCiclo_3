// evento sobre el icono del input email
export function eventEmail(){

    let iconEmail = document.querySelector(".bi-envelope")
    emailInput.addEventListener("keyup",()=>{
        let pattern =/^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
        if(emailInput.value===""){
            return  iconEmail.style.color= "rgba(0,0,0,0.6)" 
        }
        if(emailInput.value.match(pattern)){
            iconEmail.classList.replace("bi-envelope" , "bi-check2-circle")
            return iconEmail.style.color="rgba(0,255,0,0.8)"
        }    
    
        iconEmail.classList.replace("bi-check2-circle" , "bi-envelope")
        iconEmail.style.color="rgba(255,0,0,0.4)"
    })
}


// evento sobre el icono del input password
export function eventPassword(){
    const inputPassword = document.getElementById("password")
    
    iconPassword.classList.replace("bi-eye-slash" , "bi-eye")

    if(inputPassword.type == "password"){
        iconPassword.classList.replace("bi-eye" , "bi-eye-slash")
        inputPassword.type= "text"
    }else{
        inputPassword.type= "password"

    }
}



// evento cancelar
 export function cancelar(cancel){
    
    let bottonCancelar = document.querySelector(".botton-cancelar")
    bottonCancelar.addEventListener("click",()=>{
        cancel.classList.remove("open-container-añadir")
    })
}


// clase para la creacion de  libros 

class libro{
    #nombre;
    #autor
    #editorial
    #cantidad
    constructor(nombre , autor, editorial , cantidad){
        this.#nombre = nombre
        this.#autor = autor
        this.#editorial = editorial
        this.#cantidad = cantidad
    }

    get nombre(){
        return this.#nombre
    }

    set nombre(newNombre){
        this.#nombre = newNombre
    }

    get autor(){
        return this.#autor
    }

    set autor(newAutor){
        this.#autor = newAutor
    }

    get editorial(){
        return this.#editorial
    }

    set editorial(newEditorial){
        this.#editorial = newEditorial
    }

    get cantidad(){
        return this.#cantidad
    }

    set cantidad(newCantidad){
        this.#cantidad = newCantidad
    }
}