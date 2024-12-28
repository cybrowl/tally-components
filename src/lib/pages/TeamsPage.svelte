<script>
	import {createEventDispatcher, onMount} from 'svelte';
	import Nav from '../components/basic_elements/Nav.svelte';
	import Button from '../components/basic_elements/Button.svelte';

	const dispatch = createEventDispatcher();

	let value = '';
</script>

<div class="grid-layout">
	<div class="nav-layout">
		<Nav />
	</div>

	<div class="main-toolbar-layout">
		<Button label="Create Team" />
	</div>
</div>

<!-- Mobile Not Supported -->
<div class="grid lg:hidden h-screen place-items-center text-white text-4xl">
	<h1>Sorry, Mobile Not Supported</h1>
</div>

<style lang="postcss">
	:global(.carta-font-code) {
		font-family: '...', monospace;
		font-size: 1.1rem;
	}

	.grid-layout {
		@apply hidden lg:grid grid-cols-12;
	}

	.nav-layout {
		@apply col-start-2 col-end-12;
	}

	.main-toolbar-layout {
		@apply col-start-2 col-end-12 mt-4;
		@apply flex;
		@apply justify-end;
	}
</style>
