<script>
  //Imports
  import { fade,scale,fly } from 'svelte/transition';
  import Servicios from "$lib/components/Servicios.svelte";
  import PersonalCards from '$lib/components/PersonalCards.svelte';


  //variables y props
  let {cont = $bindable(), ter = $bindable()} = $props();
  let interno = $derived(cont);

  function prev(){

  }




</script>


<section class="section has-text-centered  mt-4 px-0 pt-2 mb-0 pb-2">
  {#key cont}
    <section class="section1 pt-0 "
      in:fly={{duration:300, x:500, delay:300}}
      out:fly={{duration:300, x:-500, opacity:100}}
    >

    <!--SECCION DE SERVICIOS-->
      <div class="container px-1 {cont == 0 ? "is-active":"is-hidden"}">
      <Servicios class="">
      </Servicios>
      </div>
      <!--  -->


    <!--SECCION DE PERSONAL-->
      <div class="container cristal persona pt-5 px-1 mb-1 pb-6 {cont == 1 ? "is-active":"is-hidden"}">
        <PersonalCards />
      </div>
      <!--  -->

    <!--SECCION DE PROMOCIONES -->
      <div class="box {cont == 2 ? "is-active": "is-hidden"}">
        kjjkljlklk
      </div>
      <!--  -->


    <!-- SECCION DE QUIENES SOMOS-->
      <div class="box {cont == 3 ? "is-active": "is-hidden"}">
        ffffsdf
      </div>
      <!--  -->


    </section>

  {/key}


</section>

<style>


  section{
    width:100%;
    height:100% !important;
    overflow:hidden;
    view-transition-name:none;
  }

  .persona{
    position:relative;
    overflow:hidden;
    overflow-y:scroll;
    width:98%;
    height:60vh;
    border-radius:10px;
  }


@media (min-width: 768px) {
  .persona{
    position:relative;
    width:60%;
    height:100%;
  }

  }

</style>
