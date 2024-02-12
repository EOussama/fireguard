<script lang="ts">
	import { onMount } from 'svelte';
	import { EventHelper, EventType } from '@eoussama/firemitt';

	import Head from '$lib/components/head.svelte';
	import Button from '$lib/components/button.svelte';

	import { appStore } from '$lib/core/stores/app.store';
	import { AuthStatus } from '$lib/core/enums/auth-status.enum';
	import { FireguardHelper } from '$lib/core/helpers/fireguard.helper';

	let iterations = 3;
	const interval = 1000;

	$: remainingTime = `${iterations} second${iterations === 1 ? '' : 's'}`;

	const onClose = (): void => {
		if (FireguardHelper.isReady()) {
			EventHelper.send(EventType.AuthSucceded, { token: $appStore.token });
		}

		FireguardHelper.close();
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

<div class="success">
	<div class="success__head">
		<Head status={AuthStatus.Success} />
	</div>

	<div class="success__body">
		<p>Logged-in with success!</p>
		<p>Auto closing in {remainingTime}...</p>
	</div>

	<div class="success__foot">
		<Button label="Close" on:click={onClose} />
	</div>
</div>

<style lang="scss">
	.success {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;

		margin-bottom: 20px;

		&__head {
			margin-top: 20px;
		}

		&__body {
			margin-top: 10px;
			text-align: center;
		}

		&__foot {
			margin-top: 15px;
		}
	}
</style>
