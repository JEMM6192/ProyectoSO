<!-- App.svelte -->
<script>
    import { calcularPaginacionFIFO } from "../algoritmos/fifo.js";
    import { calcularPaginacionLRU } from "../algoritmos/LRU.js";
    import { calcularPaginacionOptimo } from "../algoritmos/optimo.js";
    import { calcularPaginacionSegundaOportunidad } from "../algoritmos/SegundaOportunidad.js";
    import { calcularPaginacionReloj } from "../algoritmos/reloj.js";
    import { Marcos } from "../store/marcos.js";
    import Programas from "../algoritmos/programas.js";
    import { Button, Label, Modal, Select, Input } from "flowbite-svelte";
    import { Progressbar } from "flowbite-svelte";

    import {
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
        TableSearch,
    } from "flowbite-svelte";
    import App from "../App.svelte";
    export let showModalAdminTasks = false;
    let referencia = Programas.items;
    let marcos = $Marcos;

    let marcospagina = [];
    let tabla = [];
    let fallos = 0;
    let fallosString = "";
    let AlgoritmoSeleccioando = "";

    function EjecutarAlgoritmo() {
        if (AlgoritmoSeleccioando === "fifo") {
            fifo();
        } else if (AlgoritmoSeleccioando === "NRU") {
            NRU();
        }
        if (AlgoritmoSeleccioando === "Optimo") {
            optimo();
        }
        if (AlgoritmoSeleccioando === "segundaOportunidad") {
            segundaOportunidad();
        }
        if (AlgoritmoSeleccioando === "reloj") {
            reloj();
        }
    }

    function fifo() {
        const resultado = calcularPaginacionFIFO(referencia, marcos);
        marcospagina = resultado.marcosPagina;
        tabla = resultado.tabla;
        fallos = resultado.fallos;
        fallosString = resultado.fallosString;
    }

    function NRU() {
        const resultado = calcularPaginacionLRU(referencia, marcos);
        marcospagina = resultado.marcosPagina;
        tabla = resultado.tabla;
        fallos = resultado.fallos;
        fallosString = resultado.fallosString;
    }

    function optimo() {
        const resultado = calcularPaginacionOptimo(referencia, marcos);
        marcospagina = resultado.marcosPagina;
        tabla = resultado.tabla;
        fallos = resultado.fallos;
        fallosString = resultado.fallosString;
    }

    function segundaOportunidad() {
        const resultado = calcularPaginacionSegundaOportunidad(
            referencia,
            marcos
        );
        marcospagina = resultado.marcosPagina;
        tabla = resultado.tabla;
        fallos = resultado.fallos;
        fallosString = resultado.fallosString;
    }

    function reloj() {
        const resultado = calcularPaginacionReloj(referencia, marcos);
        marcospagina = resultado.marcosPagina;
        tabla = resultado.tabla;
        fallos = resultado.fallos;
        fallosString = resultado.fallosString;
    }
</script>

<Modal
    title="Administrador de tareas"
    bind:open={showModalAdminTasks}
    size="xl"
>
    <div class="mb-6">
        <Label for="default-input" class="block mb-2"
            >Algoritmo de paginacion</Label
        >
        <select name="select" bind:value={AlgoritmoSeleccioando}>
            <option value="Optimo">Optimo</option>
            <option value="NRU">NRU</option>
            <option value="fifo">Fifo</option>
            <option value="segundaOportunidad">Segunda Oportunidad</option>
            <option value="reloj">Reloj</option>
        </select>
        <Button on:click={EjecutarAlgoritmo}>Ejecutar Algoritmo</Button>
    </div>

    <Table>
        <TableHead
            class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400"
        >
            <TableHeadCell>REFERENCIA</TableHeadCell>
            {#each referencia as ref}
                <TableHeadCell>{ref}</TableHeadCell>
            {/each}
        </TableHead>
        <TableBody>
            {#each marcospagina as marco, i}
                <TableBodyRow>
                    <TableHeadCell>MARCO {i + 1}</TableHeadCell>
                    {#each tabla as fila}
                        <TableBodyCell>{fila[i]}</TableBodyCell>
                    {/each}
                </TableBodyRow>
            {/each}
            <TableBodyRow>
                <TableHeadCell>FALLOS</TableHeadCell>
                {#each fallosString.trimEnd().split("\t") as fallo}
                    <TableBodyCell>{fallo}</TableBodyCell>
                {/each}
            </TableBodyRow>
        </TableBody>
    </Table>

    <h3>Fallos de página: {fallos}</h3>
    <h3>Fallos: {fallos / referencia.length}</h3>
    <p>Rendimiento :</p>
    <div class="flex justify-center">
        <Progressbar
            progress=" {((referencia.length - fallos) / referencia.length) *
                100}"
            size="h-4 w-9/12"
            labelInside
        />
    </div>
</Modal>
