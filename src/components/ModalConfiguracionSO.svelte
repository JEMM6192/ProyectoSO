<script>
import { Button, Modal, Label,Input} from 'flowbite-svelte';
export let showModalConfiguracionSO = false;

</script>


    <Modal title="Configuracion SO" bind:open={showModalConfiguracionSO} autoclose>
        <div class="mb-6">
            <Label for="default-input" class="block mb-2">Memoria Virtual</Label>
            <Input type="number"id="default-input" placeholder="Cantidad Memoria Virtual (GB)" />
          </div>
          <div class="mb-6">
            <Label for="default-input" class="block mb-2">Memoria Fisica</Label>
            <Input type="number"id="default-input" placeholder="Cantidad Memoria Fisica (GB)" />
          </div>
          <div class="mb-6">
            <Label for="default-input" class="block mb-2">Tabla de paginas</Label>
            <Input type="number"id="default-input" placeholder="Tabla de paginas" />
          </div>
          <div class="mb-6">
            <Label for="default-input" class="block mb-2">Algoritmo de paginacion</Label>
            <select name="select">
                <option value="value1">Optimo</option>
                <option value="value2">No usandas reciente,mente</option>
                <option value="value3">Fifo</option>
              </select>
          </div>
        <svelte:fragment slot="footer">
            <Button on:click={() => alert('Handle "success"')}>Guardar</Button>
            <Button color="alternative">Cancelar</Button>
          </svelte:fragment>
        </Modal>
