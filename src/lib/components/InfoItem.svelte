<!-- InfoItem.svelte -->
<script>
	export let label = '';
	export let value = '';
</script>

<div class="mb-4">
	<p class="text-white font-semibold">{label}</p>
	<p class="text-white">{value}</p>
</div>
