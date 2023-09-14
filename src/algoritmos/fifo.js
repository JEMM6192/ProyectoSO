export function calcularPaginacionFIFO(referencia, marcos) {
    let marcosPagina = new Array(marcos).fill(-1); // -1 significa que está vacío
    let fallos = 0; // contador de fallos
    let tabla = [];
    let fallosString = ""; // string para mostrar los fallos en la tabla
    let marcosIngreso = new Array(marcos).fill(0); // Registro de cuándo ingresó cada página a los marcos

    function formatearValor(valor) {
        // Esta función formatea el valor en la tabla para mostrarlo como vacío si es -1
        return valor === -1 ? "" : valor;
    }

    for (let i = 0; i < referencia.length; i++) {
        let paginaReferenciada = referencia[i];
        let fila = [];
        let fallo = false;

        if (!marcosPagina.includes(paginaReferenciada)) {
            // Si no está en los marcos de página, es un fallo
            fallos++;
            fallo = true;
            let indiceReemplazo = marcosIngreso.indexOf(Math.min(...marcosIngreso)); // Encuentra la página más antigua

            marcosPagina[indiceReemplazo] = paginaReferenciada; // Reemplaza la página más antigua
            marcosIngreso[indiceReemplazo] = i + 1; // Actualiza el registro de ingreso
        }

        for (let j = 0; j < marcos; j++) {
            fila.push(formatearValor(marcosPagina[j])); // Utiliza la función para formatear el valor
        }

        if (fallo) {
            fallosString += "x\t";
        } else {
            fallosString += "-\t";
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
