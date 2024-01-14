<script lang="ts">
	import { onMount } from 'svelte';
	import type { TConfig } from '$lib/core/types/config.type';
	import { error, redirect } from '@sveltejs/kit';

	let config: TConfig;

	onMount(() => {
		const sender = window.opener;

		// if (sender) {
		config = {
			appName: 'Clave'
		};
		// }
	});
</script>

<div class="content">
	<div class="content__icon">
		<img alt="Login Icon" src="./images/logo.svg" />
	</div>

	<div class="content__message">
		{#if config}
			<p>Authentication for <b>{config.appName}</b>.</p>
			<p>
				Powered by <a target="_blank" href="https://github.com/EOussama/fireguard">Fireguard</a>.
			</p>
		{:else}
			<p>Fireguard has to be opened by a master page.</p>
		{/if}
	</div>

	<p class="content__note">Make sure you're not blocking popups on this page.</p>
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

		&__icon {
			width: 80px;

			img {
				width: 100%;
			}
		}

		&__message {
			font-size: 16px;
			font-weight: var(--font-weight-regular);

			margin-bottom: 20px;

			b {
				font-weight: var(--font-weight-bold);
			}

			a {
				padding: 0 2px;
				position: relative;

				text-decoration: none;
				color: hsl(var(--color-primary-hsl), 30%);

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

		&__note {
			color: grey;
			font-size: 12px;
		}
	}
</style>
