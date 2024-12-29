<script>
	import Icon from './Icon.svelte';
	import {createEventDispatcher} from 'svelte';

	// Dispatcher to bubble up events
	const dispatch = createEventDispatcher();

	export let label = ''; // Visible label text
	export let name = ''; // 'name' attribute on the input
	export let placeholder = '';
	export let type = 'text'; // e.g. "text", "password", "email", etc.
	export let value = '';
	export let minlength;
	export let maxlength;
	export let disabled = false;

	export let hasError = false;
	export let errorMessage = '';

	export let onlyAllowLettersAndNumbers = false;
	export let capitalizeFirstLetter = false;

	// On input, modify the value if needed and dispatch 'input' event
	function handleInput(e) {
		let newVal = e.target.value;

		if (onlyAllowLettersAndNumbers) {
			// Let’s also allow uppercase letters, so add 'i' for case-insensitivity
			newVal = newVal.replace(/[^a-z0-9]/gi, '');
		}

		if (capitalizeFirstLetter && newVal.length > 0) {
			newVal = newVal.charAt(0).toUpperCase() + newVal.slice(1);
		}

		// Update local value & notify parent
		value = newVal;
		dispatch('input', {value: newVal});
	}

	// Just bubble up focus/blur if needed
	function handleBlur() {
		dispatch('blur');
	}

	function handleFocus() {
		dispatch('focus');
	}
</script>

<div class="input_container">
	{#if label}
		<label class="label" for={name}>
			<p class:error_label={hasError}>{label}</p>
		</label>
	{/if}

	<div class="field_wrapper">
		<input
			id={name}
			{name}
			{placeholder}
			bind:value
			{minlength}
			{maxlength}
			{disabled}
			class="input"
			class:focused={false}
			class:error_input={hasError}
			aria-invalid={hasError}
			aria-errormessage={hasError && errorMessage ? `${name}-error` : undefined}
			on:input={handleInput}
			on:blur={handleBlur}
			on:focus={handleFocus}
		/>
		{#if hasError}
			<Icon name="error_sign" />
		{/if}
	</div>

	<!-- Display error text if needed -->
	{#if hasError && errorMessage}
		<p id="{name}-error" class="error_msg">{errorMessage}</p>
	{/if}
</div>

<style lang="postcss">
	.input_container {
		@apply font-sans;
	}

	.label {
		@apply text-white;
	}

	/* Place label error color directly on <p> so you can style it differently from input error */
	.error_label {
		@apply text-mute-red;
	}

	.field_wrapper {
		@apply flex items-center mt-4;
	}

	.input {
		@apply w-full bg-smoky-grey border border-solid border-white rounded px-3 py-2 text-white outline-0;
	}

	.input:focus {
		@apply border-bubble-purple text-bubble-purple;
	}

	/* If there's an error, highlight the border in red */
	.error_input {
		@apply border-mute-red;
	}

	/* Space for the icon when error is present */
	.error_input {
		@apply pr-10;
	}

	/* Error message text */
	.error_msg {
		@apply mt-2.5 text-mute-red;
	}
</style>
