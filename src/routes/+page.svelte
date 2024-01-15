<script lang="ts">
	import { onMount } from 'svelte';
	import { PUBLIC_VERSION } from '$env/static/public';

	import { EventType } from '$lib/core/enums/event.enum';
	import type { TConfig } from '$lib/core/types/config.type';
	import type { TOptions } from '$lib/core/types/options.type';

	import { EventHelper } from '$lib/core/helpers/event.helper';
	import { ConfigHelper } from '$lib/core/helpers/config.helper';

	let config: TConfig;

	onMount(() => {
		if (EventHelper.init(window.opener)) {
			EventHelper.send(EventType.Loaded).on<TOptions>(EventType.Config, (data) => {
				try {
					if (data) {
						config = ConfigHelper.load(data);
						EventHelper.send(EventType.AuthSucceded, { token: '...' });
					}
				} catch (err) {
					console.error(`[Error] ${err}`);
				}
			});
		}
	});
</script>

<div class="content">
	<div class="content__head">
		{#if config?.logo}
			<div class="content__icon">
				<img alt="App Icon" src={config.logo} />
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
		<div class="content__message">
			{#if config}
				<p>Google Authentication for <b>{config.name}</b>...</p>
			{:else}
				<p>Fireguard has to be opened by an external page.</p>
			{/if}
		</div>

		<p class="content__note">Make sure you're not blocking popups on this page.</p>
		<p class="content__note">
			Powered by <a target="_blank" href="https://github.com/EOussama/fireguard">Fireguard</a>
			v{PUBLIC_VERSION}
		</p>
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

		&__note {
			color: grey;
			font-size: 12px;
		}

		a {
			padding: 0 2px;
			position: relative;

			text-decoration: none;
			color: hsl(var(--color-primary-hsl), 35%);

			&::before {
				content: '';

				top: 0;
				left: 0;
				position: absolute;

				width: 0;
				height: 100%;

				border-radius: 5px;
				background-color: rgba(var(--color-primary-rgb), 0.15);

				transition-duration: 0.2s;
				transition-property: width;
			}

			&:hover::before {
				width: 100%;
			}
		}
	}
</style>
