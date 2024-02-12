<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	/**
	 * @description
	 * If the button is primary
	 */
	export let primary: boolean = false;

	/**
	 * @description
	 * The label of the button
	 */
	export let label: string = 'Click Me!';

	/**
	 * @description
	 * Event dispatcher
	 */
	const dispatch = createEventDispatcher();

	/**
	 * @description
	 * Button click event
	 *
	 * @param e Event object
	 */
	const onClick = (e: MouseEvent) => dispatch('click', { e });
</script>

<button class="btn" class:btn--primary={primary} on:click={onClick}>{label}</button>

<style lang="scss">
	.btn {
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
			background-color: rgba(var(--color-primary-rgb), 0.4);
		}

		&--primary {
			background-color: rgba(var(--color-primary-rgb), 0.4);

			&:hover {
				background-color: rgba(var(--color-primary-rgb), 0.6);
			}
		}
	}
</style>
