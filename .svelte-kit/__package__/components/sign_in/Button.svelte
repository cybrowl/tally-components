<!-- src/components/Button.svelte -->
<script>
	import Icon from '../basic_elements/Icon.svelte';

	export let label = 'Continue with Google';
	export let logo_name = 'google_logo';
	export let logo_view_size = {width: 32, height: 32};
	export let logo_size = '2rem';
</script>

<button class="sign_in_button">
	<Icon
		name={logo_name}
		class="cursor_pointer"
		size={logo_size}
		scale="1"
		viewSize={logo_view_size}
	/>

	<p>{label}</p>
</button>

<style>
	.sign_in_button {
		display: flex;
		width: 20rem;
		align-items: center;
		gap: 1.5rem;
		border-radius: 0.375rem;
		border-width: 1px;
		border-style: solid;
		--tw-border-opacity: 1;
		border-color: rgb(255 255 255 / var(--tw-border-opacity));
		padding: 1rem;
		font-family: Nano Sans, sans-serif;
		font-size: 1.25rem;
		line-height: 1.75rem;
		--tw-text-opacity: 1;
		color: rgb(255 255 255 / var(--tw-text-opacity));
		border-color: rgba(255, 255, 255, 0.25)
}
</style>
