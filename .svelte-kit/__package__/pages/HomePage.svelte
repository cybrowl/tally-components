<script>
	import {createEventDispatcher, onMount} from 'svelte';
	import Icon from '../components/basic_elements/Icon.svelte';
	import MainToolBar from '../components/home/MainToolbar.svelte';
	import {Editor, rootCtx, defaultValueCtx, EditorStatus} from '@milkdown/core'; // Add rootCtx here
	import {commonmark} from '@milkdown/kit/preset/commonmark';
	import {nord} from '@milkdown/theme-nord';

	const dispatch = createEventDispatcher();
	export let has_chats = false;

	let editor;
	let editorContainer;

	onMount(async () => {
		editorContainer = document.querySelector('#editor_root');
		if (editorContainer) {
			try {
				editor = Editor.make()
					.config(ctx => {
						ctx.set(rootCtx, editorContainer); // Set the root explicitly
						ctx.set(defaultValueCtx, 'Ask Me Anything!');
					})
					.use(commonmark)
					.onStatusChange(status => {
						if (status === EditorStatus.Created) {
							console.log('Milkdown editor fully created');
						} else if (status === EditorStatus.OnCreate) {
							console.log('Milkdown editor initializing...');
						} else if (status === EditorStatus.OnDestroy) {
							console.log('Milkdown editor destroying...');
						} else if (status === EditorStatus.Destroyed) {
							console.log('Milkdown editor destroyed');
						}
					});

				await editor.create();
				console.log(
					'Editor container content after creation:',
					editorContainer.innerHTML
				);
			} catch (error) {
				console.error('Error initializing Milkdown editor:', error);
			}
		} else {
			console.error('Editor container not found.');
		}
	});
</script>

<div class="grid_layout">
	<div class="read_main_layout">
		{#if has_chats === true}
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
		{/if}
	</div>
	<div class="write_main_layout">
		<div class="toolbar">
			<MainToolBar />
		</div>
		<div class="editor_root" id="editor_root" />
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
    flex-direction: column;
    --tw-bg-opacity: 1;
    background-color: rgb(30 30 30 / var(--tw-bg-opacity))
}
	.toolbar {
    position: fixed;
    top: 2rem;
    right: 0px;
    z-index: 10;
    height: 4rem;
    width: 25%;
    --tw-bg-opacity: 1;
    background-color: rgb(30 30 30 / var(--tw-bg-opacity))
}
	.editor_root {
    margin-top: 10rem;
    height: 100%;
    width: 100%;
    overflow: auto;
    --tw-bg-opacity: 1;
    background-color: rgb(30 30 30 / var(--tw-bg-opacity));
    padding: 1rem;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity))
}
	.sign_in_buttons {
    display: flex;
    flex-direction: column;
    gap: 1.5rem
}
</style>
