<script lang="ts">
	import '../theme/main.scss';
</script>

<svelte:head>
	<title>Fireguard</title>
</svelte:head>

<div class="root">
	<main class="body">
		<slot />
	</main>
</div>

<style lang="scss">
	.root {
		position: relative;
	}
</style>
