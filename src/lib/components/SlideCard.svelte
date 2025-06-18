<script>
// @ts-nocheck

  import { fade } from 'svelte/transition';
  const dermov = $state(0);
  const izmov = $state(0);
  let tabers = $state(0);
  let banner;
  let ter = $state(false);
  let tor = "/logo.jpeg";


  function cambio(e){
    console.log(e.target.id)
    ter = !ter;
  }

  export function desplazarIzquierda() {
    tabers.scrollLeft -= 455; // Desplaza 50 píxeles a la izquierda
    console.log(tabers.scrollLeft)
    tabers.behavior = "smooth";
  }

  export function desplazarDerecha() {
    tabers.scrollLeft = 455; // Desplaza 50 píxeles a la derecha
    console.log(tabers.scrollLeft);
    tabers.behavior = "smooth";
  }

</script>


<section class="box mt-0 p-1">

  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="tab is-size-2 minor is-clickable cristal has-text-black" id="minor" onclick="{cambio}" onkeyup="{cambio}">
    &#60;
  </div>
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="tab is-size-2 mayor is-clickable cristal has-text-black" id="mayor" onclick="{cambio}" onkeyup="{cambio}">
    &#62;
  </div>
  <div class="banner-slider is-flex">

    <div class="tarjeta">
      {#key ter}
        <img src="{ter ? "/logo2.jpeg":"/Gemini2.jpeg"}" alt="imagendebanner" in:fade={{delay:300,duration:300}} out:fade={{duration:300}}  loading="lazy"/>
        <div class="container">
          <p class="cristal" in:fade={{delay:300,duration:300}} out:fade={{duration:300}} inert="false">kjkkjhkhjjhjhgjgh</p>
        </div>
      {/key}
    </div>

  </div>

  <div class="is-size-7 numeracion cristal has-text-black">000000</div>


</section>




<style>


  .box{
    background-color:rgba(1,1,1,0) !important;
    z-index:10;
  }


  .numeracion{
    position:relative;
    top:-20px;
    border-radius: 0px 0px 50px 50px;
  }

  p{
    position:absolute;
    top:-10.5%;
    left:-20px;
    z-index:100;
    color:black;
    width:50%;
    height:10rem;
    border-radius:30px 100px 0px 30px;
    z-index:10;
    text-align:center;
    vertical-align:center;
  }

  img{
    width:100%;
    height:100%;
  }

  .tab{
    position:absolute;
    top:3rem;
    z-index:1000;
  }

  .mayor{
    right:0%;
  }

  .tarjeta{
    height:10rem;
    border-radius:30px;
    min-width:100%;
    overflow:hidden;
  }

  .slide{
    width:100%;
    height:13rem;
    overflow:hidden;
    position:relative;
    border-radius:30px;
    overflow-x:scroll;
    justify-content:center;
    text-align:center;
    align-items:center;
  }
  .slide::-webkit-scrollbar{
    display:none;
  }

  /* Estilos para desktop (a partir de un cierto ancho) */
  @media (min-width: 768px) {
    .tab{
      top:87%;
    }
  .mayor{
    right:21%;
  }

  }
</style>
