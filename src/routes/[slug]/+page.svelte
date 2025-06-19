<script>
  import Hero from '$lib/components/HeroBanner.svelte';
  import NavTab from '$lib/components/NavTab.svelte';
  import Content from '$lib/components/Content.svelte';


  let usuario1 = {
    "store": {"storename": "Nombre Tienda",
      "storequote": "Su compra es nuestra Prioridad",
      "storelogo": "./check.png",
      "storebanner": "/clinic.jpeg"
    }
  }




  let contenido = $state(0);


</script>

<Hero usuario={usuario1}/>


<!-- Content -->

<section>

<NavTab bind:intab="{contenido}" />


</section>




<section class="section pt-0 px-0 pb-0">
    <Content bind:cont="{contenido}"/>
</section>



<style>

  .section{
    height:100%;
  }


</style>
