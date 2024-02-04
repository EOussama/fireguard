<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		console.log({ canvas });
	});
</script>

<div class="waves">
	<canvas bind:this={canvas} class="waves__canvas"></canvas>
</div>

<style lang="scss">
	.waves {
		width: 100%;
		height: 100%;

		&__canvas {
			width: 100%;
			height: 100%;
		}
	}
</style>
