<script>
  let ter = ["servicioa", "serviciob", "servicioc", "serviciod", "servicioe", "serviciof"]
</script>



<div class="columns is-multiline is-centered is-mobile">

  {#each ter as t}
    <div class="column is-half">
      <div class="card cristal">   
        <div class="card-content px-0 pb-1 has-text-weight-bold">
         {t}
           <p class="mx-0 cristal is-size-7 p-2">
             Consectetur eum rerum ea voluptatem est possimus earum ad. Qui
             Ipsum assumenda iste nobis dolores tempore? Veritatis vel totam blanditiis?
           </p>
        </div>
      </div>
    </div>
  {/each}


</div>


<style>
  .card-content{
    height:10rem;
    color:black;
    overflow:hidden;
  }


  p{
    color:black;
    overflow:hidden;
    text-align:center;
    position:relative;
    left:0px;
    height:87px;
    padding:0px 0px;
    text-overflow:ellipsis;
    white-space:nowrap;
    line-clamp: 3;
  }



</style>
