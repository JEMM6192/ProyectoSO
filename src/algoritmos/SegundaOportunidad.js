
export function calcularPaginacionSegundaOportunidad(referencia, marcos) {
    let marcosPagina = new Array(marcos).fill(-1);
    let fallos = 0;
    let tabla = [];
    let fallosString = ""; // string para mostrar los fallos en la tabla
    let segundaOportunidad = new Array(marcos).fill(0); // Registro de segunda oportunidad

    function formatearValor(valor, vidas) {
        return valor === -1 ? "" : `${valor}(${vidas})`;
    }

    for (let i = 0; i < referencia.length; i++) {
        let paginaReferenciada = referencia[i];
        let fila = [];
        let fallo = true; // Se asume que es un fallo por defecto
        const indicePagina = marcosPagina.indexOf(paginaReferenciada); // Busca la página en los marcos de página

        if (indicePagina !== -1) { // Si la página ya está en los marcos de página, no es un fallo
            segundaOportunidad[indicePagina] = 1;
            fallo = false; // No es un fallo si la página ya estaba en los marcos
        } else {// Si no está en los marcos de página y no todos los marcos están llenos, agregar la página
            if (marcosPagina.includes(-1)) {
                let indiceDisponible = marcosPagina.indexOf(-1);
                marcosPagina[indiceDisponible] = paginaReferenciada;
                segundaOportunidad[indiceDisponible] = 0; // Marca la página con segunda oportunidad
            } else {// Si todos los marcos están llenos, realizar un reemplazo usando el algoritmo de segunda oportunidad
                let paginaReemplazar = -1;
                let encontrado = false;

                while (!encontrado) { // Busca la página con segunda oportunidad
                    for (let j = 0; j < marcos; j++) {// Busca la página con segunda oportunidad en los marcos de página y la reemplaza
                        if (segundaOportunidad[j] === 0) {
                            paginaReemplazar = j;
                            encontrado = true;
                            break;
                        } else {
                            segundaOportunidad[j] = 0;
                        }
                    }
                }
                marcosPagina[paginaReemplazar] = paginaReferenciada;
                segundaOportunidad[paginaReemplazar] = 0;
            }
        }
        for (let j = 0; j < marcos; j++) {
            fila.push(formatearValor(marcosPagina[j], segundaOportunidad[j])); // Utiliza la función para formatear el valor
        }

        if (fallo) {
            fallosString += "❌\t";
            fallos++;
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