export function eventPasswordLogin(){
    const inputPassword = document.getElementById("password")
    const iconPassword = document.querySelector(".bi-eye")
    
    iconPassword.classList.replace("bi-eye-slash" , "bi-eye")

    if(inputPassword.type == "password"){
        iconPassword.classList.replace("bi-eye" , "bi-eye-slash")
        inputPassword.type= "text"
    }else{
        inputPassword.type= "password"

    }
}