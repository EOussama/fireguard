<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';

	import Foot from '$lib/components/foot.svelte';
	import Loader from '$lib/components/loader.svelte';

	import { EventType, EventHelper } from '@eoussama/firemitt';
	import type { BaseError, TFireguardConfig } from '@eoussama/firemitt';

	import { Page } from '$lib/core/enums/page.enum';
	import { appStore } from '$lib/core/stores/app.store';

	import { AuthHelper } from '$lib/core/helpers/auth.helper';
	import { ConfigHelper } from '$lib/core/helpers/config.helper';
	import Head from '$lib/components/head.svelte';

	const onFailure = (error: string): void => {
		appStore.stopLoader();
		appStore.raiseError(error);

		goto(Page.Failure);
	};

	const onSuccess = (token: string): void => {
		appStore.clearError();
		appStore.registerToken(token);

		goto(Page.Success);
	};

	onMount(() => {
		if (EventHelper.init(window.opener)) {
			EventHelper.send(EventType.Loaded).on<TFireguardConfig>(
				EventType.Config,
				async (config?: TFireguardConfig) => {
					try {
						if (config) {
							ConfigHelper.load(config);
							const token = await AuthHelper.login(config.firebase);

							onSuccess(token);
						}
					} catch (err) {
						const error = err as BaseError;

						onFailure(error.message);
						EventHelper.send(EventType.AuthFailed, { error: error.toObject() });
					}
				}
			);
		} else {
			onFailure('Fireguard has to be opened by an external page.');
		}
	});
</script>

<div class="content">
	<div class="content__head">
		<Head />
	</div>

	<div class="content__body">
		<!-- TODO: loader component with state access that wrapps elements -->
		{#if $appStore.loading}
			<div class="content__loader">
				<Loader />
			</div>
		{:else}
			<div class="content__message" in:fly={{ y: 5, duration: 1000 }}>
				<p>Google Authentication for <b>{$appStore.config?.name}</b>...</p>
			</div>
		{/if}

		<Foot />
	</div>
</div>

<style lang="scss">
	.content {
		margin: auto;
		padding: 10px;

		text-align: center;

		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;

		width: 100%;
		max-width: 320px;

		&__message {
			font-size: 16px;
			font-weight: var(--font-weight-regular);

			margin: 10px 0;

			b {
				font-weight: var(--font-weight-bold);
			}
		}
	}
</style>
