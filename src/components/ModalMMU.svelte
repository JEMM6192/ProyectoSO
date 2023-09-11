<script>
    import { Button, Modal } from 'flowbite-svelte';
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch } from 'flowbite-svelte';
    import Programas from '../algoritmos/programas.js';
    export let defaultModal = false;



  let BuscarItem = '';
  $: filteredItems = Programas.items.filter(programa => programa.nombre.toLowerCase().indexOf(BuscarItem.toLowerCase()) !== -1);

  
</script>


  <Modal title="MMU" bind:open={defaultModal} autoclose>
    <TableSearch placeholder="Buscar Programa" hoverable={true} bind:inputValue={BuscarItem}>
        <TableHead>
          <TableHeadCell>#</TableHeadCell>
          <TableHeadCell>Programa</TableHeadCell>
          <TableHeadCell>Memoria Asignada (bytes)</TableHeadCell>
          <TableHeadCell>Accion</TableHeadCell>
        </TableHead>
        <TableBody class="divide-y">
          {#each filteredItems as item}
            <TableBodyRow>
              <TableBodyCell>{item.id}</TableBodyCell>
              <TableBodyCell>{item.nombre}</TableBodyCell>
              <TableBodyCell>{item.Memoria}</TableBodyCell>
              <TableBodyCell><img src="https://i.ibb.co/y4tb1Wh/editar.png"  alt="editar" width="40"></TableBodyCell>
            </TableBodyRow>
          {/each}
        </TableBody>
      </TableSearch>
    <svelte:fragment slot="footer">
      <Button on:click={() => alert('Handle "success"')}>Guardar</Button>
      <Button color="alternative">Cancelar</Button>
    </svelte:fragment>
  </Modal>
