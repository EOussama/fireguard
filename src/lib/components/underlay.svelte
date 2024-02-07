<script lang="ts">
	import { tsParticles } from '@tsparticles/engine';
	import { onMount } from 'svelte';

	onMount(() => {
		tsParticles.load({
			id: 'tsparticles',
			options: {
				/* options here */
			}
		});
	});
</script>

<div id="tsparticles"></div>

<style lang="scss">
	.particles {
	}
</style>
