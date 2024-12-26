<script>
	import Icon from '../basic_elements/Icon.svelte';

	export let selected_icon = 'gpt';

	function select_icon(icon_name) {
		selected_icon = icon_name;
	}
</script>

<div class="main">
	<Icon
		name="gpt"
		class={selected_icon === 'gpt' ? 'fill_gold' : 'fill_white'}
		viewSize={{width: 44, height: 44}}
		size="3rem"
		on:click={() => select_icon('gpt')}
	/>
	<Icon
		name="line"
		class="fill_white"
		clickable={false}
		size="2rem"
		viewSize={{width: 1, height: 24}}
	/>
	<Icon
		name="wallet"
		class={selected_icon === 'wallet' ? 'fill_gold' : 'fill_white'}
		viewSize={{width: 44, height: 44}}
		size="3rem"
		on:click={() => select_icon('wallet')}
	/>
	<Icon
		name="history"
		class={selected_icon === 'history' ? 'fill_gold' : 'fill_white'}
		viewSize={{width: 44, height: 44}}
		size="3rem"
		on:click={() => select_icon('history')}
	/>
	<Icon
		name="settings"
		class={selected_icon === 'settings' ? 'fill_gold' : 'fill_white'}
		viewSize={{width: 44, height: 44}}
		size="3rem"
		on:click={() => select_icon('settings')}
	/>
	<Icon
		name="new_session_white"
		class="fill_none ml-6"
		viewSize={{width: 32, height: 32}}
		size="2.5rem"
	/>
</div>

<style lang="postcss">
	.main {
		@apply flex flex-row gap-2 items-center;
	}
</style>
