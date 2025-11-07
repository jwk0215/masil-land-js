<script lang="ts">
	import logo from "$assets/ma-sil.png";
    import Header from "$components/header.svelte";
	



	let { children } = $props();
</script>




<svelte:head>
	<link rel="icon" href={logo} />
	<title>마실</title>
</svelte:head>

<main id="layout">
	<Header />

	<div id="page">
		{@render children()}
	</div>
</main>




<style>
	#layout {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-rows: auto 1fr;
		grid-template-columns: 1fr;
		grid-template-areas: 
			"header"
			"page";
	}
	#page {
		grid-area: page;
		overflow: hidden;
	}
</style>