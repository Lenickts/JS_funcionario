//Criar um programa que calcule o indice de massa corporal usando função

function pessoa(nome, sobrenome, peso,altura){
    return {
        nome,
        sobrenome,
        peso,
        altura,
        calculoIMC(){
            const indice = this.peso/(this.altura**2).toFixed(1); //tiFixed(1) para ter 1 casa decimal
            
            if(indice < 18.5){
                console.log("Você está abaixo do peso!");
            }
            else if(indice >= 18.5 && indice <=24.9){
                console.log("Peso normal");
            }
            else if(indice >= 25 && indice <= 29.9){
                console.log("Sobrepeso");    
            }
            else if(indice > 30 && indice <= 34.9){
                console.log("Obesidade grau I");
            }            
        }
    }
}

const p1 = pessoa("Jonatan","Silva",60, 1.67);
const p2 = pessoa("Diogo","Albuquerque",40, 1.90);
const p3 = pessoa("Gisele","Andrade",45, 1.50);

console.log(p2);
p2.calculoIMC();

