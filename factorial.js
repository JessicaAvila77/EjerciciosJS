

function factorial(n){

    if (n===1){
        return 1;
    } else {
       
        for (let i=1; i<=n; i++){
                   
           return n * factorial(n-1);
        }            

    } 
  

}

function imprimir(n){

    for (let i=1; i<=n; i++){

        console.log(`factotrial ${i}: ${factorial(i)}`);

    }

}


let valorfor = 8;

if (valorfor> 1){
    imprimir(valorfor);
}else{
    console.log('Ingrese un valor mayor a 1');
}