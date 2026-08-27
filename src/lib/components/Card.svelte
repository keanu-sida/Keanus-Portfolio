<script>
	export let interactive = false;
	export let padding = 'p-6';
	let className = '';
	export { className as class };
</script>

<div
	class="bg-ink-raised border border-line {padding} {className}"
	class:hover:border-leaf={interactive}
	class:duration-200={interactive}
>
	<slot />
</div>
