<script>
	import {createEventDispatcher} from 'svelte';
	export let index;
	export let activeTab;
	export let disabled = false;

	const dispatch = createEventDispatcher();

	function handleClick() {
		if (!disabled) {
			dispatch('select', index);
		}
	}
</script>

<button
	class={[
		'tab-button',
		index === activeTab ? 'tab-button--active' : '',
		disabled ? 'tab-button--disabled' : ''
	]
		.filter(Boolean)
		.join(' ')}
	on:click={handleClick}
>
	<slot />
</button>

<style lang="postcss">
	.tab-button {
		@apply font-sans font-bold text-white cursor-pointer inline-block leading-5;

		@apply bg-transparent border-none;

		@apply px-4 py-2;
		@apply text-left;
	}

	.tab-button--active {
		@apply underline decoration-4 decoration-lilalic-purple;
		@apply font-extrabold;
	}

	.tab-button--disabled {
		@apply opacity-50 cursor-not-allowed;
	}

	.tab-button:active {
		@apply bg-dark-grey;
	}
</style>
