//funcion que almacena los datos en localStorage
export function almacenarDato(valor1, valor2) {

    let tareaListas = JSON.parse(localStorage.getItem('lista')) || [];
    let valores = {
        dato: valor1,
        Fecha: valor2
    }
    tareaListas.push(valores)
    localStorage.setItem('lista', JSON.stringify(tareaListas));
}