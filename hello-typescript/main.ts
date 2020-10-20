var minhaVar = 'minha variável';

function minhaFunc(x, y) {
    return x + y;
}

//ES6 ou ES 2015
let num = 2;
const PI = 3.14;

var numeros = [1, 2, 3];
//Function
numeros.map(function(valor) {
    return valor * 2;
});

//Arrow function
numeros.map(valor => valor * 2);

class Matematica {
    soma(x, y){
        return x + y;
    }
}

//tipagem de variável
var n1: any = 'asdasda';
n1 = 4;