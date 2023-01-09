import {recuperarDato} from "./recuperardato.js"

//funcion que mantiene en vista las tareas que estan en localStorage
export function mantenerLista() {
    let datosGuardados = JSON.parse(localStorage.getItem('lista')) || [];

    datosGuardados.forEach((lista) => {
        recuperarDato(lista.dato, lista.Fecha)
    })
}