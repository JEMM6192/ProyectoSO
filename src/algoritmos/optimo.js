export function calcularPaginacionOptimo(referencia, marcos) {
    let marcosPagina = new Array(marcos).fill(-1); // -1 significa que está vacío
    let fallos = 0; // contador de fallos
    let tabla = [];
    let fallosString = ""; // string para mostrar los fallos en la tabla

    function formatearValor(valor) {
        // Esta función formatea el valor en la tabla para mostrarlo como vacío si es -1
        return valor === -1 ? "" : valor;
    }

    let i = 0; // Índice para rastrear la posición actual en la referencia

    while (i < referencia.length) {
        let paginaReferenciada = referencia[i];
        let fila = [];
        let fallo = false;

        if (!marcosPagina.includes(paginaReferenciada)) {
            // Si no está en los marcos de página, es un fallo
            fallos++;
            fallo = true;

            if (marcosPagina.includes(-1)) {
                // Si hay un marco vacío, simplemente coloca la página en él
                let indiceVacio = marcosPagina.indexOf(-1);
                marcosPagina[indiceVacio] = paginaReferenciada;
            } else {
                if (i === referencia.length - 1) {
                    // En la última referencia, aplicar FIFO para reemplazar una página
                    let indiceReemplazo = 0;
                    let paginaMasAntigua = referencia.length;

                    for (let j = 0; j < marcos; j++) {
                        let paginaActual = marcosPagina[j];
                        let ultimaAparicion = referencia.lastIndexOf(paginaActual, i);

                        if (ultimaAparicion === -1) {
                            indiceReemplazo = j;
                            break;
                        } else if (ultimaAparicion < paginaMasAntigua) {
                            paginaMasAntigua = ultimaAparicion;
                            indiceReemplazo = j;
                        }
                    }

                    marcosPagina[indiceReemplazo] = paginaReferenciada; // Reemplaza la página seleccionada
                } else {
                    // Encuentra la página que no se usará en el futuro (simulación)
                    let proximasReferencias = referencia.slice(i + 1);
                    let maxDistancia = -1;
                    let indiceReemplazo = 0;

                    for (let j = 0; j < marcos; j++) {
                        let paginaActual = marcosPagina[j];
                        let siguienteAparicion = proximasReferencias.indexOf(paginaActual);

                        if (siguienteAparicion === -1) {
                            indiceReemplazo = j;
                            break;
                        } else if (siguienteAparicion > maxDistancia) {
                            maxDistancia = siguienteAparicion;
                            indiceReemplazo = j;
                        }
                    }

                    marcosPagina[indiceReemplazo] = paginaReferenciada; // Reemplaza la página seleccionada
                }
            }
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
        i++;
    }

    return {
        tabla,
        fallos,
        fallosString,
        marcosPagina,
    };
}

