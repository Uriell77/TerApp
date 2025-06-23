<script>
  import Cuadricula from '$lib/components/Cuadricula.svelte';
  import Tabs from '$lib/components/Tabs.svelte';
</script>



<section class="section titulo p-0 mb-2">
  Sit aut veniam dolor ratione illum quos praesentium veritatis eius Fugiat fuga distinctio dignissimos iure voluptatum quidem? Id officia ipsam?
  </section>
<div class="columns is-centered is-vcentered is-gapless is-multiline">
  <div class="column is-9-desktop is-full-mobile is-align-content-center mt-0 py-1 mb-0">



    <div class="columns is-centered is-multiline mt-0 pt-0">
      <div class="column is-full mt-0 pt-0">
        <div class="mt-0">

          <!-- hero tabs -->
          <div class="contenttab is-flex section py-1">
            <Tabs />
          </div>
          <div class="section p-0 pb-2">
            <div class="container p-0">
              <div class="box cristal m-0 mx-1 is-hidden-desktop">
                <div class="preview">
                </div>
              </div>
            </div>
          </div>

          <div class="cards p-2">
            <Cuadricula />
            <br>
            
          </div>

        </div>
      </div>
    </div>


  </div>
</div>



<style>
  .box{
    background-color: rgba(200,200,200,.7);
    box-shadow: 1px 6px 10px -8px rgba(0,0,0,0.75);
  }

  .preview{
    height: 8rem;
  }


  .cards{
    overflow:hidden;
    overflow-y:scroll;
    height:25rem;
    margin-bottom:-120px !important;
    padding-top:30px !important;
  }
  .cards::-webkit-scrollbar{
    display:none;
  }


  .dos{
    width:100%;
    height: 35rem;
  }

  .contenttab{
    width:100%;
  }


@media (min-width: 768px) {
  .titulo{
    margin-top:6rem !important;
  }

  .cards{
    height:auto;
  }
  }
</style>
