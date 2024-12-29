<script context="module">
	import NotificationsPage from '../../lib/pages/NotificationsPage.svelte';

	export const meta = {
		title: 'Page / Notifications',
		component: NotificationsPage
	};
</script>

<script>
	import {Template, Story} from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<NotificationsPage {...args} />
</Template>

<Story
	name="default"
	args={{
		teams: ['CodeGov', 'Zenith']
	}}
/>
