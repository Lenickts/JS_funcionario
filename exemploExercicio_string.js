var url = "http://minhaempresa.com.br/filme?nome=poder&atores=Lucas,Guilherme";

const parametros = url.split("?")[1]; //trabalhando com a segunda parte da url, agora dividida após o "?"
console.log(parametros);

console.log("");

const val = parametros.split("&");
console.log(val);

for(let i = 0; i < valores.length; i++) {
    if(valores[i].startsWith("atores=")){
        valores[i] = "atores=" + valores[i].substring(7).toUpperCase(); 
    }
}
console.log(valores);