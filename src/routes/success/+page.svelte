<script lang="ts">
	import { onMount } from 'svelte';
	import { EventHelper, EventType } from '@eoussama/firemitt';

	import Head from '$lib/components/head.svelte';

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

<div class="success">
	<div class="success__head">
		<Head status={AuthStatus.Success} />
	</div>

	<div class="success__body">
		<p>Logged-in with success!</p>
		<p>Auto closing in {remainingTime}...</p>
	</div>

	<div class="success__foot">
		<button class="success__btn" on:click={onClose}>Close</button>
	</div>
</div>

<style lang="scss">
	.success {
		$root: &;

		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;

		&__head {
			margin-top: 20px;
		}

		&__body {
			margin-top: 10px;
			text-align: center;
		}

		&__foot {
			margin-top: 15px;

			#{$root}__btn {
				cursor: pointer;

				border: none;
				border-radius: 5px;
				padding: 10px 20px;

				transition-duration: 0.2s;
				transition-property: background-color;

				color: var(--color-text);
				font-family: var(--font-primary);
				background-color: rgba(var(--color-primary-rgb), 0.2);

				&:hover {
					background-color: rgba(var(--color-primary-rgb), 0.5);
				}
			}
		}
	}
</style>
