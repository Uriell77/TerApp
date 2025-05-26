<script>
	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();
</script>


	<section class="section p-0 m-0 pb-6">
		{@render children()}
	</section>


<style>
  .section {
  min-height: 100vh;
  background-color: rgb(250,250,255) !important;
  position:absolute;
  width:100%;
  left:0px;
  overflow-x:hidden;
  }




	
</style>
