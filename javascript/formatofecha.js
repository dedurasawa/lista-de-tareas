

export function formatoFecha() {
//damos formato al imput de fecha y hora
    let fecha = document.getElementById("fecha");
    let arrayFecha = [];
    arrayFecha.push(fecha.value);
    let fechaString = arrayFecha.toString();
    let separadorFecha = fechaString.replace(/(-)/gm,"/");
    let separadorHora = separadorFecha.replace(/(T)/gm," ");
    let fechaHora = separadorHora;
    return fechaHora;
}