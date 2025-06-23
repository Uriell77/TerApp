<script>
  //Imports
  import {onMount} from 'svelte';
  import { fade,scale,fly } from 'svelte/transition';
  import Servicios from "$lib/components/Servicios.svelte";
  import PersonalCards from '$lib/components/PersonalCards.svelte';


  //variables y props
  let {cont = $bindable(), ter = $bindable()} = $props();
  let interno = $derived(cont);
  let ventana;
  let isDesktop;

  onMount(()=>{
    isDesktop = ventana.navigator.userAgentData.mobile;
    if(isDesktop == false){
      console.log("es una laptop")
    }
  })




</script>

<svelte:window bind:this={ventana}/>

<section class="section has-text-centered p-0" >

    {#key cont}
  <section class="section1 pt-0 "
    in:fly={{duration:300, x:500, delay:300}}
    out:fly={{duration:300, x:-500, opacity:100}}
  >

    <div class="columns is-centered is-multiline">
      <div class="column is-full">
        <div class="container  px-0 {cont == 0 ? "is-active":"is-hidden-touch"}">
          <Servicios  />
        </div>
      </div>
      <div class="column is-full">
        <div class="container px-0 {cont == 1 ? "is-active":"is-hidden-touch"}">
          <PersonalCards />
        </div>
      </div>
      <div class="column is-full mt-6">
        <div class="container px-0 {cont == 2 ? "is-active":"is-hidden-touch"}">
        Promociones
        <div/>
      </div>
      <div class="column is-full">
        <div class="container px-0 {cont == 3 ? "is-active":"is-hidden-touch"}">
        Quienes Somos?
        <div/>
      </div>
    </div>



    </section>


      {/key}

  </section>

<style>

  .section1{
    width:100%;
  }

  section{
    width:100%;
    height:100% !important;
    overflow:hidden;
    view-transition-name:none;
  }



  @media (min-width: 768px) {

  .container{
    visibility:visible !important;
  }

  }

</style>
