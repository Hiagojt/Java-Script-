const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesAtualizados = new Set(nomes);

const listaDeNomesAtualizados = [... new Set(nomes)]
console.log(listaDeNomesAtualizados);
