/* En ejercicios anteriores, generamos una agenda personal donde
almacenabamos un solo perfil. En esta ocasión, deberemos crear una
agenda de contactos para poder almacenar más de un perfil. Se podrá
utilizar el mismo objeto generado anteriormente. Las exigencias son las
siguientes:
- Nuestra agenda será básicamente un array que contiene los objetos
del tipo Perfil, pues se pueden añadir cualquier tipo de variable a un
array.
- La agenda tiene un límite de 5 usuarios, sin importar el orden de los
mismos, por lo que necesitaremos controlar el tamaño cuando
queramos introducir un perfil nuevo.
- El menú que se le presenta al usuario deberá contener las siguientes
opciones:
Programación - DANIEL CASTELAO
1- Crear perfil
2- Borrar perfil, dando dos opciones
    - Por índice (del array)
    - Por nombre
3- Modificar perfil, dando dos opciones
    - Por índice (del array)
    - Por nombre
4- Mostrar un perfil, dando dos opciones
    - Por índice
    - Por nombre
5- Mostrar todos los perfiles
6- Salir
Pista: Para buscar por nombre en un array, tendremos que buscar en un
bucle uno a uno y comparando el nombre que solicita el usuario con el
nombre de cada perfil.

*/
function __main__() {
    let continuar = true;
    let agenda = [];
    var mostrarUsuario = "";
    var aux;
    var modificarDato = "";

    do {

        opcion = parseInt(entradaConsola("1 - Crear Perfil." +
            "\n2 - Borrar Perfil" +
            "\n3 - Modificar Perfil" +
            "\n4 - Mostrar un Perfil" +
            "\n5 - Mostrar TODOS los Perfiles" +
            "\n6 - Salir"));

        switch (opcion) {
            case 1: // Crear Perfil
                if (agenda.length < 5) {
                    nombre = entradaConsola("Escribe el Nombre:");
                    telefono = entradaConsola("Escribe el Teléfono:");
                    email = entradaConsola("Escribe el Email:");

                    nuevo_usuario = crear_usuario(nombre, telefono, email);
                    agenda.push(nuevo_usuario);
                    console.log(agenda);

                } else {
                    alert("Has alcanzado el número máximo de registros.");
                }
                break;
            case 2: //Borrar Perfil
                seleccionarPerfil = entradaConsola("Escribe el número del perfil o su Nombre.");

                for (i = 0; i <= agenda.length; i++) {
                    aux = agenda[i];
                    if (i == seleccionarPerfil || aux.getNombre() == seleccionarPerfil) {
                        mostrarUsuario = "Usuario " + i + ":\n" +
                            "Nombre: " + aux.getNombre() +
                            "\nTelefono: " + aux.getTelefono() +
                            "\nEmail: " + aux.getEmail() +
                            "\n---------------\n";

                        salidaConsola(mostrarUsuario);
                    }
                }
                seguro = entradaConsola("¿ESTÁS SEGURO DE BORRAR ESTE USUARIO?\nSI\nNO");
                if (seguro == "si" || seguro == "SI" || seguro == "Si") {
                    agenda[i].pop();
                    alert("entrada de agenda borrada.");
                }


            case 3: //Modificar Perfil
                seleccionarPerfil = entradaConsola("Escribe el número del perfil o su Nombre.");

                for (i = 0; i <= agenda.length; i++) {
                    aux = agenda[i];
                    if (i == seleccionarPerfil || aux.getNombre() == seleccionarPerfil) {
                        mostrarUsuario = "Usuario " + i + ":\n" +
                            "Nombre: " + aux.getNombre() +
                            "\nTelefono: " + aux.getTelefono() +
                            "\nEmail: " + aux.getEmail() +
                            "\n---------------\n";

                        salidaConsola(mostrarUsuario);
                    }
                }
                opcionModificar = parseInt(entradaConsola("Selecciona el dato a editar del usuario" +
                    "\n1 - Editar nombre." +
                    "\n2 - Editar Teléfono." +
                    "\n3 - Editar Email." +
                    "\n4 - Salir"));

                switch (opcionModificar) {
                    case 1: //Nombre
                        modificarDato = entradaConsola("Escribe el nuevo nombre de Perfil.")
                        aux.cambiarNombre(modificarDato);
                        break;

                    case 2: //Telefono
                        modificarDato = entradaConsola("Escribe el nuevo número de Teléfono del Perfil.")
                        aux.cambiarNombre(modificarDato);
                        break;

                    case 3: //Email
                        modificarDato = entradaConsola("Escribe la nueva dirección de Email de Perfil.")
                        aux.cambiarNombre(modificarDato);
                        break;

                    case 4: //SALIR
                        alert("Saliendo del modo Edición.");
                        break;
                }




            case 4: //Listo
                seleccionarPerfil = entradaConsola("Escribe el número del perfil o su Nombre.");

                for (i = 0; i <= agenda.length; i++) {
                    aux = agenda[i];
                    if (i == seleccionarPerfil || aux.getNombre() == seleccionarPerfil) {
                        mostrarUsuario = "Usuario " + i + ":\n" +
                            "Nombre: " + aux.getNombre() +
                            "\nTelefono: " + aux.getTelefono() +
                            "\nEmail: " + aux.getEmail() +
                            "\n---------------\n";

                        salidaConsola(mostrarUsuario);
                    }
                }

            case 5: //MOstrar Todos LISTO
                for (i = 0; i <= agenda.length; i++) {
                    aux = agenda[i];

                    mostrarUsuario = "Usuario " + i + ":\n" +
                        "Nombre: " + aux.getNombre() +
                        "\nTelefono: " + aux.getTelefono() +
                        "\nEmail: " + aux.getEmail() +
                        "\n---------------\n";

                    salidaConsola(mostrarUsuario);
                }
            case 6:
                alert("Saliendo chao chao.");
                continuar = false;
                break;

        }


    } while (continuar)
}

__main__();