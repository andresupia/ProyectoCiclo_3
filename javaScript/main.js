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




// array con los objetos libros
const lista_libros = []

// funcion para remover libros dentro del array y el DOM
function eliminar(){
let eventoEliminar = document.querySelectorAll(".boton-eliminar")
eventoEliminar.forEach((elemento)=>{
    elemento.addEventListener("click",()=>{

      
        elemento.parentElement.parentElement.remove()
        
        encontrado =  lista_libros.find(e=> e.nombre ==  elemento.parentElement.parentElement.children[0].textContent)
        let indice = lista_libros.findIndex(element=> element==encontrado)
        lista_libros.splice(indice,1)
        
        })
    })

}


// funcion para editar un libro en el Dom y dentro de array
function editar(){
    let encontrado;
    let eventEditar= document.querySelectorAll(".bottom-editar")
    let arrayEditar = Array.from(eventEditar)
    arrayEditar.forEach((e,i,a)=>{
        e.addEventListener('click',()=>{

            let contenedor_editar = document.getElementById("container-editar-libro")
            contenedor_editar.classList.toggle("open-container-editar")
            
            cancelar(contenedor_editar , "open-container-editar")
                    
            encontrado =  lista_libros.find(element=> element.nombre ==  e.parentElement.parentElement.children[0].textContent)
            console.log(lista_libros.includes(encontrado))
            let indice = lista_libros.findIndex(element=> element==encontrado)
               
            let form_editar = document.getElementById("form-editar-libro")
            form_editar.onsubmit=(evento)=>{
                evento.preventDefault()

                let nuevo_nombre = document.getElementById("nuevo-nombre-libro")
                let nuevo_autorlibro = document.getElementById("nuevo-autor-libro")
                let nuevo_editorial_libro = document.getElementById("nuevo-editorial-libro")
                let nuevo_cantidad_libro = document.getElementById("nuevo-cantidad-libro")
                let nuevo_categoria_libro = document.getElementById("nuevo-categoria-libro")
        
                  
                    e.parentElement.parentElement.children[0].textContent  = nuevo_nombre.value

                    e.parentElement.children[0].children[1].textContent  = nuevo_autorlibro.value
                    e.parentElement.children[1].children[1].textContent  = nuevo_editorial_libro.value
                    e.parentElement.children[2].children[1].textContent  = nuevo_categoria_libro.value
                    e.parentElement.children[3].children[1].textContent  = nuevo_cantidad_libro.value

                    lista_libros[indice].nombre = nuevo_nombre.value
                    lista_libros[indice].autor = nuevo_autorlibro.value
                    lista_libros[indice].editorial = nuevo_editorial_libro.value
                    lista_libros[indice].categoria = nuevo_categoria_libro.value
                    lista_libros[indice].cantidad = nuevo_cantidad_libro.value

                    nuevo_nombre.value = ""
                    nuevo_autorlibro. value= ""
                    nuevo_editorial_libro.value = ""
                    nuevo_categoria_libro.value = ""
                    nuevo_cantidad_libro.value = ""
    
    
                    contenedor_editar.classList.remove("open-container-editar")

            }           
        })
    })
}




// atrapando y mostrando la informacion ingresada por el usuario en la opcion añadir libro
let contenedor_libros  = document.getElementById("container-libros")

let form_añadir = document.getElementById("form-añadir-libro")

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


        let containerAñadirlibro = document.querySelector(".container-añadir-libro") 
        containerAñadirlibro.classList.remove("open-container-añadir")
    
        contenedor_libros.innerHTML+=` <details class="card-libro">
        <summary>${newLibro.nombre}</summary>
        <div>
        <p> <span class="text-muted">autor : </span> <span>${newLibro.autor}</span> </p>
        <p><span class="text-muted">Editorial :</span> <span>${newLibro.editorial}</span></p>
        <p><span class="text-muted">Categoria :</span> <span>${newLibro.categoria}</span> </p>
        <p><span class="text-muted">Cantidad :</span>  <span> ${newLibro.cantidad}</span></p>
        <button class="btn bg-info text-white bottom-editar">Editar</button>
        <button class=" btn bg-danger text-white float-end boton-eliminar">Eliminar</button>
        </div>
    </details>`

        
        nombre_libro.value = ""
        autor_libro.value= ""
        editorial_libro.value = ""
        cantidad_libro.value = ""
        categoria_libro.value=""

    
        eliminar()
        editar()
}   



// evento en el buscador 
let buscador = document.getElementById("buscador")
buscador.addEventListener("keyup" , (e) =>{
    let texto =   e.target.value
     

    let er = new RegExp(texto,'i')


    for (let index = 0; index < contenedor_libros.children.length; index++) {
        let  valor = contenedor_libros.children[index]

        if(er.test(valor.children[0].textContent) || er.test(valor.children[1].children[0].children[1].textContent) ){

            valor.classList.remove("filter")

        }else{

            valor.classList.add("filter")

        }
    }

    if(e.key ==="Escape")e.target.value =""

})  