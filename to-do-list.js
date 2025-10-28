// ===== To Do List (versão in-memory) =====

// 1️⃣ Crie uma variável (array) para armazenar as tarefas

var tarefas = ["arrumar a cama", "lavar a louça"];

// 2️⃣ Crie uma função para adicionar uma tarefa
// - Essa função deve receber o nome da tarefa como parâmetro

function adicionarTarefa(nomeTarefa){
    tarefas.push(nomeTarefa)
    
}

// - Adicione a tarefa ao array
// - Mostre no console uma mensagem confirmando a adição
 
adicionarTarefa("Varrer")
console.log(tarefas)
console.log("Tarefa adicionada:" +tarefas[2]);

// 3️⃣ Crie uma função para listar as tarefas
// - Verifique se o array está vazio
//   - Se estiver, mostre uma mensagem dizendo que não há tarefas
//   - Se tiver tarefas, percorra o array e exiba cada uma numerada

/*function listarTarefas(tarefas){
    if(tarefas == 0){ 
        console.log("Tarefa Vazia!")
    }else if (tarefas == "Lavar"){
        console.log("Tarefa Iniciada")

    }
}
listarTarefas(tarefas);*/


// 4️⃣ Crie uma função para remover uma tarefa
// - A função deve receber o número da tarefa (índice)
// - Verifique se o índice é válido
// - Se for, remova a tarefa e mostre no console qual foi removida
// - Caso contrário, mostre uma mensagem de erro


function removerTarefa(nomeTarefa){
    const indice = tarefas.indexOf(nomeTarefa);
    tarefas.splice(indice, 1);
    console.log(`Remover tarefa ${indice}.`)

}

removerTarefa("arrumar a cama") 

// 5️⃣ Crie uma função principal (main)
// - Dentro dela, simule algumas ações:
//   - Adicionar 2 ou 3 tarefas
//   - Listar as tarefas
//   - Remover uma delas
//   - Listar novamente
// - Finalize mostrando uma mensagem de encerramento


// 6️⃣ Chame a função principal para iniciar o programa
