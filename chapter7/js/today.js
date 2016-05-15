/**
 * Created by Carmen on 12/05/2016.
 */

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

function initialize() {
    'use strict';
    //capturo la fecha de hoy  // objeto date
    var today = new Date();
    //mensaje que quiero poner en el nodo
    var message = 'Hoy es ' + today.toLocaleDateString();
    message += ' y son las ' + today.getHours() + ':' + today.getMinutes();

    // llamo a la funcion para poner el mensaje
    setText('output', message);

}

window.onload = initialize;