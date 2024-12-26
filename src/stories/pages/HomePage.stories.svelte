<script context="module">
	import HomePage from '../../lib/pages/HomePage.svelte';

	export const meta = {
		title: 'Page / Home',
		component: HomePage
	};
</script>

<script>
	import {Template, Story} from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<HomePage {...args} />
</Template>

<Story
	name="default"
	args={{
		has_chats: true
	}}
/>
