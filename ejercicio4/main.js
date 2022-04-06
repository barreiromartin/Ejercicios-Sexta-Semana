/*
Crea un programa que dado una cantidad de datos X y un rango de estos,
genere un array con X cantidad de datos generados al azar en el rango
pedido y muestralos por pantalla.
*/

function __main__(){
    
    let opcion;
    let continuar = true;

    do{
       let datos = [];
       let datosPares = [];
       let datosImpares = [];

        datos = generador();

        console.log("Los datos generados son:\n" + datos);

        for (i = 0; i <= 10; i++) {
            if ( (datos[i] % 2) == 0 ){
                datosPares.push(datos[i]);

            }else{
                datosImpares.push(datos[i]);

            }
        }
        console.log("Los datos PARES son:\n" + datosPares);
        console.log("Los datos IMPARES son:\n" + datosImpares);


        opcion = entradaConsola("¿Continuar generando datos?\n1 - Si\n2 - No");

        if(opcion == 2){
            continuar = false;
        }
        
    } while (continuar);
    

}

__main__();