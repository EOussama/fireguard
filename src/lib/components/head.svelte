<script lang="ts">
	import { fly } from 'svelte/transition';
	import { appStore } from '$lib/core/stores/app.store';
</script>

<div class="head">
	{#if $appStore.config?.logo}
		<div class="head__icon" transition:fly>
			<img alt="App Icon" src={$appStore.config.logo} />
		</div>

		<div class="head__icon head__icon--loader">
			<div class="loader"></div>
			<img alt="login Icon" src="images/login.svg" />
		</div>
	{/if}

	<div class="head__icon">
		<img alt="Fireguard Icon" src="./images/logo.svg" />
	</div>
</div>

<style lang="scss">
	.head {
		display: flex;
		flex-direction: row;

		align-items: center;
		justify-content: center;

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
	}
</style>
