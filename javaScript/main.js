// eventos  sobre el input email login
// const emailInput = document.getElementById("email")
let iconEmail = document.querySelector(".bi-envelope")
let emailInput= document.querySelector(".email")






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




// evento en el  icono del input password  en la  vista login

let iconPassword ;

Promise.resolve( iconPassword = document.querySelector(".bi-eye"))
.then(icon =>{
    icon.addEventListener("click",async function(){
        let evento  = await import("./events.js")
        evento.eventPasswordLogin()
    })
})
.catch(error => console.log(error))

