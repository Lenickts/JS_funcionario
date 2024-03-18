function multiplicar(x,y) {
    return x * y;
}

var a = multiplicar(4,2);
console.log(a);

var b = multiplicar(6,7);
console.log(b);

function somaValores(a,b=2,c=6){ //valor de b e c definido na função
    var total = a + b +c
    return total;
}

var f = somaValores(8);
console.log(f);