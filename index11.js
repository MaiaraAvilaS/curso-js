function metodos(){

    const carros =[
        {
            nome: "Fox",
            ano: 2005,
            km: 18000,
        },
        {
            nome: "Gol",
            ano: 2017,
            km: 15000,
        },
        {
            nome: "Uno",
            ano: 2023,
            km: 2000,
        }
    ];

    carros.map((item) => console.log(item.ano));
}

metodos()