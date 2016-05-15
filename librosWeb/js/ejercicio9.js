/**
 * Created by Carmen on 12/05/2016.
 */

//console.log('arranco');

/**
 * funcion que comprueba una cadena de texto si es mayuscula, minuscula o mezcla
 * @param cadena -- cadena que hay que comprobar
 * @returns {number} -- devuelvo un numero dependiendo del resultado
 */
function comprobarCadena(cadena) {

    //inicio la variable de resutlado
    var resultado = 0;

    //si no paso una cadena vacia
    if (cadena != "") {
        //si la cadena es mayuscula devuelvo 1
        if (cadena == cadena.toUpperCase()) {
            resultado = 1;
        }
        //si la cadena es minuscula devuelvo 2
        else if (cadena == cadena.toLowerCase()) {
            resultado = 2;
        }
        //si la cadena es una mezcla devuelvo 3
        else {
            resultado = 3;
        }

    }


    return resultado;

}


function initialize() {

    //boton para lanzar la aplicacion
    var btnComprobar = document.getElementById('btnComprobar');

    //nodo donde pongo el resultado
    var resultado = document.getElementById('resultado');

    //manejador eventos del boton
    btnComprobar.addEventListener('click', function () {

        //capturo el numero del formulario
        var cadena = document.getElementById('cadena').value;


        //reseteo el nodo
        resultado.innerHTML = "";

        //console.log(numero);

        if (comprobarCadena(cadena) == 1) {
            resultado.innerHTML = "<div class=\"alert alert-success\" role=\"alert\">La cadena es Mayúsculas</div>";

        }
        else if (comprobarCadena(cadena) == 2) {
            resultado.innerHTML = "<div class=\"alert alert-danger\" role=\"alert\">La cadena es Minúsculas</div>";
        }
        else if (comprobarCadena(cadena) == 3) {
            resultado.innerHTML = "<div class=\"alert alert-warning\" role=\"alert\">La cadena es una mezcla de Mayúsculas y Minúsculas</div>";
        }
        else {
            resultado.innerHTML = "<div class=\"alert alert-info\" role=\"alert\">Introduce una cadena válida</div>";
        }


    });


}

window.onload = initialize;