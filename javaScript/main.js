//  evento cancelar
function cancelar(cancel){
    
    let bottonCancelar = document.querySelector(".botton-cancelar")
    bottonCancelar.addEventListener("click",()=>{
        cancel.classList.remove("open-container-añadir")
    })
}


// evento click añadir
let añadirLibro =  document.querySelector(".botton-añadir-libro")
Promise.resolve( añadirLibro = document.querySelector(".botton-añadir-libro"))

añadirLibro.addEventListener("click",()=>{
    let containerAñadirlibro = document.querySelector(".container-añadir-libro") 
    containerAñadirlibro.classList.toggle("open-container-añadir")

    cancelar(containerAñadirlibro)
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
        
        let containerAñadirlibro = document.querySelector(".container-añadir-libro") 
        containerAñadirlibro.classList.remove("open-container-añadir")
}     
