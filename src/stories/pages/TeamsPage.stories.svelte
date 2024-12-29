<script context="module">
	import TeamsPage from '../../lib/pages/TeamsPage.svelte';

	export const meta = {
		title: 'Page / Teams',
		component: TeamsPage
	};
</script>

<script>
	import {Template, Story} from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<TeamsPage {...args} />
</Template>

<Story
	name="default"
	args={{
		teams: ['CodeGov', 'Zenith']
	}}
/>
