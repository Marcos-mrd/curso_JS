function toggleResposta01() {
    var resposta01 = document.querySelector('.resposta01');
    

    if (resposta01.style.display === "block" || resposta01.style.display === "") {
        resposta01.style.display = "none";
    } else {
        resposta01.style.display = "block";
    }


}
function toggleResposta02() {
    var resposta02 = document.querySelector('.resposta02');
    if (resposta02.style.display === "block" || resposta02.style.display === "") {
        resposta02.style.display = "none";
    } else {
        resposta02.style.display = "block";
    }
}

function toggleResposta03() {
    var resposta03 = document.querySelector('.resposta03');
    if (resposta03.style.display === "block" || resposta03.style.display === "") {
        resposta03.style.display = "none";
    } else {
        resposta03.style.display = "block";
    }
}


//O método toggle() alterna entre hide() e show() para os elementos selecionados. Este método verifica a visibilidade dos elementos selecionados. show() é executado se um elemento estiver oculto. hide() é executado se um elemento estiver visível - Isso cria um efeito de alternância.


