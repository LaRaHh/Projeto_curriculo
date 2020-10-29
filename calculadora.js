
let botao = document.querySelector(".botao-calcula");

botao.addEventListener('click', calculoImc);

function calculoImc(){
    let altura = parseFloat(document.querySelector("#altura").value);
    let peso = parseFloat(document.querySelector("#peso").value);
    let soma = Math.floor(peso / (altura * altura));
    console.log(altura)
    console.log(peso)
    
    document.getElementById('imc').setAttribute("value", `Seu IMC: ${soma}`);

    
}

