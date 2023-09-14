<!-- App.svelte -->
<script>
    import { calcularPaginacionFIFO } from "../algoritmos/fifo.js";
    import Programas from "../algoritmos/programas.js";
    import { Button, Label, Modal, Select, Input, P } from "flowbite-svelte";
    import {
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
        TableSearch,
    } from "flowbite-svelte";
    export let showModalAdminTasks = false;

    let referencia = Programas.items;
    let marcos = 4;
    let marcospagina = [];
    let tabla = [];
    let fallos = 0;
    let fallosString = "";

    function fifo() {
        const resultado = calcularPaginacionFIFO(referencia, marcos);
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
        <select name="select">
            <option value="value1">Optimo</option>
            <option value="value2">No usandas reciente,mente</option>
            <option value="value3">Fifo</option>
        </select>
        <Button on:click={fifo}>Ejecutar Algoritmo</Button>
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
                {#each fallosString.split("\t") as fallo}
                    <TableBodyCell>{fallo}</TableBodyCell>
                {/each}
            </TableBodyRow>
        </TableBody>
    </Table>

    <h5>Fallos de página: {fallos}</h5>
    <h5>Fallos: {fallos / referencia.length}</h5>
    <p>
        Rendimiento: {((referencia.length - fallos) / referencia.length) * 100}%
    </p>
</Modal>
