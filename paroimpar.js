let parOImpar = function(numero){
    if (numero !=0) {
        return numero%2==0 ? 'El numero es par' : 'El numero es impar'
    }else{
        return 'error'
    }    
}
console.log(parOImpar(2))
