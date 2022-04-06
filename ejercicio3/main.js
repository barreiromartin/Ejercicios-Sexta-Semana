/*
Crea un programa que dado una cantidad de datos X y un rango de estos,
genere un array con X cantidad de datos generados al azar en el rango
pedido y muestralos por pantalla.
*/

function __main__(){
    let min, max, cant;
    let opcion;
    let continuar = true;

    do{
        
        min = entradaConsola("Valor mínimo del dato:");
        max = entradaConsola("Valor máximo del dato:");
        cant = entradaConsola("Cantidad de datos:");

        datos = generador(min, max, cant);
        

        console.log("Los datos generados son:\n" + datos);

        datos_ordenados = datos.sort();
        console.log("Los datos ORDENADOS son:\n" + datos_ordenados);

        opcion = entradaConsola("¿Continuar generando datos?\n1 - Si\n2 - No");

        if(opcion == 2){
            continuar = false;
        }
        
    } while (continuar);
    

}

__main__();