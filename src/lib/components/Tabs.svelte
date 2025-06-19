<script>
  import Card from '$lib/components/Card.svelte';
  const stacks = ["Card","Card","Card","Card","Card","Card","Card"]
  const dermov = $state(0);
  const izmov = $state(0);
  let tabers = $state(0);



   export function desplazarIzquierda() {
     tabers.scrollLeft -= 80; // Desplaza 50 píxeles a la izquierda
     //tabers.behavior = "smooth";
  }

  export function desplazarDerecha() {
    tabers.scrollLeft += 80; // Desplaza 50 píxeles a la derecha
  }




</script>


    <div class="tag is-clickable iz is-hidden-mobile mt-1" onclick="{desplazarIzquierda}">
      &#10094;
    </div>

    <div class="tabs  mb-0 py-1 pb-4  pl-0 pr-1" bind:this ="{tabers}">

        {#each stacks as stack}
          <Card />
        {/each}

  </div>


  <div class="tag is-clickable der is-hidden-mobile mt-1" onclick="{desplazarDerecha}">
    &#10093;
  </div>

<style>
  .tabs{
    background-color: rgba(200,200,200,.7);
    width:100% !important;
    height:78px !important;
    overflow-x: scroll !important;
    scroll-behavior: smooth;
  }

  .tabs::-webkit-scrollbar{
    display:none;
  }



  .der{
    border-radius: 0px 100px 100px 0px;
    backdrop-filter: blur(4px);
    background-color: rgba(200,200,200,.4);
  }
  .iz{
    border-radius: 100px 0px 0px 100px;
    backdrop-filter: blur(4px);
    background-color: rgba(200,200,200,.4);
  }


  .tag{
    width:50px;
    height:70px; 
    background-color: rgba(200,200,255,.3) !important;
    color: black;
    border-style:solid;
    border-width:thin;
    border-color: rgba(1,1,1,.3);
  }

</style>
