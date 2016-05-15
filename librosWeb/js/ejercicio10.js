/**
 * Created by Carmen on 12/05/2016.
 */

//console.log('arranco');

/**
 * funcion que devuelve una cadena invertida
 * @param cadena -- cadena que quiero invertir
 * @returns {string} --devuevlo la cadena invertida
 */
function invertirCadena(cadena) {
    //capturo la longitud de la cadena para iniciar el contador
    var contador = cadena.length;

    //inicio la cadenainvertiva
    var cadenaInvertida = "";

    //mientras contador tenga caracteres que recorrer
    while (contador >= 0) {

        //paso el ultimo caracter al principio
        cadenaInvertida = cadenaInvertida + cadena.charAt(contador);
        //disminuyo el contador
        contador--;
    }

    //devuevlo la cadena invertida
    return cadenaInvertida;
}

/**
 * funcion que comprueba una cadena de texto si es mayuscula, minuscula o mezcla
 * @param cadena -- cadena que hay que comprobar
 * @returns {number} -- devuelvo un numero dependiendo del resultado
 */
function comprobarPalindromo(cadena) {

    var cadena_minuscula = cadena.toLowerCase();
    var cadena_espacio = cadena_minuscula;

    cadena_espacio = cadena_espacio.replace(/\s/g, "");

    var cadena_invertida = invertirCadena(cadena_espacio);

 
    //inicio la variable de resutlado
    var resultado = 0;

    //si no paso una cadena vacia
    if (cadena != "") {

        //si las cadenas es palindromo devuevlo 1
        if (cadena_espacio == cadena_invertida) {
            resultado = 1;
        }
        //sino devuelvo 2
        else {
            resultado = 2;
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

        if (comprobarPalindromo(cadena) == 1) {
            resultado.innerHTML = "<div class=\"alert alert-success\" role=\"alert\">La cadena es palindromo</div>";
        }
        else if (comprobarPalindromo(cadena) == 2) {
            resultado.innerHTML = "<div class=\"alert alert-danger\" role=\"alert\">La cadena no es palindromo</div>";
        } else {
            resultado.innerHTML = "<div class=\"alert alert-warning\" role=\"alert\">Introduce una cadena válida</div>";
        }

        comprobarPalindromo(cadena);


    });


}

window.onload = initialize;