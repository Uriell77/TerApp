<script>
  //Imports
  import { fade,scale,fly } from 'svelte/transition';
  import Servicios from "$lib/components/Servicios.svelte";


  //variables y props
  let {cont = $bindable(), ter = $bindable()} = $props();
  let interno = $derived(cont);

  function prev(){

  }




</script>


<section class="section has-text-centered  mt-4 px-0 pt-2">
    <!-- 
    SECCION DE SERVICIOS
    -->
  {#key cont}
    <section class="section1 pt-0 "
      in:fly={{duration:300, x:500, delay:300}}
      out:fly={{duration:300, x:-500, opacity:100}}
    >

      <div class="container {cont == 0 ? "is-active":"is-hidden"}">
      <Servicios class="">
      </Servicios>
      </div>

      <div class="container persona pt-5  {cont == 1 ? "is-active":"is-hidden"}">
        <div class="box">
          <div class="pcont">
            personal1
          </div>
        </div>
        <div class="box">
          <div class="pcont">
            personal2
          </div>
        </div>
        <div class="box">
          <div class="pcont">
            personal3
          </div>
        </div>
        <div class="box">
          <div class="pcont">
            personal4
          </div>
        </div>
        <div class="box">
          <div class="pcont">
            personal5
          </div>
        </div>
        <div class="box">
          <div class="pcont">
            personal6
          </div>
        </div>
        <div class="box">
          <div class="pcont">
            personal7
          </div>
        </div>
        <div class="box">
          <div class="pcont">
            personal8
          </div>
        </div>
        <div class="box">
          <div class="pcont">
            personal9
          </div>
        </div>
        <div class="box">
          <div class="pcont">
            personal10
          </div>
        </div>

      </div>

      <div class="box {cont == 2 ? "is-active": "is-hidden"}">
        kjjkljlklk
      </div>



      <div class="box {cont == 3 ? "is-active": "is-hidden"}">
        ffffsdf
      </div>

    </section>

  {/key}


</section>

<style>

  @keyframes show {
    from{
      opacity:0;
      scale:50% 80%;
    }
    to{
      opacity:1;
      scale:100%;
    }
  }

  .box{
    view-timeline-name: --reveal;
    animation-name: show;
    animation-fill-mode:both;
    animation-timeline: --reveal;
    animation-range: entry 0.1% cover 50%;
    margin-bottom:1px;
  }

  .pcont{
    height:35vh !important;
  }

  section{
    width:100%;
    height:100% !important;
    overflow:hidden;
    view-transition-name:none;
    overflow-y:scroll;
  }

  .persona{
    position:fixed;
    overflow-y:scroll;
    width:100%;
    height:55vh;
    padding-bottom:90px
  }
</style>
