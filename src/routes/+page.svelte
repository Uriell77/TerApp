<script>
  import NavBar from "$lib/components/NavBar.svelte";
  import LoginBox from "$lib/components/LoginBox.svelte";
  /** @type {import('./$types').PageProps} */
	let { data, form } = $props();
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>



<section class="hero  is-dark is-fullheight pt-0">
  <div class="hero-body pt-0">


    <!-- Login Box -->
    
    <LoginBox message={form?.response} coock={form?.user}/>


  </div>
</section>


<style>


  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
    color:white;
    background-color: rgba(1,1,1,0) !important; 

  }

</style>
