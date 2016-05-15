/**
 * Created by Carmen on 12/05/2016.
 */

//console.log('arranco');

/**
 * funcion que recoge un valor y comprueba si ese valoe es var o impar
 * @param valor -- numero que capturo del formulario
 * @returns {boolean} --devuelvo true si es par / false si es impar
 */
function comprobarNumeroPar(valor) {

    if (valor % 2 == 0) {
        return true;
    }
    else {
        return false;
    }

}


function initialize() {

    //boton para lanzar la aplicacion
    var btnComprobar = document.getElementById('btnComprobar');

    //nodo donde pongo el resultado
    var resultado = document.getElementById('resultado');

    //manejador eventos del boton
    btnComprobar.addEventListener('click', function () {

        //capturo el numero del formulario
        var numero = document.getElementById('numero').value;

        //reseteo el nodo
        resultado.innerHTML = "";

        //console.log(numero);

        //si el numero es par
        if (comprobarNumeroPar(numero)) {
            //console.log('par');
            resultado.innerHTML = "<div class=\"alert alert-success\" role=\"alert\">PAR</div>";
        }
        //si el numero es impar
        else {
            //console.log('impar');
            resultado.innerHTML = "<div class=\"alert alert-danger\" role=\"alert\">IMPAR</div>";
        }
    });


}

window.onload = initialize;