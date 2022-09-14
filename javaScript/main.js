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

// array con los objetos libros
const lista_libros = []

// contenedor padre
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
        
        
    
        
         

        // etiqueta contenedora de la informacion capturada 
        let container_card = document.createElement("article")
        container_card.classList.add('article-card')
        
        container_card.innerHTML=`<div class="card-body">

                                <h4 class="card-title mb-3">${newLibro.nombre}</h4>
                                <h5 class="card-subtitle text-muted border-bottom mb-3 pb-2 ">${newLibro
                                .autor}</h5>
                                <p class="card-text"> <span class="text-muted">Editorial : </span> <span class="text-dark">${newLibro.editorial}</span> </p>
                                <p class="card-text"> <span class="text-muted">Categoria : </span> <span class="text-dark">${newLibro.categoria}</span> </p>
                                <p class="card-text"> <span class="text-muted">Cantidad : </span> <span class="text-dark">${newLibro.cantidad}</span> </p>

                                <button class="btn text-white bottom-editar bg-primary ">Editar</button>
                                <button class="btn text-white float-end bg-danger bottom-eliminar">Eliminar</button>
                               
                                </div>`

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


        // evento editar

        let eventEditar= document.querySelector(".bottom-editar")
        eventEditar.addEventListener("click", ()=>{
            let contenedor_editar = document.getElementById("container-editar-libro")
            contenedor_editar.classList.toggle("open-container-editar")
    
            cancelar(contenedor_editar , "open-container-editar")
    
            let nuevo_nombre = document.getElementById("nuevo-nombre-libro")
            let nuevo_autorlibro = document.getElementById("nuevo-autor-libro")
            let nuevo_editorial_libro = document.getElementById("nuevo-editorial-libro")
            let nuevo_cantidad_libro = document.getElementById("nuevo-cantidad-libro")
            let nuevo_categoria_libro = document.getElementById("nuevo-categoria-libro")
    

            let form_editar = document.getElementById("form-editar-libro")
            form_editar.onsubmit=(e)=>{
                e.preventDefault()

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

}

// evento en el buscador 
let buscador = document.getElementById("buscador")
buscador.addEventListener("keyup" , (e) =>{
    let texto =   e.target.value
     

    let er = new RegExp(texto,'i')


    for (let index = 0; index < contenedor_libros.children.length; index++) {
        let  valor = contenedor_libros.children[index]

        if(er.test(valor.children[0].children[0].textContent) || er.test(valor.children[0].children[1].textContent) ){

            valor.classList.remove("filter")

        }else{

            valor.classList.add("filter")

        }
    }

    if(e.key ==="Escape")e.target.value =""

})  