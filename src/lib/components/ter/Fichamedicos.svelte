<script>
  import { onMount } from "svelte";
  import { scale, fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  let load = false;

  export let psinopsis;
  export let indice;

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
  <div
    class="control mx-0 ficha has-text-centered py-0 my-0 px-0 mt-6 is-clickable "
    in:scale|global={{ duration: 3000 }}
  >
    <div class="columns is-mobile px-0 mt-0">
      <div class="column is-half px-0 mt-0">
        <div class="section mx-0 py-2">
            <div class=" has-text-black has-text-weight-bold is-font-primary is-size-4">nombre</div>
          <p class="has-text-black mx-0 psino pt-5">
            {psinopsis}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, corporis adipisci voluptates, voluptatum ut, molestias voluptatem possimus aliquid ipsum earum saepe optio! Non explicabo, mollitia sit aspernatur quos odit ex. 
          </p>
        </div>
      </div>
      <div class="column is-half">
        <figure class="image p-0 m-0">
          {#if psinopsis && indice}
          <img src="/personal/{psinopsis}personal{indice}.png" alt="logo" class="p-0 m-0 " loading="lazy"/>
          {:else}
          <img src="/avatar.png" alt="logo" class="p-0 m-0" loading="lazy"/>
          {/if}
        </figure>
      </div>
    </div>
  </div>
{/if}

<style>

  .psino{
    display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  }


 

  .ficha {
    box-shadow: rgba(58, 51, 130, 0.555) 0px 3px 4px;
    border-radius: 10px;
    background-blend-mode: normal;
    background-color: green;
    background: linear-gradient(180deg, #64a3e8 0%, #e3dede 98%, #e3dede 105%);
  }


  img{
    max-width: 740px;
    max-height: 193px;
  }

 
  @media only screen and (min-width: 768px) {
   
  }
  /* your styles go here */
</style>
