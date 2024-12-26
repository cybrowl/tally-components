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

<style>
	.grid_layout {
    position: fixed;
    inset: 0px;
    display: none;
    height: 100vh;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    place-items: center;
    row-gap: 0.5rem
}
@media (min-width: 1024px) {
    .grid_layout {
        display: grid
    }
}
	.read_main_layout {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 1;
    grid-row-end: auto;
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    --tw-bg-opacity: 1;
    background-color: rgb(10 10 11 / var(--tw-bg-opacity))
}
	.write_main_layout {
    grid-column-start: 7;
    grid-column-end: 13;
    grid-row-start: 1;
    grid-row-end: auto;
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    --tw-bg-opacity: 1;
    background-color: rgb(30 30 30 / var(--tw-bg-opacity))
}
	.sign_in_buttons {
    display: flex;
    flex-direction: column;
    gap: 1.5rem
}
</style>
