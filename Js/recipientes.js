function calcularepFcn() {
    // Valores de entrada
    presion = parseFloat(document.querySelector("#presion").value);
    diametro = parseFloat(document.querySelector("#diametro").value);
    longitud = parseFloat(document.querySelector("#Longitud").value);
    nivel = parseFloat(document.querySelector("#Nivel").value); // Nivel de líquido
    rho = parseFloat(document.querySelector("#Densidad").value); // Densidad del líquido
    
    // Material
    material = parseFloat(document.querySelector('#Material').value);
    let UTS, Ys, rhoMaterial;
    switch(material) {
        case 1: UTS = 415; Ys = 230; rhoMaterial = 7800; break;
        case 2: UTS = 450; Ys = 275; rhoMaterial = 7800; break;
        case 3: UTS = 485; Ys = 275; rhoMaterial = 7800; break;
        case 4: UTS = 415; Ys = 220; rhoMaterial = 7860; break;
        case 5: UTS = 485; Ys = 260; rhoMaterial = 7850; break;
    }

    // Eficiencia de la junta
    eficiencia = parseFloat(document.querySelector("#Eficiencia").value);
    let eta = (eficiencia === 1) ? 1 : (eficiencia === 2) ? 0.85 : 0.75;

    // Cálculo del esfuerzo máximo
    let S = Math.min(UTS/3.5, Ys * 2/3);

    // Cálculo del espesor de las tapas
    let ttapas = (presion * diametro) / (2 * S * eta - 0.2 * presion);
    ttapas = ttapas / 0.0254;  // Conversión a pulgadas
    document.querySelector("#espesortapas").value = ttapas.toFixed(4);

    // Cálculo del espesor del cuerpo
    let tcuerpo = (presion * (diametro / 2)) / (S * eta - 0.6 * presion);
    tcuerpo = tcuerpo / 0.0254;  // Conversión a pulgadas
    document.querySelector("#espesorcuerpo").value = tcuerpo.toFixed(4);

    // Cálculo del volumen y peso del líquido
    let volumenLiquido = Math.PI * Math.pow((diametro / 2), 2) * nivel;  // Volumen cilíndrico
    document.querySelector("#volumenLiquido").value = volumenLiquido.toFixed(2);

    let pesoLiquido = volumenLiquido * rho;  // Peso del líquido
    document.querySelector("#pesoLiquido").value = pesoLiquido.toFixed(2);

    // Cálculo del volumen y peso del equipo (tapas + cuerpo)
    let espesortapareal = parseFloat(document.querySelector('#espesorrealtapa').value);
    let Vtapas = Math.PI / 12 * (Math.pow(diametro + 2 * espesortapareal, 3) - Math.pow(diametro, 3));

    let espesorcuerporeal = parseFloat(document.querySelector('#espesorrealcuerpo').value);
    let Vcuerpo = Math.PI * longitud / 12 * (Math.pow(diametro + 2 * espesorcuerporeal, 2) - Math.pow(diametro, 2));

    let pesoEquipo = (Vtapas + Vcuerpo) * rhoMaterial;
    document.querySelector('#pesoequipo').value = pesoEquipo.toFixed(0);

    // Cálculo del peso total del equipo en operación (peso equipo + peso líquido)
    let pesoTotalOperacion = pesoEquipo + pesoLiquido;
    document.querySelector('#pesoTotalOperacion').value = pesoTotalOperacion.toFixed(2);

    // Verificaciones de espesor
    if (espesortapareal < ttapas) {
        document.querySelector('#espesortapas').style.backgroundColor = 'rgb(255,199,206)';
        document.querySelector('#espesortapas').style.color = 'rgb(156,0,6)';
    } else {
        document.querySelector('#espesortapas').style.backgroundColor = 'rgb(198,239,206)';
        document.querySelector('#espesortapas').style.color = 'rgb(0,97,0)';
    }

    if (espesorcuerporeal < tcuerpo) {
        document.querySelector('#espesorcuerpo').style.backgroundColor = 'rgb(255,199,206)';
        document.querySelector('#espesorcuerpo').style.color = 'rgb(156,0,6)';
    } else {
        document.querySelector('#espesorcuerpo').style.backgroundColor = 'rgb(198,239,206)';
        document.querySelector('#espesorcuerpo').style.color = 'rgb(0,97,0)';
    }
}
