function fibonaci(cant) {
    let aux = [];
    
    for(i = 0; i < cant; i++){
        if(i == 0){
            aux[i] = 0;

        }else if(i == 1){
            aux[i] = 1;

        }else{
            aux[i] = aux[i-1] + aux[i-2];
        }
    }

    return aux
}
