import {alertas, obtener} from "./module.js"
const API_USUARIO = 'http://localhost:8080/usuario'
const API_LIBRO = 'http://localhost:8080/libro'
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

// array con los objetos libros
// const lista_libros = JSON.parse(localStorage.getItem('libro')) || []

var lista_libros=[]

function obtenerLibros(){
    const libros_en_la_Api = obtener(API_LIBRO)
    .then(response => {
       lista_libros  = response
        mostar()
    
    })
}

obtenerLibros()


async function crear_Y_actualizar_libro(urlApi,id,autor,ediccion,categoria,cantidad,editorial,nombre,mensajeDenied,mensajeAccepted){
    let crearLibroApi = await fetch(urlApi,{
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "idlibro_lbr": id,
            "autor_lbr":autor,
            "edicion_lbr": ediccion,
            "categoriaLbr": categoria,
            "copiasdisp_lbr": cantidad,
            "disponible_lbr": 1,
            "editorial_lbr":editorial,
            "titulo_lbr": nombre
        })

    })
    
    
    if(crearLibroApi.status !=200){
        alertas('alert-denied',mensajeDenied)
        obtenerLibros()
    }
    else{
        alertas('alert-accepted', mensajeAccepted)
        obtenerLibros()
    }
}

// funcion para remover libros dentro del array, el DOM y de la api 
function eliminar(){
let eventoEliminar = document.querySelectorAll(".boton-eliminar")
eventoEliminar.forEach((elemento)=>{
    elemento.addEventListener("click", async ()=>{
        
        elemento.parentElement.parentElement.remove()
        
        let encontrado =  lista_libros.find(e=> e.titulo_lbr ==  elemento.parentElement.parentElement.children[0].textContent)
        let indice = lista_libros.findIndex(element=> element==encontrado)
        lista_libros.splice(indice,1)

        
        let borrarEnApi = await fetch(`${API_LIBRO}/${encontrado.idlibro_lbr}`,{
            method:'DELETE'
        })

        if(borrarEnApi.status != 200){
            alertas('alert-denied','El libro no a podido ser eliminado , Por favor intentelo de nuevo')
        }
        else{

            alertas('alert-accepted', 'El libro ha sido eliminado con exito')
        }

        })
    })

}


// funcion para editar un libro en el Dom ,dentro de array y de la api 
function editar(){
    let encontrado;
    let eventEditar= document.querySelectorAll(".bottom-editar")
    let arrayEditar = Array.from(eventEditar)
    arrayEditar.forEach((e,i,a)=>{
        e.addEventListener('click',()=>{

            let contenedor_editar = document.getElementById("container-editar-libro")
            contenedor_editar.classList.toggle("open-container-editar")
            
            cancelar(contenedor_editar , "open-container-editar")
                    
            encontrado =  lista_libros.find(element=> element.titulo_lbr ==  e.parentElement.parentElement.children[0].textContent)
            let indice = lista_libros.findIndex(element=> element==encontrado)
            
            let nuevo_nombre = document.getElementById("nuevo-nombre-libro")
            let nuevo_autorlibro = document.getElementById("nuevo-autor-libro")
            let nuevo_editorial_libro = document.getElementById("nuevo-editorial-libro")
            let nuevo_cantidad_libro = document.getElementById("nuevo-cantidad-libro")
            let nuevo_categoria_libro = document.getElementById("nuevo-categoria-libro")
            let nuevo_ediccion_libro = document.getElementById("nuevo-ediccion-libro")

            nuevo_nombre.value = encontrado.titulo_lbr
            nuevo_autorlibro.value = encontrado.autor_lbr
            nuevo_editorial_libro.value = encontrado.editorial_lbr
            nuevo_categoria_libro.value =  encontrado.categoriaLbr
            nuevo_cantidad_libro.value = encontrado.copiasdisp_lbr
            nuevo_ediccion_libro.value = encontrado.edicion_lbr

            let form_editar = document.getElementById("form-editar-libro")
            form_editar.onsubmit= async (evento)=>{
                evento.preventDefault()

                contenedor_libros.innerHTML=""
                
                e.parentElement.parentElement.children[0].textContent  = nuevo_nombre.value

                e.parentElement.children[0].children[1].textContent  = nuevo_autorlibro.value
                e.parentElement.children[1].children[1].textContent  = nuevo_editorial_libro.value
                e.parentElement.children[2].children[1].textContent  = nuevo_categoria_libro.value
                e.parentElement.children[3].children[1].textContent  = nuevo_cantidad_libro.value
                e.parentElement.children[4].children[1].textContent  = nuevo_ediccion_libro.value
                

                lista_libros[indice].titulo_lbr = nuevo_nombre.value
                lista_libros[indice].autor_lbr = nuevo_autorlibro.value
                lista_libros[indice].editorial_lbr = nuevo_editorial_libro.value
                lista_libros[indice].categoriaLbr = nuevo_categoria_libro.value
                lista_libros[indice].copiasdisp_lbr = nuevo_cantidad_libro.value
                lista_libros[indice].edicion_lbr = nuevo_ediccion_libro.value

               

                crear_Y_actualizar_libro(API_LIBRO,encontrado.idlibro_lbr,nuevo_autorlibro.value,nuevo_ediccion_libro.value,nuevo_categoria_libro.value,nuevo_cantidad_libro.value,nuevo_editorial_libro.value, nuevo_nombre.value,'Lo sentimos no fue posible actualizar el libro , Intentelo de nuevo','Libro actualizado')

                nuevo_nombre.value = ""
                nuevo_autorlibro. value= ""
                nuevo_editorial_libro.value = ""
                nuevo_categoria_libro.value = ""
                nuevo_cantidad_libro.value = ""
                nuevo_ediccion_libro.value = ""
    
                
    
                contenedor_editar.classList.remove("open-container-editar")

            }           
        })
    })
}

