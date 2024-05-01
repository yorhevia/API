const abrirbtn = document.querySelector('#abrir-pantalla-completa')
const cerrarbtn = document.querySelector('#salir-pantalla-completa')

//evento
abrirbtn.addEventListener('click',pantallaCompleta)
cerrarbtn.addEventListener('click',cerrarPantalla)


function pantallaCompleta(){
    document.documentElement.requestFullscreen()
}

function cerrarPantalla(){
    document.exitFullscreen()
}