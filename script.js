let entradaDatos = document.getElementById("textarea");
let btnAgregar = document.getElementById("btnagregar");
let tareaTexto = document.getElementById("tarea_text");
let contenedor = document.getElementById("contenedor_listas");
let fecha = document.getElementById("fecha");

btnAgregar.addEventListener('click', guardarDato);

function formatoFecha() {

    let arrayFecha = [];
    arrayFecha.push(fecha.value);
    let nuevaCadena = arrayFecha.toString();
    let mejoraCadena = nuevaCadena.replace(/(-)/gm,"/");
    let ultimaModificacion = mejoraCadena.replace(/(T)/gm," ");
    return ultimaModificacion;
}


function guardarDato() {
    let dato = entradaDatos.value;

    let cardItem = document.createElement('li');
    cardItem.className = 'tarea';

    contenedor_listas.appendChild(cardItem);

    let revision = document.createElement('input');

    revision.type = 'checkbox';
    revision.className = "check";

    cardItem.appendChild(revision);

    let separador = document.createElement('span');
    cardItem.appendChild(separador);

    let fecha = document.createElement('p');
    fecha.innerText = formatoFecha();
    fecha.className = 'fecha_texto';
    separador.appendChild(fecha);

    let texto = document.createElement('p');
//en la variable texto almacenamos la variable dato
// (dicha variable se obtiene del textarea)
    texto.innerText = dato;
    texto.className = 'tarea_text';

    separador.appendChild(texto);

    let btnBorrar = document.createElement('button');

    btnBorrar.className = 'btn_borrar';
    btnBorrar.innerText = 'borrar';

    cardItem.appendChild(btnBorrar);

    btnBorrar.addEventListener('click', function borrar() {
        cardItem.remove();
    })

    contenedor.appendChild(cardItem);
}


// localStorage.setItem(key: DOMString, JSON.stringify(dato)