function htmlLibro(elemento){
    contenedor_libros.innerHTML+= `<details class="card-libro">
            <summary>${elemento?.titulo_lbr}</summary>
            <div>
            <p> <span class="text-muted">autor : </span> <span>${elemento?.autor_lbr}</span> </p>
            <p><span class="text-muted">Editorial :</span> <span>${elemento?.editorial_lbr}</span></p>
            <p><span class="text-muted">Categoria :</span> <span>${elemento?.categoriaLbr}</span> </p>
            <p><span class="text-muted">Cantidad :</span>  <span> ${elemento?.copiasdisp_lbr}</span></p>
            <p><span class="text-muted">Edicción :</span>  <span> ${elemento?.edicion_lbr}</span></p>
            <button class="btn bg-info text-white bottom-editar">Editar</button>
            <button class=" btn bg-danger text-white float-end boton-eliminar">Eliminar</button>
            </div>
        </details>`
}


// etiqueta donde se mostrara la informacion ingresada por el usuario en la opcion añadir libro
let contenedor_libros  = document.getElementById("container-libros")

// funcion  para mostrar aquellos libros que esten en el la api y se  agregen al array lista_libros
function mostar(){
    for (const i of lista_libros) {

        htmlLibro(i)

        eliminar()

        editar()
    }
}



// previniendo el evento enviar en el formulario añadir 
let form_añadir = document.getElementById("form-añadir-libro")

