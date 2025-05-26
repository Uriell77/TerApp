<script>
  import { onMount } from "svelte";
  import { quintOut } from "svelte/easing";
  import { scale } from "svelte/transition";
  import { page } from "$app/stores";
  import Ficha from "$lib/components/ter/Fichas.svelte";

  let load = false;

  function loading() {
    load = !load;
  }

  onMount(() => {
    setTimeout(() => {
      loading();
    }, 1);
  });
</script>

{#if load}
  <section class="section px-1 py-0" in:scale={{duration:1000, delay:1000, easing:quintOut}}>
    <p class="titulo pb-3 mb-0 pl-4 has-text-weight-bold is-size-6-touch">Servicios</p>
    <div class="box p-3 mt-0">
      <div class="columns is-mobile is-gapless slide">
        {#each $page.data.products as product, index}
          <Ficha {product} indice={index} />
        {/each}
      </div>
    </div>
  </section>

  <!-- 
    <div class="hero  py-1 m-0 mb-0" transition:scale={{duration:3000, easing:quintOut}}>
        <div class="hero-content is-flex is-flex-align-center" >
        </div>
    </div>
    -->
{/if}

<style>
  @media only screen and (min-width: 768px) {
    .slide {
      overflow-y: hidden;
      padding: 0px 50px 0px 50px;
    }

    .box {
      background-color: transparent;
    }
  }

    .box {
      background-color: transparent;
    }
  .section {
    max-width: 100vw;
    z-index: 1000;
  }

  .slide {
    overflow-x: scroll;
  }

  .slide::-webkit-scrollbar {
    display: none;
  }
  .section::-webkit-scrollbar {
    display: none;
  }

  .titulo {
    left: 0px;
    top: 0px;
    width: 100%;
    height: 1px;
    color: #1400ca;
    font-family: Kreon;
    font-size: 20px;
    letter-spacing: 1px;
  }
</style>
