

function fibo(n){

    //desplegando los valores para 0 y 1 
    if (n===0){
        return 0;
    }else if (n===1){
        return 1;
    }else {

        //aca se da la recursividad de la funcion
        //el parametro que trae la funcion sumas las restas del valor inmediato anterior
        //y la resta del valor con 2 posiciones atras

        return fibo(n-1) + fibo(n - 2);

    }

}

function imprimefibo(num){

    for (let i = 0; i <= num; i++) {      
        //let f=i-1;

        //llama la funcion recursiva para cada numero de la secuencia for
        console.log(`Fibonacci ${i}:  ${fibo(i)}`);
        
    }

}


let vecefor=1;

if (vecefor >= 0){
    imprimefibo(vecefor);

}else{
    console.log('Ingrese un valor mayor o igual que 0');
}
