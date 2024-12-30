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

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<Card
				title="cyberowl"
				content={['principal: evdr7-7ku9e-4l1ha-txj76-cai']}
			/>
			<Card
				title="wenzel"
				content={['principal: 4w71c-h03f5-hy5ia-1x559-cai']}
			/>
		</div>
	</div>
</div>

<!-- Mobile Not Supported -->
<div class="grid lg:hidden h-screen place-items-center text-white text-4xl">
	<h1>Sorry, Mobile Not Supported</h1>
</div>

<style lang="postcss">
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
