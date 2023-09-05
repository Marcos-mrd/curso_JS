function soma(){
   var nums1 = (parseInt(document.querySelector("#num1").value));
   var nums2 = (parseInt(document.querySelector("#num2").value));
   var adicionar =  nums1 + nums2;
   var resultado = document.querySelector("#resultado")
   resultado.innerHTML = `<h1>A soma entre os valores! </h1> ${nums1} + ${nums2} =  ${adicionar}`;
}
function multiplicacao(){
    var nums1 = (parseInt(document.querySelector("#num1").value));
    var nums2 = (parseInt(document.querySelector("#num2").value));
    var adicionar =  nums1 * nums2;
    var resultado = document.querySelector("#resultado")
    resultado.innerHTML = `<h1>A multiplicação entre os valores! </h1> ${nums1} * ${nums2} =  ${adicionar}`;
 }
 function subtracao(){
    var nums1 = (parseInt(document.querySelector("#num1").value));
    var nums2 = (parseInt(document.querySelector("#num2").value));
    var adicionar =  nums1 - nums2;
    var resultado = document.querySelector("#resultado")
    resultado.innerHTML = `<h1>A subtração entre os valores! </h1> ${nums1} - ${nums2} =  ${adicionar}`;
 }

