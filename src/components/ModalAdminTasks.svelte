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
    <button on:click={fifo}>Ejecutar Algoritmo</button>
    <Table>
        <TableHead>
            <TableBodyRow>
                <TableHeadCell>REFERENCIA</TableHeadCell>
                {#each referencia as ref}
                    <TableHeadCell>{ref}</TableHeadCell>
                {/each}
            </TableBodyRow>
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

    <p>Fallos de página: {fallos}</p>
    <p>
        Rendimiento: {((referencia.length - fallos) / referencia.length) * 100}%
    </p>
</Modal>
