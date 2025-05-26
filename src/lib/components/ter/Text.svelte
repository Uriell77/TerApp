<script>
    import { scale } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

  export let placeholder;
  export let type;
  export let name;
  let eye = false;
  let eye2 = false;
  let eye3 = false;


  function eyechange(e){
        console.log(e.target.id)
        if(e.target.id == "password"){
        eye = !eye
        }else if(e.target.id == "repassword"){
        eye2 = !eye2
        }else if(e.target.id == "logpassword"){
        eye3 = !eye3
        }

    }

</script>


{#if type == "password"}


<div class="field"
in:scale={{duration:1000, opacity:.8}}
 >
  <p class="control has-icons-left has-icons-right">
    <input name="{name}" class="input is-small" type="{eye ? "text" : type}" placeholder="{placeholder}" />
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <span class="icon is-small is-right is-clickable eye" on:click="{eyechange}">
       <ion-icon id="password" name="{eye ?"eye-off-outline": "eye-outline"}"></ion-icon>
    </span>
  </p>
</div>

{:else}


<div class="field"
in:scale={{duration:1000, opacity:.8}}
 >
  <p class="control has-icons-left has-icons-right">
    <input name="{name}" class="input is-small" type="{eye ? "text" : type}" placeholder="{placeholder}" />
  </p>
</div>
{/if}

<style>



   .passno{
    position: absolute;
    top:47%;
    left:50%;
    transform:translate(-50%,-50%);
}
    .eye{
        position:absolute;
        top:12%;
        right:2%;
    }


    .input {
        outline: none;
        background: rgba(1,1,1,0);
        color: white;
        border: 1px solid rgba(255,255,255,.1);
        border-radius: 3px;
        transition: all .7s ease;
    }

    .input:focus {
        background: rgba(10,10,50,.5);
        border-radius: 10px;
        transform:scale(110%);
    }

    .input::placeholder {
        color: rgba(255,255,255,.5);
    }



</style>