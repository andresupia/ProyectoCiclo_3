// clase libro
class libro{
    #nombre;
    #autor
    #editorial
    #cantidad
    #categoria
    constructor(nombre , autor, editorial , categoria,cantidad){
        this.#nombre = nombre
        this.#autor = autor
        this.#editorial = editorial
        this.#cantidad = cantidad
        this.#categoria = categoria
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


    get categoria(){
        return this.#categoria
    }

    set categoria(newCategoria){
        this.#categoria = newCategoria
    }


    get cantidad(){
        return this.#cantidad
    }

    set cantidad(newCantidad){
        this.#cantidad = newCantidad
    }
}




//  evento cancelar
function cancelar(varible , clase){
    
    let bottonCancelar = document.querySelectorAll(".botton-cancelar")

    let array = [...bottonCancelar]
    
    array.forEach(Element=>{
        Element.addEventListener("click",()=>{
            varible.classList.remove(clase)
        })
    })
}


// evento click añadir
let añadirLibro =  document.querySelector(".botton-añadir-libro")
Promise.resolve( añadirLibro = document.querySelector(".botton-añadir-libro"))

añadirLibro.addEventListener("click",()=>{
    let containerAñadirlibro = document.querySelector(".container-añadir-libro") 
    containerAñadirlibro.classList.toggle("open-container-añadir")

    cancelar(containerAñadirlibro,"open-container-añadir")
})



// atrapando la informacion ingresada por el usuario en la opcion añadir libro

let form_añadir = document.getElementById("form-añadir-libro")
const lista_libros = []

let contenedor_libros  = document.getElementById("container-libros")

form_añadir.onsubmit=(e)=>{
        e.preventDefault()

        let nombre_libro = document.getElementById("nombre-libro")
        let autor_libro = document.getElementById("autor-libro")
        let editorial_libro = document.getElementById("editorial-libro")
        let cantidad_libro = document.getElementById("cantidad-libro")
        let categoria_libro = document.getElementById("categoria-libro")


        let valor_nombre = nombre_libro.value
        let valor_autor_libro = autor_libro.value
        let valor_editorial = editorial_libro.value
        let valor_cantidad = cantidad_libro.value
        let valor_categoria = categoria_libro.value

        
        let newLibro = new libro(valor_nombre , valor_autor_libro , valor_editorial , valor_categoria , valor_cantidad)
        lista_libros.push(newLibro)
        
        console.log(newLibro)
    
        
        // contenedor padre  

        // etiqueta contenedora de la informacion capturada 
        let container_card = document.createElement("article")
        container_card.classList.add('card', 'border-dark')
        
        // etiqueta  subcontenedora
        let div_card = document.createElement("div")
        div_card.classList.add("card-body")

        // Etiqueta h4 para el nombre del libro
        let h4_title = document.createElement("h4")
        h4_title.classList.add('card-title' , 'mb-3')
        h4_title.textContent = newLibro.nombre
        
        // etiqueta h5 para el nomnre del autor
        let h5_subtitle = document.createElement("h5")
        h5_subtitle.classList.add('card-subtitle' , 'text-muted', 'border-bottom' , 'mb-3' ,'pb-2')
        h5_subtitle.textContent = newLibro.autor
        
        // etiquetas span y p para almacenar y mostrar  la editorial
        let spanEditorial  = document.createElement("span")
        spanEditorial.classList.add("text-dark")
        spanEditorial.textContent = newLibro.editorial

        let spanEditorialInfo  = document.createElement("span")
        spanEditorialInfo.textContent = "Editorial : "
        
        let p_editorial = document.createElement("P")
        p_editorial.classList.add('card-text', 'text-muted')
        p_editorial.appendChild(spanEditorialInfo)
        p_editorial.appendChild(spanEditorial)

        // etiquetas span y p para almacenar y mostrar  la categoria

        let spanCategoria = document.createElement("span")
        spanCategoria.classList.add("text-dark")
        spanCategoria.textContent = newLibro.categoria

        let spanCategoriaInfo  = document.createElement("span")
        spanCategoriaInfo.textContent= "Categoria : "

        
        let pCategoria = document.createElement("p")
        pCategoria.classList.add('card-text', 'text-muted')
        pCategoria.appendChild(spanCategoriaInfo)
        pCategoria.appendChild(spanCategoria)

        // etiquetas span y p para almacenar y mostrar  la cantidad

        let spanCantidad = document.createElement("span")
        spanCantidad.classList.add("text-dark")
        spanCantidad.textContent = newLibro.cantidad

        let  spanCantidadInfo = document.createElement("span")
        spanCantidadInfo.textContent = "Cantidad : "
        
        let pCantidad = document.createElement("p")
        pCantidad.classList.add('card-text', 'text-muted')
        pCantidad.appendChild(spanCantidadInfo)
        pCantidad.appendChild(spanCantidad)
        
        // botones editar e iliminar :

        let botonEditar = document.createElement("button")
        botonEditar.classList.add('btn', 'bg-info' ,'text-white' ,'bottom-editar')
        botonEditar.textContent = "Editar"


        let botonEliminar = document.createElement("button")
        botonEliminar.classList.add('btn' , 'float-end' , 'bg-danger' , 'text-white' , 'bottom-eliminar')
        botonEliminar.textContent = "Eliminar"
      
        // añadiendo las etiquetas creadas a la card
        div_card.appendChild(h4_title)
        div_card.appendChild(h5_subtitle)
        div_card.appendChild(p_editorial)
        div_card.appendChild(pCategoria)
        div_card.appendChild(pCantidad)
        div_card.appendChild(botonEditar)
        div_card.appendChild(botonEliminar)

        // añadiendo la card a la etiqueta padre contenedora 
        container_card.appendChild(div_card)

        contenedor_libros.prepend(container_card)
   
        nombre_libro.value = ""
        autor_libro.value= ""
        editorial_libro.value = ""
        cantidad_libro.value = ""
        categoria_libro.value=""
        
        let containerAñadirlibro = document.querySelector(".container-añadir-libro") 
        containerAñadirlibro.classList.remove("open-container-añadir")

        
        // evento eliminar 
        let eventEliminar = document.querySelector('.bottom-eliminar')
        eventEliminar.addEventListener("click",()=> {

            try {
                let confirmacion= prompt('¿ estas seguro de eliminar este libro ? \n si \n no').toLowerCase()
                if(confirmacion == "si"){
                    eventEliminar.parentElement.parentElement.remove()
                }

            } catch (error) {
                console.log("confirmacion no ingresada")
            }
           

        })



        

        let eventEditar= document.querySelector(".bottom-editar")
        eventEditar.addEventListener("click", ()=>{
            let contenedor_editar = document.getElementById("container-editar-libro")
            contenedor_editar.classList.toggle("open-container-editar")
    
            cancelar(contenedor_editar , "open-container-editar")
    
    
            let form_editar = document.getElementById("form-editar-libro")
            form_editar.onsubmit=(e)=>{
                e.preventDefault()
                    let nuevo_nombre = document.getElementById("nuevo-nombre-libro")
                    let nuevo_autorlibro = document.getElementById("nuevo-autor-libro")
                    let nuevo_editorial_libro = document.getElementById("nuevo-editorial-libro")
                    let nuevo_cantidad_libro = document.getElementById("nuevo-cantidad-libro")
                    let nuevo_categoria_libro = document.getElementById("nuevo-categoria-libro")
    
                        
                        // console.log(container_card.children[0].children)
                    container_card.children[0].children[0].textContent = nuevo_nombre.value
                    container_card.children[0].children[1].textContent = nuevo_autorlibro.value
                    container_card.children[0].children[2].children[1].textContent = nuevo_editorial_libro.value
                    container_card.children[0].children[3].children[1].textContent = nuevo_categoria_libro.value
                    container_card.children[0].children[4].children[1].textContent = nuevo_cantidad_libro.value
    
                    newLibro.nombre = nuevo_nombre.value
                    newLibro.autor = nuevo_autorlibro.value
                    newLibro.editorial = nuevo_editorial_libro.value
                    newLibro.categoria = nuevo_categoria_libro.value
                    newLibro.cantidad = nuevo_cantidad_libro.value
                        
                    nuevo_nombre.value = ""
                    nuevo_autorlibro. value= ""
                    nuevo_editorial_libro.value = ""
                    nuevo_categoria_libro.value = ""
                    nuevo_cantidad_libro.value = ""
    
    
                    contenedor_editar.classList.remove("open-container-editar")

            }

        })

        // eventEditar.forEach(editar =>{
        //     editar.addEventListener("click", ()=>{
        //         let contenedor_editar = document.getElementById("container-editar-libro")
        //         contenedor_editar.classList.toggle("open-container-editar")

        //         cancelar(contenedor_editar , "open-container-editar")


                
        //         let form_editar = document.getElementById("form-editar-libro")
        //         form_editar.onsubmit=(e)=>{
        //             e.preventDefault()
        //             let nuevo_nombre = document.getElementById("nuevo-nombre-libro")
        //             let nuevo_autorlibro = document.getElementById("nuevo-autor-libro")
        //             let nuevo_editorial_libro = document.getElementById("nuevo-editorial-libro")
        //             let nuevo_cantidad_libro = document.getElementById("nuevo-cantidad-libro")
        //             let nuevo_categoria_libro = document.getElementById("nuevo-categoria-libro")

                    
        //             // console.log(container_card.children[0].children)
        //             container_card.children[0].children[0].textContent = nuevo_nombre.value
        //             container_card.children[0].children[1].textContent = nuevo_autorlibro.value
        //             container_card.children[0].children[2].children[1].textContent = nuevo_editorial_libro.value
        //             container_card.children[0].children[3].children[1].textContent = nuevo_categoria_libro.value
        //             container_card.children[0].children[4].children[1].textContent = nuevo_cantidad_libro.value

        //             newLibro.nombre = nuevo_nombre.value
        //             newLibro.autor = nuevo_autorlibro.value
        //             newLibro.editorial = nuevo_editorial_libro.value
        //             newLibro.categoria = nuevo_categoria_libro.value
        //             newLibro.cantidad = nuevo_cantidad_libro.value
                    
        //             nuevo_nombre.value = ""
        //             nuevo_autorlibro. value= ""
        //             nuevo_editorial_libro.value = ""
        //             nuevo_categoria_libro.value = ""
        //             nuevo_cantidad_libro.value = ""


        //             contenedor_editar.classList.remove("open-container-editar")
        //         }

        //     })
        // })



        // let eventEditar= document.querySelectorAll(".bottom-editar")
        // eventEditar.forEach(editar =>{
        //     editar.addEventListener("click", ()=>{
        //         let contenedor_editar = document.getElementById("container-editar-libro")
        //         contenedor_editar.classList.toggle("open-container-editar")

        //         cancelar(contenedor_editar , "open-container-editar")


                
        //         let form_editar = document.getElementById("form-editar-libro")
        //         form_editar.onsubmit=(e)=>{
        //             e.preventDefault()
        //             let nuevo_nombre = document.getElementById("nuevo-nombre-libro")
        //             let nuevo_autorlibro = document.getElementById("nuevo-autor-libro")
        //             let nuevo_editorial_libro = document.getElementById("nuevo-editorial-libro")
        //             let nuevo_cantidad_libro = document.getElementById("nuevo-cantidad-libro")
        //             let nuevo_categoria_libro = document.getElementById("nuevo-categoria-libro")

                    
        //             // console.log(container_card.children[0].children)
        //             container_card.children[0].children[0].textContent = nuevo_nombre.value
        //             container_card.children[0].children[1].textContent = nuevo_autorlibro.value
        //             container_card.children[0].children[2].children[1].textContent = nuevo_editorial_libro.value
        //             container_card.children[0].children[3].children[1].textContent = nuevo_categoria_libro.value
        //             container_card.children[0].children[4].children[1].textContent = nuevo_cantidad_libro.value

        //             newLibro.nombre = nuevo_nombre.value
        //             newLibro.autor = nuevo_autorlibro.value
        //             newLibro.editorial = nuevo_editorial_libro.value
        //             newLibro.categoria = nuevo_categoria_libro.value
        //             newLibro.cantidad = nuevo_cantidad_libro.value
                    
        //             nuevo_nombre.value = ""
        //             nuevo_autorlibro. value= ""
        //             nuevo_editorial_libro.value = ""
        //             nuevo_categoria_libro.value = ""
        //             nuevo_cantidad_libro.value = ""


        //             contenedor_editar.classList.remove("open-container-editar")
        //         }

        //     })
        // })


}





 



