<script>
  import {inputfocus, inputblur} from '$lib/js/script.js';

  let puservar = $state(); 
  let ppassvar = $state(); 
  let inputuser = $state(); 
  let inputpass = $state();
  let ver = $state(false);

  let {
    type ='text',
    name ='name',
    value ='',
    required = '0'

  } = $props();


  function verpass(){
    ver = !ver
    switch (name){
      case "Password":
      if(ver){
        type = "text"
      }else{
        type = "password"
      }
      case "Re-Password":
      if(ver){
        type = "text"
      }else{
        type = "password"
      }
    }


    if(name != "Password"){
    }else{
      if(ver){
        type = "text"
      }else{
        type = "password"
      }
    }
  }


</script>


        <div class="label has-text-left">
          <input class="input is-rounded user"
            type="{type}"
            name ="{name}"
            bind:value="{inputuser}"
            onfocus="{inputfocus}"
            onblur="{inputblur}"
            {required}
          />
          <p class="puser has-text-weight-bold" >
            {name}
          </p>
          {#if name == "Password" || name == "Re-Password"}
          <p class="tag is-rounded is-light {ver ? "is-danger": "is-primary"} buser has-text-weight-bold" onclick="{verpass}" >
            {#if ver}
                <img src="./eye-off.svg" alt="">
              {:else}
                <img src="./eye.svg" alt="">
            {/if}
          </p>
          {/if}
        </div>

<style>
  .puser{
  position: relative;
  z-index: 10;
  bottom: 30px;
  left:20px;
  color: black; 
  }
  .buser{
  position: relative;
  z-index: 30;
  bottom: 55px;
  right: -240px;
  color: black; 

  }

  .input{
  z-index: 20;
  background-color: rgba(1,1,1,0);
  color: black;
  }

  .label{
      height: 60px;
  }

</style>
