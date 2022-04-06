function __main__(){
    let continuar = true;

    do{
        let opcion;
        opcion = entradaConsola("Selecciona el número para proceder a la acción." +
        "\n1 - Ingresar número." +
        "\n2 - Mostrar números." +
        "\n3 - Terminar programa.");

        let numeros = [];
        
        switch (opcion) {
            case 1: //Ingresar número
                numeroprueba = entradaConsola("Quiero numero");
                numeros.push(numeroprueba);

                break;

            case 2: //Mostrar números
                console.log(numeros);
                break;
                
            case 3: //Terminar programa
                continuar = false;
                console.log("Chao chao");
                break;

        }

    } while (continuar);
}

__main__();