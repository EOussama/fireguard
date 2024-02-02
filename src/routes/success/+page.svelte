<script lang="ts">
	import { onMount } from 'svelte';
	import { appStore } from '$lib/core/stores/app.store';
	import { EventHelper, EventType } from '@eoussama/firemitt';

	let iterations = 3;
	const interval = 1000;

	$: remainingTime = `${iterations} second${iterations === 1 ? '' : 's'}`;

	const onClose = (): void => {
		EventHelper.send(EventType.AuthSucceded, { token: $appStore.token });
		window.close();
	};

	onMount(() => {
		const intervalFn = setInterval(() => {
			if (--iterations === 0) {
				onClose();
				clearInterval(intervalFn);
			}
		}, interval);
	});
</script>

Auto closing in {remainingTime}...
<br />
<button on:click={onClose}>Close</button>
