<script>
  import Logo from "$lib/components/ter/Logo.svelte";
    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    export let slug;

    let openned = false;
    function open(){
        openned = !openned;
    }
</script>


<nav class="navbar"  aria-label="main navigation">
    <div class="navbar-brand">

        <Logo slug={slug} tam="is-128x128 "/>

        <a href="" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" on:click={open} >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu {openned ? "is-active":""}" >
        <div class="navbar-start">
            <a class="navbar-item has-text-black" href="#home">
                Home
            </a>

            <a class="navbar-item has-text-black" href="#info">
                Servicios
            </a>

            <!-- svelte-ignore a11y-invalid-attribute -->
            <a class="navbar-item has-text-black" href="#quienes">
                Quienes Somos?
            </a>

        </div>
    </div>

</nav>


<style>

    .navbar,.navbar-menu,.navbar-item{
        background-color: rgba(1,1,1,0) !important;
    }

    .navbar-burger{
        background-color: white;
    }
</style>
