export function alertas(claseDiv , textoP){
    let sectionAlert = document.getElementById('container-alert')
    sectionAlert.classList.add('open')

    let div_informacion = document.getElementById('div-container-information')    
    div_informacion.classList.add(claseDiv)

    let p_informacion = document.getElementById('pInformacion-alert')
    p_informacion.innerHTML = textoP
    
    let button_close = document.getElementById('btn_close-alert')

    setTimeout(()=>{
        sectionAlert.classList.remove('open')
        div_informacion.classList.remove(claseDiv)
    },4000)
}


export async function obtener(urlApi){
    let users = await fetch(urlApi)
    let data  = await users.json()
    return data
}


export function datalist_libros(urlApi){
    let datalist_libros = document.getElementById('list-libros')
    
    var arrayNombresLibros = []
    let libros = obtener(urlApi)
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
   
}