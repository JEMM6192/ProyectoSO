export function calcularPaginacionSegundaOportunidad(referencia, marcos) {
    let marcosPagina = new Array(marcos).fill(-1); // -1 significa que está vacío
    let fallos = 0; // contador de fallos
    let tabla = [];
    let fallosString = ""; // string para mostrar los fallos en la tabla
    let marcosIngreso = new Array(marcos).fill(0); // Registro de cuándo ingresó cada página a los marcos
    let bitsModificacion = new Array(marcos).fill(0); // Registro de bits de modificación de las páginas

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

            // Encuentra la página más antigua que no ha sido modificada
            let indiceReemplazo = -1;
            for (let j = 0; j < marcos; j++) {
                if (bitsModificacion[j] === 0) {
                    indiceReemplazo = j;
                    break;
                }
            }

            // Si no se encontró una página sin modificar, se inicia desde el principio
            if (indiceReemplazo === -1) {
                indiceReemplazo = 0;
            }

            marcosPagina[indiceReemplazo] = paginaReferenciada; // Reemplaza la página más antigua
            marcosIngreso[indiceReemplazo] = i + 1; // Actualiza el registro de ingreso
            bitsModificacion[indiceReemplazo] = 0; // Establece el bit de modificación en 0
        } else {
            // Si la página ya está en los marcos, establece el bit de modificación en 1
            let indice = marcosPagina.indexOf(paginaReferenciada);
            bitsModificacion[indice] = 1;
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
