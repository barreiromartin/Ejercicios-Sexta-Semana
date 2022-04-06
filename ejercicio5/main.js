/*
Crea un programa que genere los 20 primeros números de la sucesión de
Fibonacci de forma matemática y no a mano. Almacena estos números en
un array y muestralo por pantalla.

Pista: La sucesión de Fibonacci es la que se obtiene de sumar cada número
con el anterior y empieza con 0 y 1 siempre: 0, 1, 1(1+0), 2(1+1), 3(1+2),
5(3+2), 8(5+3)...
*/

function __main__() {
    let datos;

    cant = entradaConsola("Cuantos valor quieres ver de la sucesiónde Fibonacci?");

    datos = fibonaci(cant);
    salidaConsola("La sucesión de " + cant + " :\n" + datos);

}

__main__();