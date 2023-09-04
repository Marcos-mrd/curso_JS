document.addEventListener("DOMContentLoaded", function() {
    // Selecionar o botão e a imagem
    const botaoEncontrarCachorrinho = document.getElementById("encontrarCachorrinho");
    const imagemCachorrinho = document.querySelector("#parque img");
  
    // Adicionar um evento de clique ao botão
    botaoEncontrarCachorrinho.addEventListener("click", function() {
      // Mudar a cor de fundo do parque para uma cor brilhante
      const parque = document.getElementById("parque");
      parque.style.backgroundColor = "yellow";
  
      // Exibir a imagem do cachorrinho
      imagemCachorrinho.style.display = "block";
    });
  });