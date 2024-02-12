<script lang="ts">
	import '../theme/main.scss';
	import Foot from '$lib/components/foot.svelte';
</script>

<svelte:head>
	<title>Fireguard</title>
</svelte:head>

<div class="root">
	<main class="body">
		<slot />
	</main>

	<footer class="foot">
		<Foot />
	</footer>
</div>

<style lang="scss">
	.root {
		position: relative;

		text-align: center;

		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}
</style>
