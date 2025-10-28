

// let sobrenome = ["avila"]

// // array.push = adicionar
// sobrenome.push("szezecinski1")
// sobrenome.push("szezecinski2")

// // array.pop  = remover o ultimo
// sobrenome.pop()

// // array.  = remover especifico
// const indice = sobrenome.indexOf("szezecinski1");
// sobrenome.splice(indice, 1);

// console.log(sobrenome)

let plantas = ["espada", "la de cima"]

function adicionarNovaPlanta(nomeDaPlanta){
    plantas.push(nomeDaPlanta)
}

function regarPlanta(nomeDaPlanta){
    const indice = plantas.indexOf(nomeDaPlanta);
    console.log(`Planta regada ${indice}.`)
}

function removerPlanta(nomeDaPlanta){
    const indice = plantas.indexOf(nomeDaPlanta);
    plantas.splice(indice, 1);
    console.log(`Remover planta ${indice}.`)
}
                         
function mudarNomePlanta(nomeAtualDaPlanta, novoNomeDaPlanta){
    const indice = plantas.indexOf(nomeAtualDaPlanta);
    plantas[indice] = novoNomeDaPlanta;
}


adicionarNovaPlanta("da agua")
regarPlanta("espada")
regarPlanta("la de cima")
removerPlanta("espada")
mudarNomePlanta("la de cima", "cravos");

console.log(plantas)