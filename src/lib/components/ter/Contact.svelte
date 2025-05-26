<script>
    import {onMount} from "svelte";
    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import contact from "$lib/images/connect.svg";
  import Noob from '$lib/components/ter/Noob.svelte';

    let open = false;

    function openContacto(){
        open = !open;
    }


</script>

<!-- 
    <figure class=" image is-64x64 button is-gradient-secondary-soft is-clinic-secondary" in:fly={{duration:3000, x:0, y:100, opacity:0.5, easing:quintOut}} on:click={openContacto} on:keyup={openContacto}>
        <img src="{contact}" alt="" class="is-contact is-clickable" />
    </figure>
 -->



<button class="button is-rounded is-gradient-secondary-soft is-clinic-secondary" 
on:click={openContacto} on:keyup={openContacto}
>
    <span class="icon is-small">
      <i>
        <img src="{contact}" alt="" class="is-contact is-clickable" />
      </i>
    </span>
    <span class="has-text-link has-text-weight-bold">Contacto</span>
  </button>

{#key open}
<div class="contacto {open ? "":"is-hidden"}" transition:fly={{duration:1000, x:0, y:600, opacity:0.7, easing:quintOut}}>
    <div class="section py-0 is-justify-content-flex-end is-flex">
    <div class="tag  is-clinic-primary closed mr-0 mt-3 p-3 is-clickable" on:click={openContacto} >X</div>
    </div>
    <div class="container">
        <div class="section has-text-centered ">
            <div class="title is-font-primary">Telefonos de Contacto:</div><br>
            <div class="is-size-4 has-text-black">
            +58 04145798772<br>
            Calle 19 de Abril Diagonal a la Biblioteca del Estado
            </div>

        </div>
    </div>
</div>
{/key}

<style>


    .closed{
        width:3px;
        height:8px;
        border-radius: 50%;
        z-index:180;

    }


    .contacto{
        background-color:rgb(255, 255, 228);
        border-radius: 10% 10% 0px 0px;
        position:fixed;
        top:50%;
        z-index:150;
        width:100%;
        height:50%;
        border-style:solid;
        border-color: var(--color-clinic-primary)
    }

    .button{
        position:fixed;
        z-index:100;
        bottom:5px;
        right:5px;
        width: 20%;
    /*position:absolute;
      bottom:0%;
      right:0px;*/
    }

    @media only screen and (min-width: 780px){
    .contacto{
        background-color:rgb(255, 255, 228);
        border-radius: 10% 10% 0px 0px;
        position:fixed;
        top:50%;
        right:0%;
        z-index:150;
        width:20%;
        height:50%;
        border-style:solid;
        border-color: var(--color-clinic-primary)
    }

    }

</style>