form_añadir.onsubmit = async (e)=>{
        e.preventDefault()

        contenedor_libros.innerHTML=""

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

    

        crear_Y_actualizar_libro(API_LIBRO,0,valor_autor_libro,valor_ediccion,valor_categoria
            ,valor_cantidad,valor_editorial,valor_nombre,'El libro no se a agregado correctamente , intentelo de nuevo' ,'El libro ha sido agregado con exito' )

        let containerAñadirlibro = document.querySelector(".container-añadir-libro") 
        containerAñadirlibro.classList.remove("open-container-añadir")

        nombre_libro.value = ""
        autor_libro.value= ""
        editorial_libro.value = ""
        cantidad_libro.value = ""
        categoria_libro.value=""
        ediccion_libro.value = ""

        
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

// perfil del usuario
let alias_Usr = document.getElementById('nombreUsr')
alias_Usr.textContent= JSON.parse( localStorage.getItem('usuarioAlias'))

// borrar usuario
async function  borrarUsuario(urlApi, id){
    let confirmacion_eliminar = document.getElementById('confirmacion-eliminar-usr')
    let btnSI = document.getElementById('btn-si')
    let btnCancelar = document.getElementById('btn-cancelar')

    confirmacion_eliminar.classList.replace('close','open')

    btnSI.addEventListener('click',async()=>{
        let eliminar = await fetch(`${urlApi}/${id}` , {
            method:'DELETE'
        })
    
        if(eliminar.status!= 200){
            alertas('alert-denied', 'Lo sentimos hubo un error al eliminar su cuenta , Intentelo mas tarde')
        }else{
            alertas('alert-accepted', 'Usuario eliminado correctamente')
            
            setTimeout(function(){
                location.href="../cliente/login.html"
            },5000)

        }
    })

    btnCancelar.addEventListener('click',()=>{
        confirmacion_eliminar.classList.replace('open','close')
    })

    
}


let liEliminarUsuario = document.getElementById('eliminar-Usuario')
liEliminarUsuario.addEventListener('click',()=>{
    borrarUsuario(API_USUARIO,JSON.parse(localStorage.getItem('usuarioID')))
})



// editar usuario

const container_editar_perfil = document.getElementById('contenedor-editar-perfil')

const btn_editar = document.getElementById('editar-perfil') 

const form_editar_usuario = document.getElementById('form-editar-usuario')

btn_editar.addEventListener('click',()=>{
    container_editar_perfil.classList.replace('close','open')
    let usuario_actualizado = document.getElementById('usuario-actualizado')
    // let cedula_actualizada = document.getElementById('cedula-actualizada')
    let nombres_actualizados = document.getElementById('nombres-actualizados')
    let apellidos_actualizados = document.getElementById('apellidos-actualizados')
    let correo_actualizado = document.getElementById('correo-actualizado')
    let contraseña_actualizado = document.getElementById('contraseña-actualizado')
    let direccion_actualizada = document.getElementById('direccion-actualizada')
    let telefono_actualizado = document.getElementById('telefono-actualizado')
    let tipoUsr_actualizado = document.getElementById('tipoUsr-actualizado')
    
    
    let usr = obtener(`${API_USUARIO}/${localStorage.getItem('usuarioID')}`) 
     .then(data=>{
         usuario_actualizado.value =data.alias_usr
         
         nombres_actualizados.value = data.nombres_usr
         apellidos_actualizados.value = data.apellidos_usr
         correo_actualizado.value = data.correo_usr
         contraseña_actualizado.value = data.contrasena_usr
         direccion_actualizada.value = data.direccion_usr
         telefono_actualizado.value = data.telefono_usr
         tipoUsr_actualizado.value = data.tipoUsr
        
        
         
             form_editar_usuario.onsubmit =  async e=>{
                 e.preventDefault()
         
                 let actualizarDatos =  await fetch(API_USUARIO,{
                     method:'POST',
                     mode:'cors',
                     headers :{
                         'Content-type' : 'application/json'
                     },
                     body: JSON.stringify({
                         "idcedula_usr": data.idcedula_usr,
                         "alias_usr": usuario_actualizado.value,
                         "contrasena_usr": contraseña_actualizado.value  ,
                         "correo_usr": correo_actualizado.value ,
                         "nombres_usr":  nombres_actualizados.value,
                         "apellidos_usr": apellidos_actualizados.value,
                         "direccion_usr": direccion_actualizada.value  ,
                         "telefono_usr":  telefono_actualizado.value ,
                         "tipoUsr": tipoUsr_actualizado.value 
                     })
                 }) 

                 if(actualizarDatos.status != 200){
                    alertas('alert-denied', 'Lo sentimos hubo al actualizar su cuenta, Intentelo mas tarde')
                   cancelarActualizacion()

                }else{
                    alertas('alert-accepted', 'Usuario actualizado correctamente')
                    cancelarActualizacion()
                }
         
             }
     } )

})


const cancelar_editar_usuario = document.getElementById('cancelar-editar-usuario')

cancelar_editar_usuario.addEventListener('click', cancelarActualizacion)

function cancelarActualizacion(){
    container_editar_perfil.classList.replace('open','close')
}