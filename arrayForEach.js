var a = [10, 20, 30, 40, 50, 60];

// for(let valor of a){
//     console.log(valor);
// }

//usando o For Each:
a.forEach(valor => console.log(valor));

//somando os valores:
total = 0
a.forEach(valor => {
    total += valor;
})
console.log(total);