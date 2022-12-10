let entradaDatos = document.getElementById("textarea")
let btnAgregar = document.getElementById("btnagregar")
let tareaTexto = document.getElementById("tarea_text")
let contenedor = document.getElementById("contenedor_listas")
btnAgregar.addEventListener('click', guardarDato)







function guardarDato() {
    let dato = entradaDatos.value

    let cardItem = document.createElement('li');
    cardItem.className = 'tarea';
    contenedor_listas.appendChild(cardItem);

    let revision = document.createElement('input');
    revision.type = 'checkbox';
    revision.className = "check";
    cardItem.appendChild(revision);

    let texto = document.createElement('p');
    texto.innerText = dato
    texto.className = 'tarea_text';
    cardItem.appendChild(texto);

    let btnBorrar = document.createElement('button');
    btnBorrar.className = 'btn_borrar';
    btnBorrar.innerText = 'borrar'
    cardItem.appendChild(btnBorrar);
    btnBorrar.addEventListener('click', function borrar() {
        cardItem.remove()
    })

    contenedor.appendChild(cardItem)
}

