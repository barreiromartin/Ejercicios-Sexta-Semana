function numeroRandom(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function generador() {

    let datos = [];

    for(i = 0 ; i < 10 ; i++ ) {
        random = numeroRandom(1, 100);
        datos.push(random);
    }

    resultado = datos;

    return resultado;
}