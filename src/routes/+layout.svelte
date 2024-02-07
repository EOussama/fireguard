<script lang="ts">
	import Particles from '$lib/components/particles.svelte';
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
		<Particles />
	</div>
</div>

<style lang="scss">
	.root {
		position: relative;
	}
</style>
