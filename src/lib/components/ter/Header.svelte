<script>
  import dra from "$lib/images/headers/dra.png";
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import Medicos from "$lib/images/medicos.webp";
  import Nav from "$lib/components/ter/Navbar.svelte";
  import Logo from "$lib/components/ter/Logo.svelte";
  import instagram from "$lib/images/logo-instagram.svg";
  import facebook from "$lib/images/logo-facebook.svg";
  import telegram from "$lib/images/logo-telegram.svg";
  import email from "$lib/images/logo-email.svg";
  import qr from "$lib/images/qr.svg";
  import qrdir from "$lib/images/qr.jpg";
  export let slug;
  export let storetext;

  let url = `url("${dra}")`;
  console.log(url);

  $: slide = 1;

  onMount(() => {
    setInterval(() => {
      if (slide < 5) {
        slide += 1;
      } else {
        slide = 1;
      }
    }, 4000);
  });

  let media = [qr, instagram, facebook, telegram, email];
  let media2 = ["qr", "instagram", "facebook", "telegram", "email"];

  let load = false;

  function loading() {
    load = !load;
  }
  onMount(() => {
    setTimeout(() => {
      loading();
    }, 1);
  });
  let open = false;
  let me;

  function openMedia(e) {
    open = !open;
    me = e.target.id;
  }
</script>

{#if load}
  <section
    in:fly={{ duration: 3000, x: 0, y: -500, opacity: 0.5, easing: quintOut }}
  >
    <div class="hero cabeza is-medium">
      <div class="hero-head">
        <Nav {slug} />
      </div>

      <div class="hero-body has-text-centered p-0">

        <div class="columns is-centered is-mobile p-0 m-0">

          <div class="column is-3-desktop is-6-mobile p-0 column1">
            <figure class="image vistafront is-3by4 p-0 m-0">
              <img src={dra} alt="dra" class="" loading="lazy"/>
            </figure>
          </div>

          <div class="column p-0 is-half-mobile column2 has-text-centered">
              <div class="has-text-centered p-2 oswald-title">
                <h1 class="titulo block has-text-weight-bold title">
                  {storetext.storename}
                </h1>
                <p class="subtitle has-text-black mt-5 is-size-6 frase p-0">
                  {storetext.storequote}
                </p>
              </div>
            </div>

        </div>
      </div>
    </div>
  </section>
{/if}

<style>
  @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Titan+One&display=swap");

  /*lunacy*/

  .subtitle{
    font-family: "Titan", bold;
  }
  .titulo{
    font-size: 250%;
    font-family: "Oswald", bold;
  background: linear-gradient(180deg, #002c8a 0%, #6565ed 71.79%, #c251ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-blend-mode: normal;
  color: #1400ca;
  font-weight: 400;
  text-align: center;
  text-shadow: rgba(1,1,1,.4) 0px  2px  2px;
    filter: contrast(140%);
}

  .column1{
    align-items: center;
    justify-content: center;
  }
  .column2{
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .image{
    position: relative;
    transform:scale(130%);
    top:-20%;
  }

  .vistafront {
    mask-image: linear-gradient(black 90%, transparent 100%);
    background-blend-mode: normal;
  }

  .cabeza {
    background: rgb(14, 13, 13);
    background: linear-gradient(
      180deg,
      #64a3e8 0%,
      #64a3e8 50.53%,
      #e3dede 100%
    ) !important;
    background-blend-mode: normal !important;
    height:40% !important;
  }

  .oswald-title {
    background: linear-gradient(
      180deg,
      #000000 0%,
      #000037 71.79%,
      #380652 150%
    );
    background-blend-mode: normal;
    color: #1400ca;
    font-family: "Oswald", sans-serif;
    font-weight: 50%;
    text-align: center;
    justify-content: center;
    position: relative;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }

  .hero{
    max-height: 30% !important;
  }


    @media only screen and (min-width: 768px){
  .titulo{
    font-size: 450%;
    font-family: "Oswald", bold;
  background: linear-gradient(180deg, #002c8a 0%, #2929a0 50.79%, #8b2ebe 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #1400ca;
  font-weight: 400;
  text-align: center;
  text-shadow: rgba(1,1,1,.1) 0px  7px  2px;
}
    }


</style>
