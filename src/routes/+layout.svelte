<script lang="ts">
	import Underlay from '$lib/components/underlay.svelte';
	import '../theme/main.scss';
</script>

<svelte:head>
	<title>Fireguard</title>
</svelte:head>

<div class="root">
	<main class="body">
		<slot />
	</main>

	<div class="underlay">
		<Underlay />
	</div>
</div>

<style lang="scss">
	.root {
		position: relative;
	}
</style>
