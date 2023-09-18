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
    Programas.push(inputValue);
    inputValue = "";
    Referencia = Programas.items;
  }

  function EliminarUltimo() {
    Programas.pop();
    Referencia = Programas.items;
  }

  function vaciarPila() {
    while (!Programas.isEmpty()) {
      Programas.pop();
    }
    Referencia = Programas.items;
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      AgregarPrograma();
    }
  }
</script>

<Modal title="MMU" bind:open={defaultModal} size="xl">
  <div
    class="mb-6 flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-between"
  >
    <div class="mb-4 flex items-center">
      <Label for="default-input" class="block text-center"
        >Agregar Referencia</Label
      >
      <Input
        on:keydown={handleKeyPress}
        id="default-input"
        placeholder="Referencia"
        type="number"
        bind:value={inputValue}
      />
    </div>

    <div class="mb-3 flex items-center space-x-2">
      <!-- Utilizamos space-x-2 para agregar un espacio horizontal entre los botones -->
      <Button on:click={vaciarPila} color="yellow">vaciar</Button>
      <Button on:click={EliminarUltimo} color="red">Eliminar Ultimo</Button>
    </div>
  </div>

  {#each Referencia as item}
    <Button color="light" disable="true">{item}</Button>
  {/each}

  <svelte:fragment slot="footer">
    <Button on:click={() => alert('Handle "success"')}>Guardar</Button>
    <Button color="alternative">Cancelar</Button>
  </svelte:fragment>
</Modal>
