/**
 * Created by Carmen on 12/05/2016.
 */

// This function acts as a shortcut for document.getElementById().
// It takes an id string as its lone argument.
// It returns an element reference (i.e., an object).

/**
 * funcion de ataho para document.getElementById()
 * @param id -- id que quiero capturar
 * @returns {Element} -- elemento que capturo
 */
function $(id) {
    'use strict';
    //si no es undefined
    if (typeof id != 'undefined') {
        return document.getElementById(id);
    }
}

/**
 * funcion que va a poner un texto con la fecha de hoy en el nodo que pasemos
 * @param elementId -- nodo donde se va a poiner el mensaje
 * @param message -- mensaje que queremos poner
 */
function setText(elementId, message) {
    'use strict';

    if ((typeof elementId == 'string')
        && (typeof message == 'string')) {

        //capturo el nodo pasondo al document el elementid
        var output = document.getElementById(elementId);

        //actualizo el innertext con el mensaje
        if (output.textContent !== undefined) {
            output.textContent = message;
        } else {
            output.innerText = message;
        }

    }
}

/**
 * funcion que devuelve un numero aleatorio
 * @param max -- paso el numero maixmo para ese aleatorio
 * @returns {number} -- devuelvo el numero
 */
function getRandomNumber(max) {
    'use strict';

    //genero el numero aleatorio
    var n = Math.random();

    //si el valor maximo es number
    //multiplico el aleatorio por las veces de ese maximo
    //saco el absoluto del aleatorio
    if (typeof max == 'number') {
        n *= max;
        n = Math.floor(n);
    }

    return n;

}


function initialize() {
    'use strict';

    //variable que almacena los numeros
    var numbers = '';

    //saco 6 numeros del 0 al 100
    for (var i = 0; i < 6; i++) {
        numbers += getRandomNumber(100) + ' ';
    }

    // muestro los numeros
    setText('output', numbers);

} // End of showNumbers() function.
window.onload = initialize;