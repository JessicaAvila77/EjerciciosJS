
function descomposicionPrimos(n) {
    let i = 2;
    let factores = [];
    
    while (n > 1) {
        while (n % i === 0) {
            factores.push(i);
            n /= i;
        }
        i++;
    }
    
    return factores;
}

// Ejemplo de uso
const numero = 9;
console.log(`Factores primos de ${numero}: ${descomposicionPrimos(numero).join(' × ')}`);