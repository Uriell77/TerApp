<script>
  import Cuadricula from '$lib/components/Cuadricula.svelte';
  import Tabs from '$lib/components/Tabs.svelte';
</script>



<div class="columns is-centered is-vcentered is-gapless is-multiline">
  <div class="column is-7-desktop is-full-mobile is-align-content-center mt-0 py-1 mb-0">



    <div class="columns is-centered is-multiline mt-0 pt-0">
      <div class="column is-full mt-0 pt-0">
        <div class="box cristal mt-0">

          <!-- hero tabs -->
          <div class="contenttab is-flex section py-0">
            <Tabs />
          </div>
          <hr />
          <Cuadricula />

        </div>
      </div>
    </div>


  </div>
</div>



<style>

  hr{
    border-style:solid;
    border-width:thin;
    border-color: rgba(1,1,1,.2);
  }


  .dos{
    width:100%;
    height: 35rem;
  }

  .contenttab{
    width:100%;
  }


</style>
