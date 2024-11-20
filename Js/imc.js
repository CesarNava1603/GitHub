function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, ingresa valores válidos.");
        return;
    }

    const imc = peso / (altura * altura);
    const resultado = document.getElementById('resultado');
    const mensaje = document.getElementById('mensaje');

    resultado.textContent = `IMC: ${imc.toFixed(2)}`;
    
    let categoria = '';
    let color = '';

    if (imc < 18.5) {
        categoria = 'Bajo peso';
        color = '#00BFFF'; // Azul claro
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = 'Normal';
        color = '#32CD32'; // Verde
    } else if (imc >= 25 && imc < 29.9) {
        categoria = 'Sobrepeso';
        color = '#FFD700'; // Amarillo
    } else if (imc >= 30 && imc < 34.9) {
        categoria = 'Obesidad I';
        color = '#FF8C00'; // Naranja
    } else if (imc >= 35 && imc < 39.9) {
        categoria = 'Obesidad II';
        color = '#FF4500'; // Naranja rojizo
    } else if (imc >= 40) {
        categoria = 'Obesidad III';
        color = '#FF0000'; // Rojo
    }

    mensaje.textContent = categoria;
    mensaje.style.backgroundColor = color;
}
