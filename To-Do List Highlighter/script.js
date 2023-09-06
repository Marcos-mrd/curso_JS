
//Função toggleTask(event):

//Esta função é executada quando você clica em uma tarefa da lista.


//-----------------------------------------------//


//task. Isso é feito com a linha const task = event.target;.
//event.target se refere ao elemento HTML que acionou o evento de clique.

//-------------------------------------------------//

//A próxima linha é task.classList.toggle('completed');. Isso é o coração da funcionalidade.

//classList é uma propriedade de elementos HTML que permite acessar e manipular as classes do elemento.

//toggle('completed') verifica se a classe 'completed' está presente na tarefa.
//Se a classe 'completed' não estiver presente, ela é adicionada, tornando o fundo da tarefa colorido (estilo definido no CSS).
//Se a classe 'completed' já estiver presente, ela é removida, desfazendo o destaque (removendo o fundo colorido).



function toggleTask(event) {
    const task = event.target;
    task.classList.toggle('completed'); // Adiciona ou remove a classe 'completed' ao clicar

    const resposta = en
}

