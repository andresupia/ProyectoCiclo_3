// evento  sobre el input email login con callback 
let emailInput =document.querySelector(".email")

emailInput.addEventListener('keyup',()=>{
    let evento = "./events.js"
    import(evento)

    .then(evento=>{
        evento.eventEmail()
    })
    .catch(error=> console.log(error))
})


// evento en el  icono del input password   con asincronismo 

let iconPassword

Promise.resolve( iconPassword = document.querySelector(".bi-eye"))
.then(icon =>{
    icon.addEventListener("click",async function(){
        let evento  = await import("./events.js")
        evento.eventPassword()
    })
})
.catch(error => console.log(error))

