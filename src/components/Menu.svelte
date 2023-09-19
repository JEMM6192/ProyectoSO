<script>
  import { Button } from "flowbite-svelte";
  import ModalMMU from "./ModalMMU.svelte";
  import ModalConfiguracionSO from "./ModalConfiguracionSO.svelte";
  import ModalAdminTasks from "./ModalAdminTasks.svelte";
  let showModalMMU = false;
  let showModalConfiguracionSO = false;
  let showModalAdminTasks = false;
</script>

<div>
  <Button on:click={() => (showModalMMU = true)} color="alternative" size="lg">
    <div class="flex flex-col items-center">
      <img
        src="https://i.ibb.co/wWhcRvV/lista.png"
        alt="lista"
        width="100"
        height="100"
      />
      <p>MMU</p>
    </div>
  </Button>
  {#if showModalMMU}
    <ModalMMU bind:defaultModal={showModalMMU} />
  {/if}

  <Button
    on:click={() => (showModalConfiguracionSO = true)}
    color="alternative"
    size="lg"
  >
    <div class="flex flex-col items-center">
      <img
        src="https://i.ibb.co/jgpqv1W/sistema-operativo.png"
        alt="lista"
        width="100"
        height="100"
      />
      <p>Config SO</p>
    </div>
  </Button>
  {#if showModalConfiguracionSO}
    <ModalConfiguracionSO bind:showModalConfiguracionSO />
  {/if}

  <Button
    on:click={() => (showModalAdminTasks = true)}
    color="alternative"
    size="lg"
  >
    <div class="flex flex-col items-center">
      <img
        src="https://i.ibb.co/NSsKZrg/Administrador.png"
        alt="Administrador"
        width="100"
        height="100"
      />
      <p>Admin Tasks</p>
    </div>
  </Button>
  {#if showModalAdminTasks}
    <ModalAdminTasks bind:showModalAdminTasks />
  {/if}
</div>
