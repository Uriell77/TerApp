<script>
  let tab = ["Servicios","Personal","Promociones","Quienes Somos?"]
  let estate = $state('Servicios');
  let {intab=$bindable()} = $props();

  function activo(e){
    estate = e.target.textContent
    intab = e.target.id
  }
</script>

<section class="section is-pulled-bottom-mobile px-0">

  <div class="tabs is-centered is-fullwidth-mobile" onclick={activo}>
    <ul>
      {#each tab as t,index}
      <li class="{estate == t ? "is-active activo":""} cristal" >
        <a class="is-size-7 has-text-black" id="{index}">{t}  </a>
      </li>
      {/each}
    </ul>
  </div>

  </section>

<style>
  .activo{
    font-weight: bold;
    background-color: rgba(200,200,240,.9);
    border-radius: 20px 20px 0px 0px;
    transform:scale(1.2,1);
    z-index:100;
  }

  .section{
  position: stticky;
  transform:translate(0px,18px);
  }

  .cristal{
    border-radius: 20px 20px 0px 0px;
  }

  li{ 
    border-style:solid;
    border-color:grey;
    border-width:thin;
  }




@media (max-width: 768px) {
  .cristal{
    border-radius: 20px 20px 0px 0px;
  }

  }
</style>
