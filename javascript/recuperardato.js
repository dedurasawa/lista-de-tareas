let contenedor = document.getElementById("contenedor_listas");

//recuperamos los datos del localstorage para mostrarlos en pantalla
//las veces que recarga la pagina
export function recuperarDato(v1, v2) {
    let datoAlmacenado = v1;
    let fechaAlmacenada = v2;

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
    fecha.innerText = fechaAlmacenada;
    fecha.className = 'fecha_texto';
    separador.appendChild(fecha);

    let texto = document.createElement('p');
    texto.innerText = datoAlmacenado;
    texto.className = 'tarea_text';
    separador.appendChild(texto);

    let btnBorrar = document.createElement('button');
    btnBorrar.className = 'btn_borrar';
    btnBorrar.innerText = 'borrar';
    cardItem.appendChild(btnBorrar);

    btnBorrar.addEventListener('click', function borrar() {
        cardItem.remove();
    })
    return contenedor;

}