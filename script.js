import {mantenerLista} from "./javascript/mantenerlista.js"
import {guardarDato} from "./javascript/guardardato.js"

let btnAgregar = document.getElementById("btnagregar");
btnAgregar.addEventListener('click', guardarDato);

//la funcion siempre esta en ejecucion para que se muestren los archivos del localStorage
//siempre que los haya
mantenerLista()