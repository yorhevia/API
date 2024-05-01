const enLinea = navigator.onLine;

console.log(navigator.onLine)

window.addEventListener('online',actualizarEstado);

function actualizarEstado(e){
    if(navigator.onLine){
        console.log('tienes conexion')
    }else{
        console.log('No tienes conexion')
    }
}