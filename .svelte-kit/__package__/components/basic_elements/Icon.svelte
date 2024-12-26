<script>
	import * as icons from './icons';
	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	export let name;
	export let clickable = true;
	export let focusable = false;
	export let viewSize = {
		width: 24,
		height: 24
	};

	export let size = '2rem'; // size is now used for both width and height
	export let scale = 1; // scale factor, adjust this to scale the icon
	export let viewbox = {
		width: viewSize.width / scale,
		height: viewSize.height / scale
	};

	function onClick(event) {
		event.stopPropagation();

		dispatch('click', event);
	}
</script>

{#if clickable}
	<button on:click={onClick}>
		<svg
			class={$$props.class}
			{focusable}
			width={size}
			height={size}
			viewBox={`0 0 ${viewbox.width} ${viewbox.height}`}
			on:keypress={e => {
				//TODO: need to design how this will work A11y
			}}
			role="button"
			tabindex="0"
		>
			{@html icons[name]}
		</svg>
	</button>
{:else}
	<span>
		<svg
			class={$$props.class}
			{focusable}
			width={size}
			height={size}
			viewBox={`0 0 ${viewbox.width} ${viewbox.height}`}
		>
			{@html icons[name]}
		</svg>
	</span>
{/if}

<style>
	.cursor_pointer {
		cursor: pointer;
}
	.cursor_default {
		cursor: default;
}
	.responsive_icon {
		height: 4rem;
		width: 4rem;
}
	@media (min-width: 1024px) {
		.responsive_icon {
				height: 2.75rem;
				width: 2.75rem;
		}
}
	@media (min-width: 2222px) {
		.responsive_icon {
				height: 2.75rem;
				width: 2.75rem;
		}
}
	.fill_none {
		fill: none;
}
	.fill_white {
		fill: #fff;
}
	.fill_gold {
		fill: #DAA520;
}
	svg:focus {
		outline: none;
		box-shadow: none;
	}
</style>
