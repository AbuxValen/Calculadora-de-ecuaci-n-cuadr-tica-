function calcular() {
    
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.classList.remove('resultado-error'); // Quitamos la clase de error por si acaso

    
    if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
        resultadoDiv.innerHTML = '🚫 Error: Los valores deben ser números y a no puede ser 0.';
        resultadoDiv.classList.add('resultado-error');
        return;
    }

    // 3. Cálculo del DISCRIMINANTE (b² - 4ac)
    const discriminante = Math.pow(b, 2) - (4 * a * c);

    let mensaje = '';
    
    // 4. Análisis del Discriminante (IF/ELSE)
    
    if (discriminante > 0) {
        // Dos soluciones reales distintas
        
        // Math.sqrt() calcula la raíz cuadrada.
        const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        
        // Usamos .toFixed(2) para mostrar solo 2 decimales, como en el ejemplo.
        mensaje = `Las raíces son reales y distintas: X1 = ${x1.toFixed(2)}, X2 = ${x2.toFixed(2)}`;

    } else if (discriminante === 0) {
        // Una única solución real (raíz doble)
        
        const x = -b / (2 * a);
        
        mensaje = `La raíz es real y única: X = ${x.toFixed(2)}$`;
        
    } else {
        // Soluciones complejas (discriminante < 0)
        
        const parteReal = (-b / (2 * a)).toFixed(4);
        // Usamos Math.abs() para tomar el valor absoluto del discriminante negativo para la raíz
        const parteImaginaria = (Math.sqrt(Math.abs(discriminante)) / (2 * a)).toFixed(4);
        
        mensaje = `
            Las raíces son complejas: 
            X1 = ${parteReal} + ${parteImaginaria}i, X2 = ${parteReal} - ${parteImaginaria}
        `;
        resultadoDiv.classList.add('resultado-error'); 
    }

   
    resultadoDiv.innerHTML = mensaje;
}

document.addEventListener('DOMContentLoaded', calcularRaices);