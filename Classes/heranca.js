class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado){
            console.log("Já está ligado.")
            return;
        }
        this.ligado = true;
    }
}

//extends é para puxar o parâmetro da classe dispositivo
//super é para trazer para dentro do smartphone o nome que está em dispositivo

class SmartPhone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

var s1 = new SmartPhone("Samsung", "Preto", "Galaxy A71");
console.log(s1); //dispositivo desligado
s1.ligar(); //chamando a primeira vez para ligar o dispositivo
s1.ligar(); //dispositivo ligado - apresenta a mensagem