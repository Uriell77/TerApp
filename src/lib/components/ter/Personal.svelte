<script>
	import { onMount } from 'svelte';
    import { quintOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
    export let usuarios =[1,2,3,4];
    export let titulo="titulo";
    import { page } from '$app/stores';
  import Fichamedicos from '$lib/components/ter/Fichamedicos.svelte';


    let load = false;

    function loading(){
        load = !load;
    }

    onMount(()=>{
        setTimeout(()=>{
            loading()},1)
    });


</script>


{#if load}
<div class="hero  section py-1 m-0 px-2 mb-0" transition:scale={{duration:3000, easing:quintOut}}>
    <span class="has-text-weight-bold mb-0 titulo is-size-6-touch">{titulo}</span>
    <div class="field is-grouped slider pb-0 mt-0" >
        <div class="columns  is-multiline is-mobile">

            {#each usuarios as usuario,index}
            <div class="column is-half-desktop is-full-touch">
                <Fichamedicos psinopsis="{$page.data.path}" indice="{index + 1}"/>
            </div>
            {/each}

        </div>
    </div>
</div>
{/if}

<style>



.titulo {
    left: 0px;
    top: 0px;
    width: 100%;
    height: 1px;
    color: #1400ca;
    font-family: Kreon;
    font-size: 20px;
    letter-spacing: 1px;
  }
 

  @media only screen and (min-width: 768px) {
 
  }

</style>
