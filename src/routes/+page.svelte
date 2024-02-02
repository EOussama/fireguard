<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';

	import Foot from '$lib/components/foot.svelte';
	import Error from '$lib/components/error.svelte';
	import Loader from '$lib/components/loader.svelte';

	import { EventType, EventHelper } from '@eoussama/firemitt';
	import type { BaseError, TFireguardConfig } from '@eoussama/firemitt';

	import { Page } from '$lib/core/enums/page.enum';
	import { appStore } from '$lib/core/stores/app.store';

	import { AuthHelper } from '$lib/core/helpers/auth.helper';
	import { ConfigHelper } from '$lib/core/helpers/config.helper';

	const onFailure = (error: string): void => {
		appStore.stopLoader();
		appStore.raiseError(error);
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
		{#if $appStore.config?.logo}
			<div class="content__icon" transition:fly>
				<img alt="App Icon" src={$appStore.config.logo} />
			</div>

			<div class="content__icon content__icon--loader">
				<div class="loader"></div>
				<img alt="login Icon" src="images/login.svg" />
			</div>
		{/if}

		<div class="content__icon">
			<img alt="Fireguard Icon" src="./images/logo.svg" />
		</div>
	</div>

	<div class="content__body">
		{#if $appStore.loading}
			<div class="content__loader">
				<Loader />
			</div>
		{:else}
			<div class="content__message" in:fly={{ y: 5, duration: 1000 }}>
				{#if $appStore.errorMsg}
					<Error />
				{:else}
					<p>Google Authentication for <b>{$appStore.config?.name}</b>...</p>
				{/if}
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

		&__head {
			display: flex;
			flex-direction: row;

			align-items: center;
			justify-content: center;
		}

		&__icon {
			width: 70px;
			margin: 0 10px;

			img {
				width: 100%;
			}

			&--loader {
				position: relative;
				width: 35px;

				img {
					animation-name: beat;
					animation-duration: 1s;
					animation-fill-mode: both;
					animation-direction: alternate;
					animation-iteration-count: infinite;
					animation-timing-function: ease-in-out;

					@keyframes beat {
						from {
							opacity: 0.3;
						}

						to {
							opacity: 1;
						}
					}
				}

				.loader {
					position: absolute;
					top: -3px;
					left: -2px;

					width: 40px;
					padding: 4px;

					aspect-ratio: 1;

					border-radius: 50%;
					background: var(--color-secondary);

					--_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
					-webkit-mask: var(--_m);
					mask: var(--_m);
					-webkit-mask-composite: source-out;
					mask-composite: subtract;
					animation: load 1s infinite linear;

					@keyframes load {
						to {
							transform: rotate(1turn);
						}
					}
				}
			}
		}

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
