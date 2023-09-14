<script>
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
  import Programas from "../algoritmos/programas.js";
  export let defaultModal = false;
  let inputValue = "";
  let Referencia = Programas.items;

  //funcion para push al array de la lista de programas
  function AgregarPrograma() {
    //push al array de la lista de programas
    Programas.push(inputValue);
    //limpiar el input
    inputValue = "";
    console.log(Programas);
    //no cerra el modal
    defaultModal = false;
  }
</script>

<Modal title="MMU" bind:open={defaultModal}>
  <div class="mb-6">
    <div class="mb-6">
      <Label for="default-input" class="block mb-2">Default input</Label>
      <Input
        id="default-input"
        placeholder="Default input"
        type="text"
        bind:value={inputValue}
      />
    </div>
    <div class="mb-6">
      <Button on:click={AgregarPrograma} pill>Agregar</Button>
    </div>

    <Table>
      <TableHead>
        <TableHeadCell># Referencia</TableHeadCell>
      </TableHead>

      <TableBody class="divide-y">
        {#each Referencia as item}
          <TableBodyRow>
            <TableBodyCell>{item}</TableBodyCell>
          </TableBodyRow>
        {/each}
      </TableBody>
    </Table>
  </div>
  <svelte:fragment slot="footer">
    <Button on:click={() => alert('Handle "success"')}>Guardar</Button>
    <Button color="alternative">Cancelar</Button>
  </svelte:fragment>
</Modal>
