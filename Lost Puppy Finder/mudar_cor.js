document.addEventListener("DOMContentLoaded", function() {
    // Selecionar o botão e a imagem
    const botaoEncontrarCachorrinho = document.getElementById("encontrarCachorrinho");
    const imagemCachorrinho = document.querySelector("#parque img");
  
    // Adicionar um evento de clique ao botão
    botaoEncontrarCachorrinho.addEventListener("click", function() {
      // Mudar a cor de fundo do parque para uma cor brilhante
      const parque = document.getElementById("parque");
      parque.style.backgroundImage = "yellow";
  
      // Exibir a imagem do cachorrinho
      imagemCachorrinho.style.display = "block";

      //destivar cachorro 



      //document.addEventListener("DOMContentLoaded", function() {: Isso começa um evento que será acionado quando o DOM estiver completamente carregado e pronto para ser manipulado. É uma prática comum colocar o código JavaScript dentro deste evento para garantir que ele não seja executado antes que a página esteja pronta.

      // const botaoEncontrarCachorrinho = document.getElementById("encontrarCachorrinho");: Isso seleciona o elemento de botão com o ID "encontrarCachorrinho" e o armazena na variável botaoEncontrarCachorrinho.

      //const imagemCachorrinho = document.querySelector("#parque img");: Isso seleciona a imagem dentro do elemento com o ID "parque" usando document.querySelector(). Ele encontra o elemento img dentro do elemento com ID "parque" e o armazena na variável imagemCachorrinho.

      //botaoEncontrarCachorrinho.addEventListener("click", function() {: Isso adiciona um evento de clique ao botão botaoEncontrarCachorrinho. Quando o botão é clicado, a função anônima (função vazia) dentro de addEventListener é executada.

       //const parque = document.getElementById("parque");: Isso seleciona o elemento com o ID "parque" e o armazena na variável parque.

       //parque.style.backgroundColor = "yellow";: Isso muda a cor de fundo do elemento com o ID "parque" para amarelo.

       //imagemCachorrinho.style.display = "block";: Isso faz a imagem do cachorrinho (previamente oculta com display: none no CSS) ser exibida, alterando a propriedade display para "block", tornando-a visível quando o botão é clicado.
    });
  });