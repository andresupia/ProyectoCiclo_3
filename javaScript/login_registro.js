// evento  sobre el input email login con callback 
let emailInput =document.querySelector(".email")
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


// evento en el  icono del input password   con asincronismo 

let iconPassword= document.querySelector(".bi-eye")

iconPassword.addEventListener("click", ()=>{
    let inputPassword = document.getElementById("password")
    
    iconPassword.classList.replace("bi-eye-slash" , "bi-eye")

    if(inputPassword.type == "password"){
        iconPassword.classList.replace("bi-eye" , "bi-eye-slash")
        inputPassword.type= "text"
    }else{
        inputPassword.type= "password"

    }
})
