<script>
    let fichas = ["Dr Engreido1", "personal2", "personal3","personal4", "personal5", "personal6","personal7"]
  
</script>

<section class="section titulo p-0 mb-2">
  Sit aut veniam dolor ratione illum quos praesentium veritatis eius Fugiat fuga distinctio dignissimos iure voluptatum quidem? Id officia ipsam?
  </section>
<div class="columns is-centered  is-multiline">
  <div class="column is-half-desktop has-text-centered pb-3">
    <div class="scroller p-2">
    {#each fichas as ficha (ficha)}
      <div class="box cristal" style="background-image:url('doc.png')">
          <div class="pcont subtitle has-text-black">
            {ficha}
          </div>
            <div class="container psinop  has-text-link">
                Ipsum maxime ipsum sunt perferendis reiciendis. Tempore maiores provident expedita!
            </div>
        </div>
    {/each}
    </div>
  </div>
</div>


<style>
  .titulo{
    margin-top:-1rem !important;
  }

  .pcont{
    height:auto !important;
    background-color:rgba(255,255,255,.7);
    border-radius:10px;
  }

  .psinop{
    position:relative;
    top:70%;
    background-color:rgba(255,255,255,.7);
    border-radius:10px;
  }

  .scroller{
    overflow:hidden;
    overflow-y:scroll;
    width:100%;
    height:77vh;
    margin-bottom:-100px !important;
    border-radius:10px;
  }

  .scroller::-webkit-scrollbar{
    display:none;
  }

  @keyframes show {
    from{
      opacity:0;
      scale:50% 80%;
    }
    to{
      opacity:1;
      scale:100%;
    }
  }

  .box{
    view-timeline-name: --reveal;
    animation-name: show;
    animation-fill-mode:both;
    animation-timeline: --reveal;
    animation-range: entry -10% cover 50%;
    margin-bottom:1px;
    height:87%;
    background-size:cover;
    background-repeat:none-repeat;
    background-position:center;
  }



@media (min-width: 768px) {
  .titulo{
    margin-top:6rem !important;
  }


  .box{
    margin-bottom:10px;
    height:84%;
    width:50%;
    background-size:cover;
    background-repeat:none-repeat;
  }

  .scroller{
    transform:scale(1.55, 1);
    background-color:rgba(1,1,1,.2);
    margin-top:1rem;
  }

  .pcont,.psinop{
    position:relative;
    right:-17rem;
    background-color:rgba(1,1,1,0);
  }

  .psinop{
    top:20%;
    background-color:rgba(255,255,255,0);
  }



  }
</style>
