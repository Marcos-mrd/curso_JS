const valor = document.querySelector("#caixa");
const botao = document.querySelector("#calcular");
const botao1 = document.querySelector("#calcular1");
const botao2 = document.querySelector("#calcular2");
const botao3 = document.querySelector("#calcular3");
const botao4 = document.querySelector("#calcular4");
const botao5 = document.querySelector("#calcular5");
const botao6 = document.querySelector("#calcular6");
const botao7 = document.querySelector("#calcular7");




botao.addEventListener("click", function () {
    console.log("a");
    if (valor.value > 0){
        alert(Math.sqrt(valor.value));
        valor.value = "";
    } else {
        alert("ERRO");
        valor.value = "";
    }


});
botao1.addEventListener("click", function () {
    console.log("a");
    if (valor.value > 0){
        alert(Math.pow(valor.value));
        valor.value = "";
    } else {
        alert("ERRO");
        valor.value = "";
    }


});
botao2.addEventListener("click", function () {
    console.log("a");
    if (valor.value > 0){
        alert(Math.hypot(valor.value));
        valor.value = "";
    } else {
        alert("ERRO");
        valor.value = "";
    }


});
botao3.addEventListener("click", function () {
    console.log("a");
    if (valor.value > 0){
        alert(Math.abs(valor.value));
        valor.value = "";
    } else {
        alert("ERRO");
        valor.value = "";
    }


});
botao4.addEventListener("click", function () {
    console.log("a");
    if (valor.value > 0){
        alert(Math.round(valor.value));
        valor.value = "";
    } else {
        alert("ERRO");
        valor.value = "";
    }


});
botao5.addEventListener("click", function () {
    console.log("a");
    if (valor.value > 0){
        alert(Math.ceil(valor.value));
        valor.value = "";
    } else {
        alert("ERRO");
        valor.value = "";
    }


});
botao6.addEventListener("click", function () {
    console.log("a");
    if (valor.value > 0){
        alert(Math.floor(valor.value));
        valor.value = "";
    } else {
        alert("ERRO");
        valor.value = "";
    }


});
botao7.addEventListener("click", function () {
    console.log("a");
    if (valor.value > 0){
        alert(Math.random(valor.value));
        valor.value = "";
    } else {
        alert("ERRO");
        valor.value = "";
    }


});



