let bebida = "cha";
let valor = "";

switch (bebida) {
    case "cha":
        valor = "O chá custa R$ 5,90";
        break;
    case "cafe":
        valor = "O café custa R$ 10,00";
        break;
    case "leite":
        valor = "O leite custa R$ 8,50";
        break;
    default:
        valor = "Opção inválida. Escolha entre café, leite ou cha.";
        break;
}

console.log(valor);