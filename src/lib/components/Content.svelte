<script>
  //Imports
  import { fade,scale,fly } from 'svelte/transition';
  import Servicios from "$lib/components/Servicios.svelte";


  //variables y props
  let {cont = $bindable()} = $props();
  let interno = $state();



</script>


  <section class="section has-text-centered  mt-4 px-0 pt-2">
{#key cont}

  <!-- 
  SECCION DE SERVICIOS
  -->
  <section class="section1 pt-0 {cont == 0 ? "is-active": "is-hidden"}"
    in:fly={{duration:300, x:500, delay:300}}
    out:fly={{duration:300, x:-500, opacity:100}}
  >

    <Servicios>
    </Servicios>

  </section>

  <section class="section2 {cont == 1 ? "is-active": "is-hidden"}"
    in:fly={{duration:300, x:500, delay:300}}
    out:fly={{duration:300, x:-500}}
  >
    <div class="box">
    sfsdf
    </div>
  </section>

  <section class="section3 {cont == 2 ? "is-active": "is-hidden"}"
    in:fly={{duration:300, x:500, delay:300}}
    out:fly={{duration:300, x:-500}}
  >
    <div class="box">
    kjjkljlklk
    </div>

  </section>

  <section class="section4 {cont == 3 ? "is-active": "is-hidden"}"
    in:fly={{duration:300, x:500, delay:300}}
    out:fly={{duration:300, x:-500}}
  >
    <div class="box">
    ffffsdf
    </div>
  </section>


{/key}
</section>

<style>

  .section{
    width:100%;
    height:100% !important;
    overflow:hidden;
    view-transition-name:none;
  }
</style>
