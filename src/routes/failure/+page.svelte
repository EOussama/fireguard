<script lang="ts">
	import { AuthStatus } from '$lib/core/enums/auth-status.enum';

	import Head from '$lib/components/head.svelte';
	import Error from '$lib/components/error.svelte';
</script>

<div class="failure">
	<div class="failure__head">
		<Head status={AuthStatus.Failure} />
	</div>

	<div class="failure__body">
		<Error />
	</div>
</div>

<style lang="scss">
	.failure {
		display: flex;
		flex-direction: column;

		align-items: center;
		justify-content: center;
		
		&__head {
			margin-top: 20px;
		}
		
		&__body {
			margin-top: 10px;
			text-align: center;
		}
	}
</style>
