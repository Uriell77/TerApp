<script>
  import Hero from '$lib/components/HeroBanner.svelte';
  import NavTab from '$lib/components/NavTab.svelte';
  import Content from '$lib/components/Content.svelte';

  let pagina = ["Servicios", "Personal", "Promociones", "Quienes Somos?"];


  let usuario1 = {
    "store": {"storename": "Nombre Clinica",
      "storequote": "Su Salud es nuestra Prioridad",
      "storelogo": "./bejas.png",
      "storebanner": "/clinic.jpeg"
    }
  }




  let contenido = $state(0);

</script>




<div class="columns is-centered is-multiline is-mobile">
  <div class="column is-full">
    <Hero usuario={usuario1}/>
  </div>
  <div class="column is-full">
    <NavTab bind:intab="{contenido}" />
    <div class="box cristal mx-3 p-0">
      <div class="section m-0 p-0">
        <div class="container p-0">
          <p class="is-hidden-desktop p-3 has-text-weight-bold">
          {pagina[contenido]}
          </p>
          <Content bind:cont="{contenido}"/>
        </div>
      </div>
    </div>
  </div>
</div>



<style>

  .container{
  width: 100%;
  height:100%;
  overflow:hidden;
  }


  .section{
  height:100%;
  }



</style>
