<script>
	import Header from './Header.svelte';
	import '../app.css';
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
  injectSpeedInsights();


	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="app">

	<main class="p-0">
		{@render children()}
	</main>

</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
    background-color:#2E333D;
    background-image: url('/Gemini.jpeg'); 
    background-size: auto 100%;
    background-position:center;
    overflow-x:hidden;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
    overflow-x:hidden;

	}


	
</style>
