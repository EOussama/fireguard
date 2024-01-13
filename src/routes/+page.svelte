<script lang="ts">
	const appName = 'Fireguard';
</script>

<div class="content">
	<div class="content__icon">
		<img alt="Login Icon" src="./images/login.png" />
	</div>

	<div class="content__message">
		<p>Google Authentication for <b>{appName}</b></p>

		<p class="content__note">
			Make sure you're not blocking popups on this page so that the Google OAuth window is not
			blocked.
		</p>
	</div>
</div>

<style lang="scss">
	.content {
		padding: 10px;

		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;

		width: 100%;

		&__icon {
			width: 80px;

			img {
				width: 100%;
			}
		}

		&__message {
			font-size: 16px;
			font-weight: 400;
			text-align: center;
			font-family: 'Open Sans', sans-serif;

			margin-top: 20px;
			max-width: 300px;
		}

		&__note {
			color: grey;
			font-size: 12px;
		}
	}
</style>
