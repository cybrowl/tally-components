<script>
	import {createEventDispatcher} from 'svelte';
	import Icon from '../components/basic_elements/Icon.svelte';
	import Button from '../components/sign_in/Button.svelte';

	const dispatch = createEventDispatcher();
</script>

<div class="grid_layout">
	<div class="read_main_layout">
		<Icon
			name="poro_logo"
			class="cursor_default"
			size="12rem"
			scale="1"
			viewSize={{
				width: 221,
				height: 59
			}}
		/>
	</div>
	<div class="write_main_layout">
		<span class="sign_in_buttons">
			<Button />
			<Button
				label="Continue with DFINITY"
				logo_name="dfinity_logo"
				logo_size="2.5rem"
				logo_view_size={{width: 48, height: 24}}
			/>
		</span>
	</div>
</div>

<!-- Mobile Not Supported -->
<div class="grid lg:hidden h-screen place-items-center text-white text-4xl">
	<h1>Sorry, Mobile Not Supported</h1>
</div>

<style lang="postcss">
	.grid_layout {
		@apply hidden lg:grid grid-cols-12 gap-y-2 place-items-center h-screen fixed inset-0;
	}
	.read_main_layout {
		@apply col-start-1 col-end-7 row-start-1 row-end-auto flex justify-center items-center bg-black-a w-full h-full;
	}
	.write_main_layout {
		@apply col-start-7 col-end-13 row-start-1 row-end-auto flex justify-center items-center bg-black-b w-full h-full;
	}
	.sign_in_buttons {
		@apply flex flex-col gap-6;
	}
</style>
