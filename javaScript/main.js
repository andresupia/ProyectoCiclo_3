
// Evento sobre el icono del input email
let emailInput ;
Promise.resolve(emailInput =document.querySelector(".email"))
.then(()=>{
    emailInput.addEventListener("keyup",async function(){
        let modulo = await import("./events.js")
        modulo.eventEmail()
    })
})
.catch(error => console.log(error))



// Evento sobre el icono del input del password

let iconPassword

Promise.resolve( iconPassword = document.querySelector(".bi-eye"))
.then(icon =>{
    icon.addEventListener("click",async function(){
        let modulo  = await import("./events.js")
        modulo.eventPassword()
    })
})
.catch(error => console.log(error))


// evento añadir libro



let añadirLibro;
Promise.resolve( añadirLibro = document.querySelector(".botton-añadir-libro"))
.then(()=>{
    añadirLibro.addEventListener("click",()=>{
        let containerAñadirlibro = document.querySelector(".container-añadir-libro") 
        containerAñadirlibro.classList.toggle("open-container-añadir")


        let modulo="./events.js"
        import(modulo)
        .then(modulo =>{
            modulo.cancelar(containerAñadirlibro)
        })
        .catch(error => console.log(error))
      
        
    })
})




// atrapando la informacion ingresada por el usuario en la opcion añadir libro

let form_añadir = document.getElementById("form-añadir-libro")

form_añadir.onsubmit=(e)=>{
        e.preventDefault()

        let nombre_libro = document.getElementById("nombre-libro")
        let autor_libro = document.getElementById("autor-libro")
        let editorial_libro = document.getElementById("editorial-libro")
        let cantidad_libro = document.getElementById("cantidad-libro")

        let valor_nombre = nombre_libro.value
        let valor_autor_libro = autor_libro.value
        let valor_editorial = editorial_libro.value
        let valor_cantidad = cantidad_libro.value
        
        console.log(`nombre: ${valor_nombre} , autor: ${valor_autor_libro}  editorial: ${valor_editorial} cantidad: ${valor_cantidad}`)
        nombre_libro.value = ""
        autor_libro.value= ""
        editorial_libro.value = ""
        cantidad_libro.value = ""
}     
