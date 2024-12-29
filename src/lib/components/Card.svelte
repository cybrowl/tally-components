<!-- Card.svelte -->
<script>
	export let title = 'Card Title';
	export let content = [
		'First item in the list.',
		'Second item goes here.',
		'Another insightful point.',
		'Final list item.'
	];
	export let buttonText = 'Action';
	export let onClick = () => {};
</script>

<div
	class="max-w-sm rounded overflow-hidden shadow-lg bg-dark-grey text-ghost-white"
>
	<!-- Card Header -->
	<div class="px-6 py-4 border-b border-smoky-grey">
		<div class="font-bold text-xl mb-2">{title}</div>
	</div>

	<!-- Card Content -->
	<div class="px-6 py-4">
		<ul class="list-disc list-inside space-y-2">
			{#each content as item}
				<li class="text-base text-grey">{item}</li>
			{/each}
		</ul>
	</div>

	<!-- Card Footer -->
	<div class="px-6 py-4 border-t border-smoky-grey">
		<button
			class="bg-primary-purple hover:bg-tulip-purple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
			on:click={onClick}
		>
			{buttonText}
		</button>
	</div>
</div>
