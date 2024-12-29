<script context="module">
	import Icon from '../../lib/components/basic_elements/Icon.svelte';

	export const meta = {
		title: 'Basic Elems / Icons',
		component: Icon
	};
</script>

<script>
	import {Template, Story} from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<Icon {...args} />
</Template>

<Story
	name="dfinity_logo"
	args={{
		name: 'dfinity_logo',
		class: 'cursor_pointer',
		size: '4rem',
		scale: 1,
		viewSize: {
			width: 48,
			height: 24
		}
	}}
/>

<Story
	name="trash"
	args={{
		name: 'trash',
		class: 'cursor_pointer',
		size: '4rem',
		scale: 1,
		viewSize: {
			width: 40,
			height: 40
		}
	}}
/>
