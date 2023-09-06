 const incrementar = document.querySelector("#incrementButton");
 const num = document.querySelector("#counter");

 const diminuir = document.querySelector("#diminuir");

    let contador = 0;


 incrementar.addEventListener("click", function() {
    contador ++ ;

    num.textContent = contador;

    //A propriedade textContent é uma propriedade de elementos HTML que representa o texto contido dentro desse elemento. Em outras palavras, ela permite acessar e modificar o texto que está visível para o usuário dentro de um elemento HTML.
 });



 diminuir.addEventListener("click", function(){

    if(contador > 0 ){
        contador -- ;

        num.textContent = contador;
    }

    else{
        removeEventListener.diminuir;
    }


 });


