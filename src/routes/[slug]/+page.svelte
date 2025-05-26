<script>
  import NavTab from '$lib/components/NavTab.svelte';
  import Tabs from '$lib/components/Tabs.svelte';
  import HeroButtons from '$lib/components/HeroButtons.svelte';
  import Content from '$lib/components/Content.svelte';


  let usuario1 = {
    "store": {"storename": "Nombre Tienda",
      "storequote": "Su compra es nuestra Prioridad",
      "storelogo": "./check.png"
    }
  }




  let contenido = $state(0);


</script>


<section class="hero pb-4 is-justify-content-center">

  <!-- hero buttoms -->
  <HeroButtons />

  <!-- hero body -->
  <div class="hero-body is-pulled-right py-5">
    <div class="logo">
      <img src="{usuario1.store.storelogo}" alt="logo" loading="lazy">
    </div>
    <h1 class="has-text-weight-bold">{usuario1.store.storename}</h1>
    <h4>{usuario1.store.storequote}</h4>
  </div>

  <!-- hero tabs -->
  <div class="contenttab is-flex">
  <!--  <Tabs /> -->
  </div>

</section>

<!-- Content -->

<section>

<NavTab bind:intab="{contenido}" />


</section>




<section class="section pt-0 px-0">

<Content bind:cont="{contenido}"/>

</section>



<style>


  .logo{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-120%);
    width:100px;
    height:100px;
    border-radius:30px;
  }

  .hero-body{
    background-color: rgba(200,200,200,.4);
    backdrop-filter: blur(4px);
    border-radius:30px;
    border-style:solid;
    border-width:thin;
    border-color: rgba(1,1,1,.3);
  }

  .hero{
    background-color: rgba(200,200,255,.3) !important;
    overflow: hidden;
    background-image: url('/clinic.jpeg');
    background-size:cover;
    background-position:center center;
    background-repeat:no-repeat;
    background-attachment: center;
    align-items:center;
  }




  .section{
    height:100%;
  }


</style>
