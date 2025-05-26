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
             jhkjhkjhjkhkjhkjhjkkjhghjhkkjhkjhkjhkj
             Amet in aliquam temporibus velit nulla Doloribus excepturi aliquam ipsam libero quas quia Rem earum reprehenderit illo dolorem explicabo velit.
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
    text-align:center;
    position:relative;
    bottom:-25px;
    left:0px;
    height:87px;
    width:100%;
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;
    word-break: break-all;
  }



</style>
