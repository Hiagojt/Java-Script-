console.log("Trabalhando com Listas");
// // const salvador = "Salvador";
// const saoPaulo = "São Paulo";
// const riodeJaneiro = "Rio de Janeiro";

const listaDeDestinos = new Array(
    "salvador",
    "São Paulo",
    "Rio de Janeiro"
);

listaDeDestinos.push("Curitiba");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);

console.log(listaDeDestinos[1]);
console.log(listaDeDestinos);

