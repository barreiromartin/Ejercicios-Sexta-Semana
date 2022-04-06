function numeroRandom(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function generador(min, max, cant) {
    let aux_min = min;
    let aux_max = max;
    let aux_cant = cant;
    let datos = [];

    for(i = 0 ; i < aux_cant ; i++ ) {
        random = numeroRandom(aux_min, aux_max);
        datos.push(random);
    }

    resultado = datos;

    return resultado;
}