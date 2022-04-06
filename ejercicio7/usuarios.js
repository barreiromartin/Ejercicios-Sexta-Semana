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
- Crear perfil
    - Borrar perfil, dando dos opciones
    - Por índice (del array)
- Por nombre
- Modificar perfil, dando dos opciones
- Por índice (del array)
- Por nombre
- Mostrar un perfil, dando dos opciones
- Por índice
- Por nombre
- Mostrar todos los perfiles
- Salir
Pista: Para buscar por nombre en un array, tendremos que buscar en un
bucle uno a uno y comparando el nombre que solicita el usuario con el
nombre de cada perfil.

*/

function crear_usuario(nombre, telefono, email) {

    var usuario = function (nombre, telefono, email) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;

        this.getNombre = function () {
            return this.nombre;
        }

        this.setNombre = function (nombre) {
            this.nombre = nombre;
        }

        this.getTelefono = function () {
            return this.telefono;
        }

        this.setTelefono = function (telefono) {
            this.telefono = telefono;
        }

        this.getEmail = function () {
            return this.email;
        }

        this.setEmail = function (email) {
            this.email = email;
        }

        this.toString = function () {
            resultado = "Nombre: " + this.nombre +
                "\nTelefono: " + this.telefono +
                "\nEmail: " + this.email;

            return resultado;
        }
    }

    let new_usuario = 0;

    new_usuario = new usuario(nombre, telefono, email);

    return new_usuario;

}