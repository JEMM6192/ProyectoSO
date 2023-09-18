<script>
  import { Button, Modal, Label, Input } from "flowbite-svelte";
  import { Marcos } from "../store/marcos.js";
  export let showModalConfiguracionSO = false;
  let nuevovalor = 4;

  function cancelar() {
    showModalConfiguracionSO = false;
  }

  function cambiarValor() {
    Marcos.set(Number(nuevovalor)); // Convierte el valor a número y cambia la tienda
    showModalConfiguracionSO = false;
  }
</script>

<Modal title="Configuración SO" bind:open={showModalConfiguracionSO}>
  <div class="mb-6">
    <Label for="default-input" class="block mb-2"
      >Cantidad de Marcos a utilizar (por defecto : 4)</Label
    >
    <Input
      type="number"
      id="default-input"
      placeholder="Cantidad Memoria Virtual (GB)"
      bind:value={nuevovalor}
    />
  </div>

  <svelte:fragment slot="footer">
    <Button on:click={cambiarValor}>Guardar</Button>
    <Button on:click={cancelar} color="alternative">Cancelar</Button>
  </svelte:fragment>
</Modal>
