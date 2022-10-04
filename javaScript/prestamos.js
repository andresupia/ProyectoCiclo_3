
import { obtener, datalist_libros, alertas ,funcion_datalist_prestamos} from "./module.js"
const API_PRESTAMO = 'http://localhost:8080/prestamo'
const API_LIBRO = 'http://localhost:8080/libro'

const contenedorPrestamos = document.getElementById('container-prestamos')
let i_contenedor = document.querySelector('.contenedor-eliminar')
let div_contenedor_form = document.getElementById('contenedor-form-eliminar')
let input_eliminar = document.getElementById('input-eliminar')
let datalist_prestamos = document.getElementById('list-libros')


function obtenerPrestamos(url){
    
    let prestamos = obtener(url)
    .then(data=>{
    
        data.forEach(e=> {
    
          
            contenedorPrestamos.innerHTML += `<details class="card-libro">
            <summary>${e.fkLibro.titulo_lbr}</summary>
            <div>
    
                <p> <span class="text-muted">Prestamos realizado el : </span> <span> ${e
                .fechaCreacion}</span> </p>
                <p><span class="text-muted">fecha de actualizacion :</span> <span>${e.fechaActualizacion}</span> </p>
                <p><span class="text-muted">Autor:</span>  <span>${e.fkLibro.autor_lbr}</span></p>
                <p><span class="text-muted">Categoria:</span>  <span>${e.fkLibro.categoriaLbr}</span></p>
                </div>
        </datails>`
        })
    })
}


obtenerPrestamos(API_PRESTAMO)

datalist_libros(API_LIBRO, 'datalist-prestamos')

// Añadir prestamo

const contenedor_form = document.getElementById('contenedor-form-prestamos')

const btn_añadir_prestamo = document.getElementById('prestamos')
btn_añadir_prestamo.addEventListener('click', ()=>{
    contenedor_form.classList.toggle('open')
})



const form_prestasmos = document.getElementById('form-prestamos')

form_prestasmos.onsubmit= async(e)=>{
    e.preventDefault()   
    datalist_prestamos.innerHTML = ""
    contenedorPrestamos.innerHTML = ""
    
    const input_añadir_libro = document.getElementById('input-libro-prestamo') 
    const input_fecha_creacion = document.getElementById('fechaCreacion')
  
    let idLibro  = input_añadir_libro.value
    
    let idcedula_usr =localStorage.getItem('usuarioID')

    let prestamos= obtener(API_PRESTAMO)
    .then( async data=> {
        let arrayNombreslibros = Array.from(data)

        let encontrado = arrayNombreslibros.find(e=> e.fkLibro.idlibro_lbr == idLibro ) || false

        if(encontrado){
            alertas('alert-denied', 'El prestamo ya se encuentra registrado')
            obtenerPrestamos(API_PRESTAMO)
        }else{

            let crearPrestamo = await  fetch(API_PRESTAMO,{
                method:'POST',
                mode:'cors',
                headers :{
                    'Content-Type' : 'application/json'
                },
                body:JSON.stringify({
                    "fechaCreacion" : input_fecha_creacion.value,
                    "fechaActualizacion" : input_fecha_creacion.value,
                    "fkLibro" :{"idlibro_lbr" : idLibro },
                    "fkUsuario" : {"idcedula_usr" : JSON.parse(localStorage.getItem('usuarioID'))} 
                })
            
            })
            
            if(crearPrestamo.status != 200){
                alertas('alert-denied', 'No ha sido posible añadir el prestamo')
            }else{
                alertas('alert-accepted', 'El prestamo se ha añadido correctamente')
                obtenerPrestamos(API_PRESTAMO)
                contenedor_form.classList.remove('open')

                input_fecha_creacion.value = ""
                input_añadir_libro.value = ""
            }

        }
    })
    
    
        
    
   
}

const btn_cancelar_prestamo =document.getElementById('btn-cancelar-prestamo')
btn_cancelar_prestamo.addEventListener('click',()=>{
    contenedor_form.classList.remove('open')
})

i_contenedor.addEventListener('click',()=>{
    div_contenedor_form.classList.toggle('open')
    funcion_datalist_prestamos(API_PRESTAMO)
})

let form_eliminar = document.getElementById('form-eliminar')
form_eliminar.onsubmit = async (e)=>{
    e.preventDefault()

    datalist_prestamos.innerHTML =""
    contenedorPrestamos.innerHTML =""
    let borrarUsuario =await  fetch(`${API_PRESTAMO}/${input_eliminar.value}`,{
        method:'DELETE'
    })

    if(borrarUsuario.status !=200){
        alertas('alert-denied', 'No se ha eliminado  el prestamo , Intentelo mas tarde')
        div_contenedor_form.classList.remove('open')
   
    }
    else{
        div_contenedor_form.classList.remove('open')
        alertas('alert-accepted', 'El libro se eliminado correctamente')
       obtenerPrestamos(API_PRESTAMO)
       input_eliminar.value = ""

    }
}

