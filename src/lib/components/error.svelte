<script lang="ts">
	export let errorMsg: string;
</script>

<div class="error">{errorMsg}</div>

<style lang="scss">
	.error {
		font-size: 14px;
		color: var(--color-error);
		font-weight: var(--font-weight-bold);
	}
</style>
