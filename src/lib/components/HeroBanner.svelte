<script>
  import HeroButtons from '$lib/components/HeroButtons.svelte';

  let {usuario} = $props();
</script>


<section class="hero pb-4 is-justify-content-center" style="background-image:url('{usuario.store.storebanner}')">

  <!-- hero buttoms -->
  <HeroButtons />

  <!-- hero body -->
  <div class="hero-body py-5">
    <div class="logo">
      <img src="{usuario.store.storelogo}" alt="logo" loading="lazy">
    </div>
    <h1 class="has-text-weight-bold">{usuario.store.storename}</h1>
    <h4>{usuario.store.storequote}</h4>
  </div>

  <!-- hero tabs -->
  <div class="contenttab is-flex">
  <!--  <Tabs /> -->
  </div>

</section>

<style>
  .logo{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-120%);
    width:100px;
    height:100px;
    border-radius:30px;
  }

  .hero-body{
    background-color: rgba(200,200,200,.4);
    backdrop-filter: blur(4px);
    border-radius:30px;
    border-style:solid;
    border-width:thin;
    border-color: rgba(1,1,1,.3);
  }

  .hero{
    background-color: rgba(200,200,255,.3) !important;
    overflow: hidden;
    background-size:cover;
    background-position:center center;
    background-repeat:no-repeat;
    background-attachment: center;
    align-items:center;
  }

</style>
