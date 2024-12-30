<script>
	import Card from '../components/Card.svelte';
	import Input from '../components/basic_elements/Input.svelte';
	import Nav from '../components/basic_elements/Nav.svelte';
	import Button from '../components/basic_elements/Button.svelte';
</script>

<div class="grid-layout">
	<div class="nav-layout">
		<Nav />
	</div>

	<div class="neuron-adding-layout">
		<h1 class="text-2xl text-gray-300 mb-4">Add Neuron</h1>
		<div class="mb-4 flex flex-col space-y-4">
			<Input label="Neuron ID" />
			<Input label="Name" />
			<br />
			<Button label="Add" />
		</div>
	</div>

	<div class="neuron-tracking-layout">
		<h1 class="text-2xl text-gray-300 mb-4">Neurons</h1>
		<div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<Card
				title="cyberowl"
				content={['neuron id: 16405079610149095765', 'status: private']}
			/>
			<Card
				title="zane"
				content={['neuron id: 16326129975418039085', 'status: public']}
			/>

			<Card
				title="zack"
				content={['neuron id: 12979846186887799326', 'status: public']}
			/>

			<Card
				title="hamish"
				content={['neuron id: 6542438359604605534', 'status: public']}
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

	/* Tracking layout spanning columns 5–12 */
	.neuron-tracking-layout {
		@apply col-start-5 col-end-12;
	}
</style>
