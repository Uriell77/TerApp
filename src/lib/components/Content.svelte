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
    in:fade={{duration:1000}}
  >

    <Servicios>
    </Servicios>

  </section>

  <section class="section2 {cont == 1 ? "is-active": "is-hidden"}"
    in:fade={{duration:1000}}
  >
    sfsdf
  </section>

  <section class="section3 {cont == 2 ? "is-active": "is-hidden"}"
    in:fade={{duration:1000}}
  >
    asdadd
  </section>

  <section class="section4 {cont == 3 ? "is-active": "is-hidden"}"
    in:fade={{duration:1000}}
  >
    ffffsdf
  </section>


{/key}
</section>

<style>

  .section{
    width:100%;
    height:100% !important;
    overflow:hidden;
  }
</style>
