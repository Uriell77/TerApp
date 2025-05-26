<script>
  import { redirect } from "@sveltejs/kit";
  import { onMount } from "svelte";
  import { scale, fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { page } from "$app/stores";
  export let product;
  export let indice;
  let iconos = ["Estetoscopio", "Tubo", "Jeringa", "Electro", "Eco", "Presion"];

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
  <div class="column mx-1 is-2-desktop is-3-tablet has-text-centered">
    <div class="cards is-clickable my-4">
      <div class="image my-0">
        <img src="/logos/{iconos[indice]}.png" alt="" />
      </div>
      <div class="producto py-0 my-0 is-size-7-mobile is-size-4-desktop">
          {product.productname}
      </div>
    </div>
  </div>
{/if}

<style>
  /*
    
   .card-content{
    background-color: red;
    height: 20vh;
    width: 20vw;
    background-size: cover;
    background-repeat: none;
    background-attachment:local;
   } 
    .card{
        color:black;
        background-color: rgb(149, 149, 179);
        max-height:25vh;
        overflow: hidden;
    }


    
    */
  @media only screen and (min-width: 768px) {
    .cards {
      max-width: 100%;
      min-height: 35dvh;
      border-radius: 10px;
      background-blend-mode: normal;
      background: linear-gradient(
        180deg,
        #64a3e8 0%,
        #64a3e8 98%,
        #e3dede 105%
      );
    }

    .image {
      position: relative;
      left: 50%;
      top: -14px;
      transform: translate(-50%, -0%);
      max-width: 6dvw;
      max-height: 10dvh;
      border-radius: 30px;
      background-blend-mode: normal;
    }
    .producto {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-0%, 38%);
      height: 100%;
      width: 100%;
    }
  }

  .cards {
    box-shadow: rgba(58, 51, 130, 0.555) 0px 3px 4px;
    width: 25dvw;
    height: 15dvh;
    border-radius: 10px;
    background-blend-mode: normal;
    background-color: green;
    background: linear-gradient(180deg, #64a3e8 0%,#e3dede 98%, #e3dede 105%);
  }

  .image {
    position: relative;
    left: 50%;
    top: 0px;
    transform: translate(-50%, -0%);
    width: 10dvw;
    height: 10dvh;
    border-radius: 30px;
    background-blend-mode: normal;
  }
  .producto {
    position: relative;
    left: 0px;
    top: -14%;
    background: linear-gradient(
      180deg,
      #002c8a 0%,
      #6565ed 71.79%,
      #c251ff 100%
      );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-blend-mode: normal;
    color: #1400ca;
    font-family: Kreon;
    text-align: center;
    filter: contrast(400%);
  }

  /*




  /* your styles go here */
</style>
