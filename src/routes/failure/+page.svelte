<script lang="ts">
	import { AuthStatus } from '$lib/core/enums/auth-status.enum';

	import Head from '$lib/components/head.svelte';
	import Error from '$lib/components/error.svelte';
</script>

<div class="failure">
	<div class="failure__head">
		<Head status={AuthStatus.Failure} />
	</div>

	<div class="failure__message">
		<Error />
	</div>
</div>

<style lang="scss">
	.failure {
		display: flex;
		flex-direction: column;

		align-items: center;
		justify-content: center;
	}
</style>
