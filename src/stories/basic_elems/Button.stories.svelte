<script context="module">
	import Button from '../../lib/components/basic_elements/Button.svelte';

	export const meta = {
		title: 'Basic Elems / Button',
		component: Button
	};
</script>

<script>
	import {Template, Story} from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<Button {...args} />
</Template>

<Story name="primary" args={{label: 'Create Team', variant: 'primary'}} />
<Story name="secondary" args={{label: 'Create Team', variant: 'secondary'}} />
