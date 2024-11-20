function convertTemperature() {
    const tempValue = parseFloat(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;

    if (isNaN(tempValue)) {
        alert("Por favor, ingresa un valor válido.");
        return;
    }

    let result;

    // Conversión de Celsius
    if (fromUnit === "C") {
        if (toUnit === "F") result = (tempValue * 9/5) + 32;
        else if (toUnit === "K") result = tempValue + 273.15;
        else if (toUnit === "R") result = (tempValue + 273.15) * 9/5;
        else result = tempValue; // Celsius a Celsius
    }

    // Conversión de Fahrenheit
    else if (fromUnit === "F") {
        if (toUnit === "C") result = (tempValue - 32) * 5/9;
        else if (toUnit === "K") result = (tempValue - 32) * 5/9 + 273.15;
        else if (toUnit === "R") result = tempValue + 459.67;
        else result = tempValue; // Fahrenheit a Fahrenheit
    }

    // Conversión de Kelvin
    else if (fromUnit === "K") {
        if (toUnit === "C") result = tempValue - 273.15;
        else if (toUnit === "F") result = (tempValue - 273.15) * 9/5 + 32;
        else if (toUnit === "R") result = tempValue * 9/5;
        else result = tempValue; // Kelvin a Kelvin
    }

    // Conversión de Rankine
    else if (fromUnit === "R") {
        if (toUnit === "C") result = (tempValue - 491.67) * 5/9;
        else if (toUnit === "F") result = tempValue - 459.67;
        else if (toUnit === "K") result = tempValue * 5/9;
        else result = tempValue; // Rankine a Rankine
    }

    document.getElementById('result').textContent = `Resultado: ${result.toFixed(2)} ${toUnit}`;
}
