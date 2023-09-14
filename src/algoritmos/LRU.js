export function calcularPaginacionLRU(referencia, marcos) {
    let marcosPagina = new Array(marcos).fill(-1); // -1 significa que está vacío
    let fallos = 0; // contador de fallos
    let tabla = [];
    let fallosString = ""; // string para mostrar los fallos en la tabla
    let paginaUsada = new Array(marcos).fill(0); // Registro de cuándo se usó cada página

    function formatearValor(valor) { //formatea el valor en la tabla para mostrarlo como vacío si es -1
        return valor === -1 ? "" : valor;
    }

    for (let i = 0; i < referencia.length; i++) { //recorre la referencia
        let paginaReferenciada = referencia[i];
        let fila = [];
        let fallo = false;

        if (!marcosPagina.includes(paginaReferenciada)) {
            // Si no está en los marcos de página, es un fallo
            fallos++;
            fallo = true;

            // Encuentra la página menos recientemente usada
            let indiceReemplazo = paginaUsada.indexOf(Math.min(...paginaUsada));

            marcosPagina[indiceReemplazo] = paginaReferenciada; // Reemplaza la página menos recientemente usada
            paginaUsada[indiceReemplazo] = i + 1; // Actualiza el registro de uso
        } else {
            // Actualiza el registro de uso de la página existente
            let indiceExistente = marcosPagina.indexOf(paginaReferenciada);
            paginaUsada[indiceExistente] = i + 1;
        }

        for (let j = 0; j < marcos; j++) {
            fila.push(formatearValor(marcosPagina[j])); // Utiliza la función para formatear el valor
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
