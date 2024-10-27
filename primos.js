

function primos(numero){

    //los numeros menores que 2, no son primos

    if (numero < 2){
        return false;
    }

    //este ciclo verifica que el numero ingresado es divisible 
    //por algun numero entre 2 y el numero anterior a el mismo,
    //ya sabemos que todos numero es divisible entre 1 el mismo
    //pero si encontramos en el ciclo un divisor igual a 0 no es primo.
   let acum = 0;
    for(let i=2; i < numero; i++ ){

        if(numero % i === 0){
            acum ++;           
        }
    }   
    
    if (acum>0){
        return false;

    }else{
        return true;
    }
    

}

let num = 19;

if (primos(num)){
    console.log('es numero primo');
}else{
    console.log('no es numero primo');
}




