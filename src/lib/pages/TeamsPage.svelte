<script>
	import Nav from '../components/basic_elements/Nav.svelte';
	import Button from '../components/basic_elements/Button.svelte';
	import Tab from '../components/basic_elements/Tab.svelte';
	import Card from '../components/Card.svelte';

	export let teams = [];

	let selectedTeamIndex = 0;

	function handleTabChange(e) {
		console.log('e.detail: ', e.detail);
		selectedTeamIndex = e.detail;
	}
</script>

<div class="grid-layout">
	<div class="nav-layout">
		<Nav />
	</div>

	<div class="main-toolbar-layout">
		<Button label="Create Team" />
		<Button label="Add Member" variant="secondary" />
	</div>

	<div class="team-selection-layout">
		<h1 class="text-2xl text-gray-300">Teams</h1>
		{#each teams as team, i}
			<Tab index={i} activeTab={selectedTeamIndex} on:select={handleTabChange}>
				{`# ${team}`}
			</Tab>
		{/each}
	</div>
	<div class="members-layout">
		<h1 class="text-2xl text-gray-300 mb-4">Members</h1>
		<Card title="cyberowl" content={['principal: 1234567']} />
	</div>
</div>

<!-- Mobile Not Supported -->
<div class="grid lg:hidden h-screen place-items-center text-white text-4xl">
	<h1>Sorry, Mobile Not Supported</h1>
</div>

<style lang="postcss">
	:global(.carta-font-code) {
		font-family: '...', monospace;
		font-size: 1.1rem;
	}

	.grid-layout {
		@apply hidden lg:grid grid-cols-12;
	}

	.nav-layout {
		@apply col-start-2 col-end-12;
	}

	.team-selection-layout {
		@apply col-start-2 col-end-4 flex flex-col gap-4;
	}

	.members-layout {
		@apply col-start-4 col-end-13;
	}

	.main-toolbar-layout {
		@apply col-start-2 col-end-12 mt-4 gap-4;
		@apply flex;
		@apply justify-end;
	}
</style>
