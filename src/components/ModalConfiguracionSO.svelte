<script>
  import { Button, Modal, Label, Input } from "flowbite-svelte";
  export let showModalConfiguracionSO = false;
</script>

<Modal title="Configuracion SO" bind:open={showModalConfiguracionSO} autoclose>
  <div class="mb-6">
    <Label for="default-input" class="block mb-2"
      >Cantidad de Marco de paginas a utilizar</Label
    >
    <Input
      type="number"
      id="default-input"
      placeholder="Cantidad Memoria Virtual (GB)"
    />
  </div>

  <svelte:fragment slot="footer">
    <Button on:click={() => alert('Handle "success"')}>Guardar</Button>
    <Button color="alternative">Cancelar</Button>
  </svelte:fragment>
</Modal>
