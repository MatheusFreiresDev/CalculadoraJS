// Selecionando elementos do DOM
const input = document.getElementById('input');
const result = document.getElementById('resultado');
const keys = document.querySelectorAll('.keys');
const buttonCopiar = document.getElementById('bnt-copy');
const bntThema = document.getElementById('theme-btn');
const cleanButton = document.getElementById('clean');
const equalButton = document.getElementById('equal');

// Lista de teclas permitidas
const valueKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
    '+', '-', '*', '/', '.', '(', ')'];

// Evento para capturar entrada do teclado
input.addEventListener('keydown', function (ev) {
    ev.preventDefault(); // Evita entrada padrão do teclado

    if (valueKeys.includes(ev.key)) {
        input.value += ev.key; // Adiciona valor ao input
    } else if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1); // Remove último caractere
    } else if (ev.key === 'Enter') {
        calcular(); // Executa o cálculo
    }
});

// Evento para capturar cliques nos botões numéricos e operadores
keys.forEach(function (key) {
    key.addEventListener('click', function () {
        input.value += key.value;
    });
});

// Evento para limpar os campos de input e resultado
cleanButton.addEventListener('click', function () {
    input.value = '';
    result.value = '';
    buttonCopiar.innerText = "Copiar";
});


// Evento para calcular o resultado ao clicar no botão de igual
equalButton.addEventListener('click', calcular);

// Função que realiza o cálculo
function calcular() {
    result.value = 'erro, digite uma conta valida!';
    result.value = eval(input.value);
}

// Evento para alternar o tema da página
bntThema.addEventListener('click', function () {
    if (bntThema.dataset.theme === 'dark') {
        document.body.classList.toggle('is-white');
    }
});

// Evento para copiar o resultado ao clicar no botão
buttonCopiar.addEventListener('click', function () { 
    if (buttonCopiar.innerText === 'Copiar') {
        buttonCopiar.innerText = 'Copiado!';
        console.log(result.value);
        navigator.clipboard.writeText(result.value);
    }
});
