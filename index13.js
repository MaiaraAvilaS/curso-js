function concatenar (){
    var nomes = ["Henrique", "João", "Andre", "Alberto"];

    var nomesAdicionar = ["Carlos", "Abel", "Isaac"];

    //var nomesConcatenar = nomes.concat(nomesAdicionar)
    var nomesSpread = [...nomes, ...nomesAdicionar]

    console.log(nomes);
    console.log(nomesAdicionar);
    //console.log(nomesConcatenar);
    console.log(nomesSpread[5])

}

concatenar();



