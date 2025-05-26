<script> 
import {onMount,afterUpdate} from 'svelte';
export let mess = false;
export let mensaje = "mensaje";
export let color = "is-primary";
import { scale } from 'svelte/transition';
function delmod(){
  mess = !mess;
}

afterUpdate(()=>{
if(mess){
  setTimeout(()=>{
    delmod()
  },5000)
}
})


</script>


{#key mess}
<article class="message {color} is-pulled-right {mess? '':'is-hidden'}" transition:scale={{duration:1000}}>
  <div class="message-header">
    {mensaje}
    <button class="delete" aria-label="delete" on:click="{delmod}"></button>
  </div>
</article>
{/key}



<style>

    .message{
        position:absolute !important;
        bottom: 0%;
        right:0%;
        z-index:100;
    }
</style>