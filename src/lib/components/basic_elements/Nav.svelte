<script>
	import {createEventDispatcher} from 'svelte';

	// For toggling dark mode
	let is_dark_mode = false;
	function toggle_dark_mode() {
		is_dark_mode = !is_dark_mode;
		const html_el = document.documentElement;
		is_dark_mode
			? html_el.classList.add('dark')
			: html_el.classList.remove('dark');
	}

	// Optional: event dispatcher if needed for parent->child communication
	const dispatch = createEventDispatcher();
</script>

<nav class="nav_bar">
	<!-- Left logo/brand -->
	<div class="brand_container">
		<!-- Ice-cream icon or similar -->
		<svg
			class="logo_svg"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				d="M12 2a5 5 0 0 1 5 5v1.586l.707.707c.188.189.293.442.293.707V12a5 5 0 0 1-5 5h-.333l.316 3.163c.041.409-.113.812-.414 1.113-.298.301-.708.447-1.118.399-.548-.067-.973-.472-1.013-1.024L9.333 17H9a5 5 0 0 1-5-5V9.999a1 1 0 0 1 .293-.707l.707-.707V7a5 5 0 0 1 5-5zm0 2C9.794 4 8 5.794 8 8v2.586a1 1 0 0 1-.293.707L7 11h10l-.707-.707A1 1 0 0 1 16 9.586V8c0-2.206-1.794-4-4-4z"
			/>
		</svg>
		<span class="brand_text">Tally</span>
	</div>

	<!-- Right nav links & icons -->
	<div class="link_container">
		<a href="#" class="link_style">Home</a>
		<a href="#" class="link_style">Notifications</a>
		<a href="#" class="link_style">Neuron Tracking</a>
		<a href="#" class="link_style">Teams</a>

		<!-- Example GitHub link/icon -->
		<a href="#" class="link_style" title="GitHub">
			<svg
				fill="currentColor"
				viewBox="0 0 16 16"
				class="icon_svg"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M8 0C3.58 0 0 3.64 0 8.13c0 3.59 2.29 6.63 5.47 7.71.4.08.55-.18.55-.39
				0-.19-.01-.82-.01-1.49-2.01.38-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01
				1.08.58 1.23.82.72 1.21 1.87.86 2.33.66.07-.52.28-.86.51-1.06-1.78-.2-3.64-.91-3.64-4.04
				0-.89.31-1.63.82-2.21-.08-.2-.36-1.02.07-2.12 0 0 .67-.22 2.2.82.64-.18 1.31-.27
				1.99-.27.68 0 1.35.09 1.98.27 1.53-1.04 2.2-.82 2.2-.82.43 1.1.15 1.92.07 2.12.51.58.82
				1.32.82 2.21 0 3.14-1.87 3.84-3.65 4.04.29.26.54.77.54 1.55 0 1.12-.01 2.02-.01 2.29
				0 .21.15.47.55.39A8.12 8.12 0 0 0 16 8.13C16 3.64 12.42 0 8 0z"
				/>
			</svg>
		</a>

		<!-- Dark mode toggle -->
		<button class="dark_mode_toggle" on:click={toggle_dark_mode}>
			{#if is_dark_mode}
				<!-- Sun icon -->
				<svg
					class="icon_svg"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 3v2m0 14v2m9-9h-2M5 12H3
						m15.364 6.364l-1.414-1.414M6.05 6.05l-1.414-1.414
						m12.728 0l-1.414 1.414M6.05 17.95l-1.414 1.414"
					></path>
					<circle cx="12" cy="12" r="5" fill="currentColor"></circle>
				</svg>
			{:else}
				<!-- Moon icon -->
				<svg
					class="icon_svg"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M17.293 13.293A8 8 0 1 1 11 2a7 7 0 0 0 6.293 11.293z"
					></path>
				</svg>
			{/if}
		</button>
	</div>
</nav>

<style lang="postcss">
	.nav_bar {
		@apply flex items-center justify-between px-4 py-3 dark:bg-black-a rounded;
	}

	.brand_container {
		@apply flex items-center space-x-2;
	}

	.logo_svg {
		@apply w-6 h-6 text-yellow-600 dark:text-yellow-300;
	}

	.brand_text {
		@apply text-xl font-semibold dark:text-gray-100;
	}

	.link_container {
		@apply flex items-center space-x-4;
	}

	.link_style {
		@apply text-gray-700 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white;
	}

	.dark_mode_toggle {
		@apply p-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100;
	}

	.icon_svg {
		@apply w-5 h-5;
	}
</style>
