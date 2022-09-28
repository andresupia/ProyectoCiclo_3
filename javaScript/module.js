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
