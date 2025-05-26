<script>
  // @ts-nocheck

  import { onMount} from "svelte";
  import { fly, scale, slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import Estetoscopio from "$lib/images/estetoscopio.svg";
  import Tubo from "$lib/images/tubo.svg";
  import Geringa from "$lib/images/geringa.svg";
  import Electro from "$lib/images/eco.svg";
  import Eco from "$lib/images/electro.svg";
  import Presion from "$lib/images/presion.svg";
  import Noob from "$lib/components/ter/Noob.svelte";
  import { page } from "$app/stores";
  //import emblaCarouselSvelte from "embla-carousel-svelte";

  

  let infocus;
  let t = false;
  let pru;
  let flyers = [1, 2, 3, 4, 5];

  $: item = 0;

  let load = false;
  let pagina = $page.data.path;
  let options = { loop: true, scale: true};



  function flyerview(e){
    console.log(e.target.id)
  }




  function loading() {
    load = !load;
  }
  onMount(() => {
    setTimeout(() => {
      loading();
    }, 1000);
  });

  function tec(e) {
    pru = e.x;
    //console.log(e)
  }

  function prev() {
    item = (item - 1 + flyers.length) % flyers.length;
  }

  function next() {
    item = (item + 1) % flyers.length;
  }

  function ter(e) {
    if (pru - e.x < 0) {
      prev();
    } else if (pru - e.x > 0) {
      next();
    }
  }
</script>

{#if load}
  <section
    class="section px-1 py-0"
    in:scale={{ duration: 1000, delay: 1000, easing: quintOut }}
  >
    <p class="titulo pb-3 mb-0 has-text-weight-bold is-size-6-touch">Promociones</p>

    <div class="columns is-centered is-mobile mt-6">
      <div class="column is-full-mobile is-full-desktop">
        <div class="mx-0 is-fullwidth">
          <div class="columns is-fullwidth">
            <div class="column is-fullwidth">
              <div class="embla is-in-view is-fullwidth"  use:emblaCarouselSvelte={{ options }}>
                <div class="embla__container" >
                  {#each flyers as fly}
                    <div class="embla__slide"  id="{fly}" >
                      <!-- svelte-ignore a11y-click-events-have-key-events -->
                      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                      <figure
                        class="image is-2by3 is-covered"
                        in:scale={{ duration: 500, easing: quintOut }}
                        on:click="{flyerview}"
                      >
                        <img src="/flyer/{pagina}flyer{fly}.jpg" alt="flyer" id="{fly}" loading="lazy" />
                        <div class="sombra"></div>
                      </figure>
                    </div>
                  {/each}
                </div>
              </div>

              <!-- 
                {#key item}
                
                <figure class="image is-2by3 is-covered"
                in:scale={{duration:500, easing:quintOut}}
                on:pointerenter={tec}
                on:pointermove={ter}
              >
                <img src="/flyer/{pagina}flyer{item+1}.jpg" alt="flyer">
              </figure>

              {/key}
              
            </div>

              <button class="button button1" on:click={prev}>Prev</button>
              <button class="button button2" on:click={next}>Next</button>
            {item}
          </div>
        </div>

        <div class="box is-hidden-touch">
          <div class="block titulo hero">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro explicabo debitis modi laborum inventore, fugiat atque eos numquam animi. Consequatur impedit repudiandae similique cumque vitae facilis nostrum ratione illo ex!
          </div>
        </div>

        -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 
  

<div class="section p-3 mx-0 has-text-black has-text-weight-bold title servicios" transition:scale={{duration:3000, easing:quintOut}}>
  Promociones
<hr class="barra">
  <div class="columns  is-multiline is-mobile is-centered pt-3">
    {#each $page.data.products as product, index}
    <div class="column is-full-mobile is-4-desktop is-flex px-3">
      <Noob product={product} indice={index} />
    </div>
    {/each}
  </div>
</div>
  
  -->
{/if}

<style>

  .embla {
    overflow: hidden;
    background: linear-gradient(to top, rgba(255,255,255,1), 
      #64a3e8 0%,);
  
    border-radius: 30px;
  }
  .embla__container {
    display: flex;
  }
  .embla__slide {
    flex: 0 0 60%;
    min-width: 0;
    padding:10px;
    margin-bottom: 30px; 
  }

  .image{
    border-style: solid;
    border-radius: 30px;
    border-width: 1rem;
    z-index: 100;
    border-color: #64a3e8;
  }

  img{
    border-radius: 30px;
    z-index: 100;

  }


.sombra{
  background-color: rgba(1, 1, 1, 1);
  filter: blur(30px);
  width: 103%;
  height:20%;
  position: absolute;
  bottom:-65px;
  left:auto;
  border-radius: 50px;
  transform: rotateX(65deg);
  z-index: 10;
}


  .box {
    background-color: rgba(1, 1, 1, 0);
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

  @media only screen and (min-width: 868px) {
    .section {
      margin-top: 140px;
    }


     .embla__slide {
    flex: 0 0 25%;
    min-width: 0;
    padding:40px;
    
  }


   .embla {
    overflow: hidden;
    background: linear-gradient(to top, rgba(255,255,255,1), 
      #64a3e8 0%,); 
    max-height:100%;
    border-radius: 30px;
  }
  .embla__container {
    display: flex;
    max-width:100%;
  }



  }
</style>
