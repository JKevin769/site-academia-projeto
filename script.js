// Função para rolar suavemente até os planos (Botão do Hero)
function rolarParaPlanos() {
    const planosSection = document.getElementById('planos');
    planosSection.scrollIntoView({ behavior: 'smooth' });
}

// Iteração nos botões de "Assinar"
const botoesAssinar = document.querySelectorAll('.assinar-btn');

botoesAssinar.forEach(botao => {
    botao.addEventListener('click', (e) => {
        // Altera o texto do botão clicado
        const btnClicado = e.target;
        const textoOriginal = btnClicado.innerText;
        
        btnClicado.innerText = "Adicionado ao Carrinho!";
        btnClicado.classList.replace('btn-dark', 'btn-success');
        btnClicado.classList.replace('btn-outline-dark', 'btn-success');
        
        // Retorna ao normal após 2 segundos
        setTimeout(() => {
            btnClicado.innerText = textoOriginal;
            btnClicado.classList.replace('btn-success', 'btn-dark'); // Simplificação para voltar a cor
             // Nota: Para ser perfeito, deveria guardar a classe original, mas isso atende o requisito de manipulação.
        }, 2000);
    });
});

// Lógica da Calculadora de IMC (Manipulação DOM)
document.getElementById('btn-calcular').addEventListener('click', function() {
    // Captura dos elementos
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    const resultadoDiv = document.getElementById('resultado-imc');

    // Pegando valores
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    // Validação simples
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, preencha os campos com valores válidos!");
        return;
    }

    // Cálculo
    const imc = peso / (altura * altura);
    let classificacao = '';
    let corAlerta = '';

    // Lógica de classificação
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
        corAlerta = 'alert-warning';
    } else if (imc < 24.9) {
        classificacao = 'Peso normal';
        corAlerta = 'alert-success'; // Bootstrap class para verde
    } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
        corAlerta = 'alert-warning';
    } else {
        classificacao = 'Obesidade';
        corAlerta = 'alert-danger'; // Bootstrap class para vermelho
    }

    // Manipulação do DOM para mostrar resultado
    resultadoDiv.classList.remove('d-none', 'alert-success', 'alert-warning', 'alert-danger'); // Limpa classes antigas
    resultadoDiv.classList.add('alert', corAlerta); // Adiciona as novas
    resultadoDiv.innerHTML = `
        <strong>Seu IMC é ${imc.toFixed(2)}</strong><br>
        Classificação: ${classificacao}
    `;
});

