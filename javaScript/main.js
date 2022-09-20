// funcion constructura de libros
function libros(nombre, autor , editorial, categoria , cantidad, ediccion){
    this.nombre = nombre
    this.autor = autor
    this.editorial = editorial
    this.categoria = categoria
    this.cantidad = cantidad
    this.ediccion = ediccion
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



// funcion para obtener los libros dentro del localStorage
function obtenerLocalStorage(){
    localStorage.setItem('libro',JSON.stringify(lista_libros))
}


// funcion para remover libros dentro del array, el DOM y del localStorage
function eliminar(){
let eventoEliminar = document.querySelectorAll(".boton-eliminar")
eventoEliminar.forEach((elemento)=>{
    elemento.addEventListener("click",()=>{
      
        elemento.parentElement.parentElement.remove()
        
        encontrado =  lista_libros.find(e=> e.nombre ==  elemento.parentElement.parentElement.children[0].textContent)
        let indice = lista_libros.findIndex(element=> element==encontrado)
        lista_libros.splice(indice,1)

        obtenerLocalStorage() 

        })
    })

}


// funcion para editar un libro en el Dom ,dentro de array y en el localStorage
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
            let indice = lista_libros.findIndex(element=> element==encontrado)
            
            let nuevo_nombre = document.getElementById("nuevo-nombre-libro")
            let nuevo_autorlibro = document.getElementById("nuevo-autor-libro")
            let nuevo_editorial_libro = document.getElementById("nuevo-editorial-libro")
            let nuevo_cantidad_libro = document.getElementById("nuevo-cantidad-libro")
            let nuevo_categoria_libro = document.getElementById("nuevo-categoria-libro")
            let nuevo_ediccion_libro = document.getElementById("nuevo-ediccion-libro")

            nuevo_nombre.value = lista_libros[indice].nombre
            nuevo_autorlibro.value = lista_libros[indice].autor
            nuevo_editorial_libro.value = lista_libros[indice].editorial
            nuevo_categoria_libro.value = lista_libros[indice].categoria
            nuevo_cantidad_libro.value = lista_libros[indice].cantidad
            nuevo_ediccion_libro.value = lista_libros[indice].ediccion

            let form_editar = document.getElementById("form-editar-libro")
            form_editar.onsubmit=(evento)=>{
                evento.preventDefault()
                
                e.parentElement.parentElement.children[0].textContent  = nuevo_nombre.value

                e.parentElement.children[0].children[1].textContent  = nuevo_autorlibro.value
                e.parentElement.children[1].children[1].textContent  = nuevo_editorial_libro.value
                e.parentElement.children[2].children[1].textContent  = nuevo_categoria_libro.value
                e.parentElement.children[3].children[1].textContent  = nuevo_cantidad_libro.value
                e.parentElement.children[4].children[1].textContent  = nuevo_ediccion_libro.value
                

                lista_libros[indice].nombre = nuevo_nombre.value
                lista_libros[indice].autor = nuevo_autorlibro.value
                lista_libros[indice].editorial = nuevo_editorial_libro.value
                lista_libros[indice].categoria = nuevo_categoria_libro.value
                lista_libros[indice].cantidad = nuevo_cantidad_libro.value
                lista_libros[indice].ediccion = nuevo_ediccion_libro.value
                

                nuevo_nombre.value = ""
                nuevo_autorlibro. value= ""
                nuevo_editorial_libro.value = ""
                nuevo_categoria_libro.value = ""
                nuevo_cantidad_libro.value = ""
                nuevo_ediccion_libro.value = ""
    
                obtenerLocalStorage()
    
                contenedor_editar.classList.remove("open-container-editar")

            }           
        })
    })
}

function htmlLibro(elemento){
    contenedor_libros.innerHTML+= `<details class="card-libro">
            <summary>${elemento?.nombre}</summary>
            <div>
            <p> <span class="text-muted">autor : </span> <span>${elemento?.autor}</span> </p>
            <p><span class="text-muted">Editorial :</span> <span>${elemento?.editorial}</span></p>
            <p><span class="text-muted">Categoria :</span> <span>${elemento?.categoria}</span> </p>
            <p><span class="text-muted">Cantidad :</span>  <span> ${elemento?.cantidad}</span></p>
            <p><span class="text-muted">Edicción :</span>  <span> ${elemento?.ediccion}</span></p>
            <button class="btn bg-info text-white bottom-editar">Editar</button>
            <button class=" btn bg-danger text-white float-end boton-eliminar">Eliminar</button>
            </div>
        </details>`
}


// atrapando y mostrando la informacion ingresada por el usuario en la opcion añadir libro
let contenedor_libros  = document.getElementById("container-libros")

// array con los objetos libros
const lista_libros = JSON.parse(localStorage.getItem('libro')) || []

// funcion  para mostrar aquellos libros que esten en el localStorage
function mostar(){
    for (const i of lista_libros) {

        htmlLibro(i)

        eliminar()

        editar()
    }
}

mostar()

// previniendo el evento enviar en el formulario añadir 
let form_añadir = document.getElementById("form-añadir-libro")

form_añadir.onsubmit=(e)=>{
        e.preventDefault()

        let nombre_libro = document.getElementById("nombre-libro")
        let autor_libro = document.getElementById("autor-libro")
        let editorial_libro = document.getElementById("editorial-libro")
        let cantidad_libro = document.getElementById("cantidad-libro")
        let categoria_libro = document.getElementById("categoria-libro")
        let ediccion_libro = document.getElementById("ediccion-libro")



        let valor_nombre = nombre_libro.value
        let valor_autor_libro = autor_libro.value
        let valor_editorial = editorial_libro.value
        let valor_cantidad = cantidad_libro.value
        let valor_categoria = categoria_libro.value
        let valor_ediccion = ediccion_libro.value

        let newLibro = new libros(valor_nombre , valor_autor_libro , valor_editorial , valor_categoria , valor_cantidad, valor_ediccion)
        lista_libros.push(newLibro)


        let containerAñadirlibro = document.querySelector(".container-añadir-libro") 
        containerAñadirlibro.classList.remove("open-container-añadir")

        nombre_libro.value = ""
        autor_libro.value= ""
        editorial_libro.value = ""
        cantidad_libro.value = ""
        categoria_libro.value=""
        ediccion_libro.value = ""

        htmlLibro(newLibro)
        obtenerLocalStorage()
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