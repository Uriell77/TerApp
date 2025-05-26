<script>
  import SlideCard from '$lib/components/SlideCard.svelte';
  import Cuadricula from '$lib/components/Cuadricula.svelte';
</script>



<div class="columns is-centered is-vcentered is-gapless is-multiline">
  <div class="column is-7-desktop is-full-mobile is-align-content-center mt-0 py-1 mb-0">

    <SlideCard />


    <div class="columns is-centered is-multiline mt-0 pt-0">
      <div class="column is-full mt-0 pt-0">
          <div class="box cristal mt-0">

            <Cuadricula />

          </div>
      </div>
    </div>


  </div>
</div>



<style>


  .dos{
    width:100%;
    height: 35rem;
  }

  .box{
  }


</style>
