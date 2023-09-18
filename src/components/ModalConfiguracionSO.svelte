<script>
  import { Button, Modal, Label, Input } from "flowbite-svelte";
  import { variableStore } from "../store/marcos.js";
  export let showModalConfiguracionSO = false;
  let nuevovalor;

  // Suscríbete al store para obtener el valor actual
  const suscribirse = variableStore.subscribe((value) => {
    nuevovalor = value; // Actualiza la variable local con el valor del store
  });

  function guardarNuevoValor() {
    variableStore.set(nuevovalor); // Actualiza el store con el valor de la variable local
    showModalConfiguracionSO = false;
  }

  function cancelar() {
    showModalConfiguracionSO = false;
  }
</script>

<Modal title="Configuración SO" bind:open={showModalConfiguracionSO}>
  <div class="mb-6">
    <Label for="default-input" class="block mb-2"
      >Cantidad de Marcos de páginas a utilizar (por defecto :$variableStore)</Label
    >
    <Input
      type="number"
      id="default-input"
      placeholder="Cantidad Memoria Virtual (GB)"
      bind:value={nuevovalor}
    />
  </div>

  <svelte:fragment slot="footer">
    <Button on:click={guardarNuevoValor}>Guardar</Button>
    <Button on:click={cancelar} color="alternative">Cancelar</Button>
  </svelte:fragment>
</Modal>
