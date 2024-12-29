<script>
	import {onDestroy} from 'svelte';

	// Initial columns with default widths
	let columns = [
		{name: 'Column 1', width: 100},
		{name: 'Column 2', width: 100},
		{name: 'Column 3', width: 200},
		{name: 'Column 4', width: 100}
		// Add more columns as needed
	];

	// State variables for resizing
	let isResizing = false;
	let currentColumn = null;
	let startX = 0;
	let startWidth = 0;

	// Initialize resize
	function initResize(e, column) {
		isResizing = true;
		currentColumn = column;
		startX = e.clientX;
		startWidth = column.width;

		// Prevent text selection during resize
		document.body.style.cursor = 'col-resize';
		document.body.style.userSelect = 'none';

		// Add event listeners
		window.addEventListener('mousemove', doDrag);
		window.addEventListener('mouseup', stopDrag);
	}

	// Handle dragging
	function doDrag(e) {
		if (!isResizing || !currentColumn) return;
		const newWidth = startWidth + e.clientX - startX;
		currentColumn.width = newWidth > 100 ? newWidth : 100; // Enforce minimum width

		// Reassign the columns array to trigger Svelte's reactivity
		columns = [...columns];
	}

	// Stop resizing
	function stopDrag() {
		if (!isResizing) return;
		isResizing = false;
		currentColumn = null;

		// Restore cursor and user selection
		document.body.style.cursor = '';
		document.body.style.userSelect = '';

		// Remove event listeners
		window.removeEventListener('mousemove', doDrag);
		window.removeEventListener('mouseup', stopDrag);
	}

	// Cleanup in case the component is destroyed while resizing
	onDestroy(() => {
		window.removeEventListener('mousemove', doDrag);
		window.removeEventListener('mouseup', stopDrag);
	});
</script>

<div class="grid">
	<div class="header">
		{#each columns as column}
			<div class="column" style="width: {column.width}px;">
				<span class="column-name">{column.name}</span>
				<div
					class="resize-handle"
					on:mousedown={e => initResize(e, column)}
				></div>
			</div>
		{/each}
	</div>
	<div class="body">
		<div class="row">
			{#each columns as column}
				<div class="cell" style="width: {column.width}px;">Data</div>
			{/each}
		</div>
		<!-- Add more rows as needed -->
	</div>
</div>

<style lang="postcss">
	/* Header and Row Flex Containers */
	.header,
	.row {
		@apply flex;
	}

	/* Column and Cell Styling */
	.column,
	.cell {
		@apply relative p-2 border-r border-b box-border overflow-hidden whitespace-nowrap;
	}

	/* Remove Right Border from Last Column and Cell */
	.column:last-child,
	.cell:last-child {
		@apply border-r-0;
	}

	/* Resize Handle Styling */
	.resize-handle {
		@apply absolute top-0 right-0 w-1 cursor-col-resize select-none h-full z-10;
	}

	/* Resize Handle Hover Effect */
	.resize-handle:hover {
		@apply bg-gray-200;
	}

	/* Column Name Styling */
	.column-name {
		@apply inline-block w-full h-full box-border;
	}

	.cell {
		@apply bg-white;
	}

	/* Optional: Add smooth transition for width changes */
	.column {
		transition: width 0.2s ease;
	}
</style>
