<script>
    import { Button, List, Modal } from 'flowbite-svelte';
    import { dndzone } from 'svelte-dnd-action';
    import Programas from '../algoritmos/programas.js';
    import ListaEjecucion from '../algoritmos/listaejecucion.js';
    export let showModalEjecucion = false;
    
    let items = Programas.items;
    let SortItems = [...items]; 
  
  function handleSort(e) {
    SortItems = e.detail.items;
  }

  function GuardarOrden(){
    alert(JSON.stringify(SortItems));
    ListaEjecucion.items = SortItems;
    console.log(ListaEjecucion.items);
    showModalEjecucion = false;
  }
    
  </script>
  

<Modal title="Lista de Ejecucion" bind:open={showModalEjecucion} autoclose>
<section use:dndzone={{ items: SortItems }} on:consider={handleSort} on:finalize={handleSort}>
    {#each SortItems as item (item.id)}
      <div>
        {item.nombre}
      </div>
    {/each}
  </section>  
      <svelte:fragment slot="footer">
        <Button on:click={GuardarOrden}>Guardar</Button>
        <Button color="alternative">Cancelar</Button>
      </svelte:fragment>
    </Modal>
  
<style>
    section {
        width: auto;
        padding: 0.3em;
        border: 1px solid black;
        display: flex;
        justify-content: center; /* Centra horizontalmente en el eje X */
        align-items: center; /* Centra vertica
        /* this will allow the dragged element to scroll the list */
        overflow: auto;
        height: 200px;
    }
    div {
        width: 50%;
        padding: 0.2em;
        border: 1px solid blue;
        margin: 0.15em 0;
    }
</style>