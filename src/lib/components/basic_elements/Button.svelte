<script>
	import {createEventDispatcher} from 'svelte';

	/**
	 * Button variant: 'primary', 'secondary', 'tertiary', or 'destroy'.
	 * Default = 'primary'
	 */
	export let variant = 'primary';

	/**
	 * If true, the button is disabled.
	 * You can also set `disabled={true}` from the parent.
	 */
	export let disabled = false;

	/** Button size: 'small', 'medium', 'large', etc. */
	export let size = 'medium';

	/**
	 * Optional fallback text label if no slot is provided.
	 * e.g. <MyButton label="Click me" />
	 */
	export let label = 'Click me';

	const dispatch = createEventDispatcher();

	function handle_click(event) {
		dispatch('click', event);
	}
</script>

<button
	type="button"
	class={['button', `button--${size}`, `button--${variant}`, $$props.class]
		.filter(Boolean)
		.join(' ')}
	{disabled}
	on:click={handle_click}
	on:keypress={event => {
		// TODO: accessibility (e.g., handle Enter/Space)
	}}
>
	<!-- If parent provides a slot, use that. Otherwise, use label -->
	<slot>{label}</slot>
</button>

<style lang="postcss">
	/* Base button styles */
	.button {
		@apply font-sans font-bold text-white rounded-md border-0 cursor-pointer inline-block leading-5 h-full max-h-12;
	}

	/* Size modifiers */
	.button--small {
		@apply px-2 py-1 text-sm;
	}
	.button--medium {
		@apply px-4 py-2 text-base;
	}
	.button--large {
		@apply px-6 py-3 text-lg;
	}

	/* Variants */
	.button--primary {
		@apply bg-tulip-purple;
	}
	.button--secondary {
		@apply bg-transparent border border-tulip-purple;
	}
	.button--tertiary {
		@apply bg-smoky-grey;
	}
	.button--destroy {
		@apply bg-error-red;
	}

	/* Active states */
	.button--primary:active {
		@apply bg-primary-purple;
	}
	.button--secondary:active {
		@apply border-primary-purple;
	}
	.button--tertiary:active {
		@apply bg-dark-grey;
	}
	.button--destroy:active {
		@apply bg-error-red;
	}

	/* Disabled states (using :disabled pseudo-class) */
	.button--primary:disabled {
		@apply bg-tulip-purple opacity-50 cursor-not-allowed;
	}
	.button--secondary:disabled {
		@apply border-tulip-purple opacity-50 cursor-not-allowed;
	}
	.button--tertiary:disabled {
		@apply bg-smoky-grey opacity-50 cursor-not-allowed;
	}
	.button--destroy:disabled {
		@apply bg-error-red opacity-50 cursor-not-allowed;
	}
</style>
