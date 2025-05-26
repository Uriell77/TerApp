<script>
  import { onMount } from 'svelte';
  import { fade, fly } from "svelte/transition";
  import { enhance } from "$app/forms";
  import { Tween, Spring } from "svelte/motion";
  import Input from "$lib/components/Input.svelte";

  /** @type {import('./$types').PageProps} */
  let { coock,message, data, form } = $props();

  const mov = new Tween(28, { duration: 200 });
  /* variable para cambiar el formulario */
  let LogReg = $state(false);
  let charger = $state(false);
  /* variables de login*/
  let inlogin = [
    {
      name: "Usuario",
      required: "1",
    },
    { type: "password",
      name: "Password",
      required: "1",
    },
  ];

  /* variables de registro*/
  let inreg = [
    {
      name: "Email",
      type: "email",
      required: "1",
    },
    {
      name: "Usuario",
      required: "1",
    },
    { type: "password",
      name: "Password",
      required: "1",
    },
    { type: "password",
      name: "Re-Password",
      required: "1",
    },
  ];

  //funcion cambio de form
  function formchange() {
    LogReg = !LogReg;
    if (LogReg == false) {
      mov.target = 28;
    } else {
      mov.target = 35;
    }
  }


$effect(() => {
    if (message === 'yeah' || message === "success") {
      setInterval(()=>{
        charger = 'url(/checked.png)'
      },3000)
      charger = 'url(/check.gif)'
    }    
  });


$effect(() => {
    if (charger === 'url(/checked.png)' && message === 'yeah') {
      setInterval(()=>{
        window.location.replace(`/${coock}`);
      },1000)
    }else if(charger == 'url(/checked.png)' && message === 'success'){
      setInterval(()=>{
        window.location.reload();
      },1000)
    }
  });


  </script>

{#key LogReg}
  <div
    class="container has-text-centered box px-6 pb-3 pt-3 is-shadowless"
    style:height="{mov.current}rem"
  >
    <section>
      {#if message == "yeah"}
        <div class="circle mb-1" style="background-image: {charger}"
        in:fade={{ y: 200, duration: 1000  }}
        ></div>
      {:else if message == "success"}
        <div class="circle mb-1" style="background-image: {charger}"
        in:fade={{ y: 200, duration: 1000  }}
        ></div>
      {:else}
        <div class="circle mb-1"
          in:fade={{ y: 200, duration: 1000}}
        ></div>
    {/if}
    </section>

    <!-- Gestion de Mensaje -->

    {#if message == "passDif"}
      <p
        class=" py-0 my-0 has-text-weight-bold has-text-danger message is-size-7"
        in:fade={{ y: 200, duration: 2000 }}
      >
        Passwords no Coinciden
      </p>
    {:else if message == "EmailExistente"}
      <p
        class=" py-0 my-0 has-text-weight-bold has-text-danger message is-size-7"
        in:fade={{ y: 200, duration: 2000 }}
      >
        Email Ya Existe
      </p>
    {:else if message == "usuarioExistente"}
      <p
        class=" py-0 my-0 has-text-weight-bold has-text-danger message is-size-7"
        in:fade={{ y: 200, duration: 2000 }}
      >
        Usuario Ya Existe
      </p>
    {:else if message == "success"}
      <p
        class=" py-0 my-0 has-text-weight-bold has-text-danger message is-size-7"
        in:fade={{ y: 200, duration: 2000 }}
      >
      </p>
      <!-- validaciones de login -->
    {:else if message == "usuarioInexistente"}
      <p
        class=" py-0 my-0 has-text-weight-bold has-text-danger message is-size-7"
        in:fade={{ y: 200, duration: 2000 }}
      >
        Usuario Incorrecto
      </p>
    {:else if message == "passwordInexistente"}
      <p
        class=" py-0 my-0 has-text-weight-bold has-text-danger message is-size-7"
        in:fade={{ y: 200, duration: 2000 }}
      >
        Password Incorrecto
      </p>
    {:else if message == "yeah"}
      <p
        class=" py-0 my-0 has-text-weight-bold has-text-danger message is-size-7"
        in:fade={{ y: 200, duration: 2000 }}
      >
      </p>
    {/if}
    <!--  -->




    {#if LogReg == false}
      <form class="form mt-3" action="?/ing" id="ing" method="POST" use:enhance>
        {#each inlogin as element}
          <Input {...element} />
        {/each}
      </form>
    {:else}
      <form class="form mt-3" action="?/reg" id="reg" method="POST" use:enhance>
        {#each inreg as element}
          <Input {...element} />
        {/each}
      </form>
    {/if}
    <div class="group is-flex mt-3">
      <button class="button is-rounded is-dark is-light" onclick={formchange}>
        {#if LogReg}
          Ir a Login
        {:else}
          Ir a Registro
        {/if}
      </button>
      <button class="button is-rounded is-link" form={LogReg ? "reg" : "ing"}>
        {#if LogReg}
          Registrarme
        {:else}
          Ingresar
        {/if}
      </button>
    </div>

    <p class="is-size-7 has-text-dark is-light pie">
      Olvido su password<br />
      Amet quis doloribus ipsam nemo veniam, temporibus Deleniti facilis nulla!
    </p>
  </div>
{/key}

<style>
  .pie {
    position: absolute;
  }

  .box {
    overflow: hidden;
    animation: all 3s ease;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(2px);
  }

  .circle {
    background-color: #345656;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-image: url("./logo.jpeg");
    background-position: center;
    background-size: cover;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
    color: white;
  }



@media (max-width: 768px) {
  .cristal{
    border-radius: 20px 20px 0px 0px;
  }

  }

</style>
