<script>
  import { Button } from 'flowbite-svelte';
  import ModalMMU from './ModalMMU.svelte';
  import ModalListaEjecucion from './ModalListaEjecucion.svelte';
  import ModalConfiguracionSO from './ModalConfiguracionSO.svelte';
  let showModalMMU = false;
  let showModalEjecucion = false;
  let showModalConfiguracionSO = false;
</script>

<div>
  <Button on:click={() => (showModalMMU = true)} color="alternative" size="lg" > 
    <div class="flex flex-col items-center ">
      <img src="./src/assets/lista.png" alt="lista" width="100" height="100"/>
      <p>MMU</p>
    </div>
  </Button>
  {#if showModalMMU}
    <ModalMMU bind:defaultModal={showModalMMU} />
  {/if}

  <Button on:click={() => (showModalEjecucion = true)} color="alternative" size="lg" >
    <div class="flex flex-col items-center ">
      <img src="./src/assets/tareas.png" alt="lista" width="100" height="100"/>
      <p> Ejecucion</p>
    </div>
  </Button>
  {#if showModalEjecucion}
    <ModalListaEjecucion bind:showModalEjecucion ={showModalEjecucion} />
  {/if}

<Button on:click={() => (showModalConfiguracionSO = true)}  color="alternative" size="lg" >
  <div class="flex flex-col items-center ">
    <img src="./src/assets/sistema-operativo.png" alt="lista" width="100" height="100"/>
    <p>Config SO</p>
  </div>
</Button>
{#if showModalConfiguracionSO}
<ModalConfiguracionSO bind:showModalConfiguracionSO={showModalConfiguracionSO } />
{/if}

<Button color="alternative" size="lg" >
  <div class="flex flex-col items-center ">
    <img src="./src/assets/Administrador.png" alt="Administrador" width="100" height="100"/>
    <p>Admin Tasks</p>
  </div>
</Button>
</div>

  
 