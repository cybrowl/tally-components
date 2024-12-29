<script context="module">
	import NeuronTrackingPage from '../../lib/pages/NeuronTrackingPage.svelte';

	export const meta = {
		title: 'Page / NeuronTracking',
		component: NeuronTrackingPage
	};
</script>

<script>
	import {Template, Story} from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<NeuronTrackingPage {...args} />
</Template>

<Story name="default" args={{}} />
