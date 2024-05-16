
// Adiciona um evento de escuta para o envio do formulário
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    // Obtém os valores de peso e altura do formulário
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    // Verifica se os valores de peso e altura são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    // Calcula o IMC
    let imc = peso / (altura * altura);

    // Exibe o IMC na tela
    let resultado = document.createElement('p');
    resultado.textContent = `Seu IMC é ${imc.toFixed(2)}.`;

    // Determina o status do IMC
    if (imc < 18.5) {
        resultado.textContent += ' Abaixo do peso ideal.';
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado.textContent += ' Peso normal.';
    } else if (imc >= 25 && imc < 29.9) {
        resultado.textContent += ' Sobrepeso.';
    } else {
        resultado.textContent += ' Quadro de obesidade.';
    }

    // Limpa a área de resultados e adiciona o novo resultado
    let areaResultado = document.getElementById('resultado');
    areaResultado.innerHTML = '';
    areaResultado.appendChild(resultado);
});

