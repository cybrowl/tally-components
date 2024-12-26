<script context="module">
	import Button from '../lib/components/sign_in/Button.svelte';

	export const meta = {
		title: 'Sign In / Button',
		component: Button
	};
</script>

<script>
	import {Template, Story} from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<Button {...args} />
</Template>

<Story name="Google" args={{label: 'Continue with Google'}} />
<Story
	name="Dfinity"
	args={{
		logo_name: 'dfinity_logo',
		label: 'Continue with DFINITY',
		logo_view_size: {width: 48, height: 24},
		logo_size: '2rem'
	}}
/>
