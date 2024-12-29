<script>
	import Card from '../components/Card.svelte';
	import InfoItem from '../components/InfoItem.svelte';
	import Nav from '../components/basic_elements/Nav.svelte';
	import Button from '../components/basic_elements/Button.svelte';
</script>

<div class="grid-layout">
	<div class="nav-layout">
		<Nav />
	</div>

	<div class="neuron-adding-layout">
		<h1 class="text-2xl text-gray-300 mb-4">Add Notification</h1>
		<div class="mb-4 flex flex-col space-y-4">
			<InfoItem label="Email" value="wenzel@codegov.org" />
			<InfoItem label="Phone" value="323-222-2222" />

			<br />
			<Button label="Create" />
		</div>
	</div>

	<div class="neuron-tracking-layout">
		<h1 class="text-2xl text-gray-300 mb-4">Notifications</h1>
		<div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<Card
				title="ICOVE"
				content={['network: NNS', 'frequency: daily', 'type: email']}
			/>
			<Card
				title="Treasury"
				content={['network: WTN', 'frequency: daily', 'type: email & phone']}
			/>
			<Card
				title="PCM"
				content={['network: NNS', 'frequency: daily', 'type: phone']}
			/>
			<Card
				title="Treasury"
				content={['network: KONG', 'frequency: daily', 'type: email']}
			/>
		</div>
	</div>
</div>

<!-- Mobile Not Supported -->
<div class="grid lg:hidden h-screen place-items-center text-white text-4xl">
	<h1>Sorry, Mobile Not Supported</h1>
</div>

<style lang="postcss">
	/* Outer grid: 12-column layout, hidden on mobile, visible on lg and up */
	.grid-layout {
		@apply hidden lg:grid grid-cols-12;
	}

	/* Nav bar spanning columns 2–12 */
	.nav-layout {
		@apply col-start-2 col-end-12 mb-8;
	}

	/* Adding layout spanning columns 2–5 */
	.neuron-adding-layout {
		@apply col-start-2 col-end-5 mx-8;
	}

	/* Tracking layout spanning columns 5–13 */
	.neuron-tracking-layout {
		@apply col-start-5 col-end-13;
	}
</style>
