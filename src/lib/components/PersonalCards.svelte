<script>
    let fichas = ["personal1", "personal2", "personal3","personal4", "personal5", "personal6","personal7"]
</script>

<div class="columns is-centered is-mobile is-multiline">
  <div class="column is-half-desktop has-text-centered pb-3">
    {#each fichas as ficha (ficha)}
      <div class="box cristal" style="background-image:url('/logo.jpeg')">
          <div class="pcont">
            {ficha}
          </div>
        </div>
    {/each}

  </div>
</div>


<style>
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
    animation-range: entry 0.1% cover 50%;
    margin-bottom:1px;
    height:14%;
    background-size:cover;
    background-repeat:none-repeat;
  }

  .pcont{
    height:35vh !important;
  }


@media (min-width: 768px) {
  .box{
    margin-bottom:1px;
    height:10%;
    width:100%;
  }

  .columns{
    width:102%;
  }

  }
</style>
