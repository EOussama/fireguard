<script lang="ts">
	import { onMount } from 'svelte';
	
	import 'three';
	import vanta from 'vanta/dist/vanta.waves.min';

	let canvas: HTMLDivElement;

	onMount(() => {
		// console.log(vanta({ el: canvas }));
		vanta({
			el: canvas,
			color: 0x000000,
			waveHeight: 20,
			shininess: 50,
			waveSpeed: 1.5,
			zoom: 0.75
		});
	});
</script>

<div class="waves">
	<div bind:this={canvas} class="waves__canvas"></div>
</div>

<style lang="scss">
	.waves {
		width: 100%;
		height: 100%;

		&__canvas {
			// width: 100%;
			// height: 100%;
		}
	}
</style>
