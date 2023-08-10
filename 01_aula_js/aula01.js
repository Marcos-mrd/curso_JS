
    let n1;
    let n2;

function soma(){
    n1 = (prompt("Digite um valor:"));
    n2 = (prompt("Digite um segundo valor:"));
    
    let resultado = parseInt(n1 + n2);

    alert ("A soma entre os valores :" + resultado);
}   

function subtracao(){
    n1 = (prompt("Digite um valor:"));
    n2 = (prompt("Digite um segundo valor:"));
    
    let resultado = parseInt(n1 - n2);

    alert (`A subtracao entre os valores : ${resultado}`);
}

function multiplicacao(){
    n1 = parseInt(prompt("Digite um valor:"));
    n2 = parseInt(prompt("Digite um segundo valor:"));
    
    let resultado = parseInt(n1 * n2);

    alert (`A multiplicacao os valores :${resultado}`);
}   