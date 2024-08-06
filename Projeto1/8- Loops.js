console.log("\n Trabalhando com Condicionais");

const listaDeDestinos = new Array(
    "salvador",
    "São Paulo",
    "Rio de Janeiro"
);

const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log("\n Destino possiveis");
console.log(listaDeDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
   
let contador = 0;
let destinoExiste = false;
while (contador <3){
    if (listaDeDestinos[contador] == destino){
        console.log("Destino existe");
        destinoExiste = true;
        break;
    }

    contador += 1;
     
}
    
console.log("Destino existe:", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem")    
}else{
    console.log("Desculpe tivemos um erro!");
}