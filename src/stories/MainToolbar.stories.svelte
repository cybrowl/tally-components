<script context="module">
	import MainToolbar from '../lib/components/home/MainToolbar.svelte';

	export const meta = {
		title: 'Home / MainToolbar',
		component: MainToolbar
	};
</script>

<script>
	import {Template, Story} from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<MainToolbar {...args} />
</Template>

<Story name="default" args={{}} />
