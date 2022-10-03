
import { obtener } from "./module.js"
const API_PRESTAMO = 'http://localhost:8080/prestamo'
const API_LIBRO = 'http://localhost:8080/libro'

const contenedorPrestamos = document.getElementById('container-prestamos')

const datalist_libros = document.getElementById('datalist-prestamos')


let prestamos = obtener(API_PRESTAMO)
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

            <button class="btn bg-info text-white bottom-editar">Editar</button>
            <button class=" btn bg-danger text-white float-end boton-eliminar">Eliminar</button>
            </div>
    </datails>`
    })
})




var arrayNombresLibros = []

let libros = obtener(API_LIBRO)
    .then(data =>{

        
        let nombresLibros = Array.from(data)
        nombresLibros.forEach(libro => {
            

           var id = libro.idlibro_lbr
           var titulo = libro.titulo_lbr
           arrayNombresLibros.push({titulo,id})
        })

        let datalist = arrayNombresLibros.map(e=> `<option value="${e.id}">${e.titulo}</option>`) 
       

        datalist_libros.innerHTML+= datalist
    }) 




const btn_añadir_prestamo = document.getElementById('prestamos')
btn_añadir_prestamo.addEventListener('click', añadirPrestamo)
const contenedor_form = document.getElementById('contenedor-form-prestamos')


function añadirPrestamo(){
    contenedor_form.classList.toggle('open')
}

const form_prestasmos = document.getElementById('form-prestamos')

form_prestasmos.onsubmit= async(e)=>{
    e.preventDefault()   
    
    const input_añadir_libro = document.getElementById('input-libro-prestamo') 

    let fechacreacion =  new Date()
    let day = fechacreacion.getDate()
    let year =fechacreacion.getFullYear()
    let month = fechacreacion.getMonth() + 1

    let fecha = `${year}-${month}-${day}`

    let idLibro =parseInt(input_añadir_libro.value)

    let idcedula_usr = parseInt(localStorage.getItem('usuarioID'))

    // console.log(idLibro,idcedula_usr)

    let crearPrestamo = await fetch(API_PRESTAMO,{
        method:'POST',
        mode:'cors',
        headers :{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
            "fechaCreacion" :fecha,
            "fechaActualizaciion" : fecha,
            "fkLibro" :{"idlibro_lbr" : idLibro },
            "fkUsuario" : {"idcedula_usr" : idcedula_usr } 
    
        })
    
    })
    
    if(crearPrestamo.status != 200){
        console.log("peticion no procesada")
    }
    else{
        console.log("exitosa")
    
    }

    
   
}

const btn_cancelar_prestamo =document.getElementById('btn-cancelar-prestamo')
btn_cancelar_prestamo.addEventListener('click',()=>{
    contenedor_form.classList.remove('open')
})


 
