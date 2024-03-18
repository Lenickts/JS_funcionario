var valorTotal = [0,0];
var valorProduto = [49.99, 29.99];
var qtde = [0,0];

function adicionarItem(item){
    var quantidade = document.getElementById('quantidade' + item);
    var total = document.getElementById('total' + item);
    
    qtde[item] += 1;
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtde[item];
    quantidade.innerHTML = qtde[item];
    total.innerHTML = valorTotal[item].toFixed(2);    
    valorCompra();
}

function removerItem(item){
    if(qtde[item] > 0){
        qtde[item] -=1;
        var quantidade = document.getElementById('quantidade' + item);
        var total = document.getElementById('total' + item);
        quantidade.innerHTML = qtde[item];
        valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtde[item];
        total.innerHTML = valorTotal[item].toFixed(2);
        valorCompra();
    }
}

function valorCompra(){
    var valorTotalCompra = document.getElementById('subtotal');
    
    var valor = 0;
    for(var i = 0; i < valorTotal.length; i++){
        valor += valorTotal[i];
    }
    valorTotalCompra.innerHTML = valor.toFixed(2);
}