const form = document.getElementById('formulario');
let numeroA = document.getElementById('campoA');
let numeroB = document.getElementById('campoB');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const msg = document.getElementById('Mensagem');
    const msgSucesso = `<b>Sucesso</b> o número <b>B:${numeroB.value}</b> é maior que número <b>A:${numeroA.value}</b>.`;
    const msgInvalido = '<b>[INVÁLIDO]</b> O valor de número A é maior que o de número B.';
    const msgIguais = `O valor do número <b>A:${numeroA.value}</b> é igual ao do número <b>B:${numeroB.value}</b>.`;

    const valorNumeroA = parseInt(numeroA.value);
    const valorNumeroB = parseInt(numeroB.value);
    

    if (valorNumeroB > valorNumeroA) {
        msg.innerHTML = msgSucesso;
        msg.style.backgroundColor = "green";
        numeroB.style.boxShadow = "";
    } else if (valorNumeroA > valorNumeroB) {
        msg.innerHTML = msgInvalido;
        msg.style.backgroundColor = "red";
        numeroB.style.boxShadow = "0 0 5px red";
    } else {
        msg.innerHTML = msgIguais;
        msg.style.backgroundColor = "";
        numeroB.style.boxShadow = "";
    }
})
