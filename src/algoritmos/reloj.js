export function calcularPaginacionReloj(referencia, marcos) {
    let marcosPagina = new Array(marcos).fill(-1); // -1 significa que está vacío
    let bitR = new Array(marcos).fill(0); // Bit de referencia inicialmente en 0
    let fallos = 0; // Contador de fallos
    let tabla = [];
    let fallosString = ""; // String para mostrar los fallos en la tabla

    function formatearValor(valor, bitReferencia) {
        return valor === -1 ? "" : `${valor} (${bitReferencia})`;
    }
    let puntero = 0; // Puntero para recorrer los marcos de página

    for (let i = 0; i < referencia.length; i++) {
        let paginaReferenciada = referencia[i];
        let fila = [];
        let fallo = true;

        if (marcosPagina.includes(paginaReferenciada)) {
            // La página ya está en los marcos, establecemos su bit de referencia en 1
            bitR[marcosPagina.indexOf(paginaReferenciada)] = 1;
            fallo = false;
        } else {
            // Si no está en los marcos de página, es un fallo
            fallos++;
            // Buscar una página para reemplazar
            while (true) {
                if (bitR[puntero] === 0) {
                    // Reemplazar la página en el puntero actual si el bit de referencia es 0
                    marcosPagina[puntero] = paginaReferenciada;
                    bitR[puntero] = 1; // Establecer el bit de referencia a 1
                    puntero = (puntero + 1) % marcos; // Avanzar el puntero circularmente
                    break;
                } else {
                    // Dar una segunda oportunidad, establecer el bit de referencia en 0 y avanzar el puntero
                    bitR[puntero] = 0;
                    puntero = (puntero + 1) % marcos; // Avanzar el puntero circularmente
                }
            }
        }

        for (let j = 0; j < marcos; j++) {
            fila.push(formatearValor(marcosPagina[j], bitR[j]));
        }

        if (fallo) {
            fallosString += "❌\t";
        } else {
            fallosString += "➖\t";
        }

        tabla.push(fila);
    }
    return {
        tabla,
        fallos,
        fallosString,
        marcosPagina,
    };
}
