import {formatoFecha} from "./formatofecha.js";
import {almacenarDato} from "./almacenardato.js";

let entradaDatos = document.getElementById("textarea");
let contenedor = document.getElementById("contenedor_listas");

//funcion que crea el contenido html de las tareas
export function guardarDato() {

    let datoEntrada = entradaDatos.value;
    let fechaEntrada = formatoFecha();

    if (datoEntrada == "" || fechaEntrada == "") {
        return
    }

    let cardItem = document.createElement('li');
    cardItem.className = 'tarea';
    contenedor.appendChild(cardItem);

    let revision = document.createElement('input');
    revision.type = 'checkbox';
    revision.className = "check";
    cardItem.appendChild(revision);

    let separador = document.createElement('span');
    separador.className = 'separador';
    cardItem.appendChild(separador);

    let fecha = document.createElement('p');
    fecha.innerText = fechaEntrada;
    fecha.className = 'fecha_texto';
    separador.appendChild(fecha);

    let texto = document.createElement('p');
    texto.innerText = datoEntrada;
    texto.className = 'tarea_text';
    separador.appendChild(texto);

    let btnBorrar = document.createElement('button');
    btnBorrar.className = 'btn_borrar';
    btnBorrar.innerText = 'borrar';
    cardItem.appendChild(btnBorrar);

    btnBorrar.addEventListener('click', function borrar() {
        cardItem.remove();
    })
// con este if evitamos que se dupliquen los archivos en localStorage
    if (datoEntrada !== "") {
        almacenarDato(datoEntrada, fechaEntrada);
    }
    return contenedor;

}