<script>
	export let interactive = false;
	export let padding = 'p-6';
	let className = '';
	export { className as class };
</script>

<div
	class="bg-slate-900 rounded-lg border border-violet-700 {padding} {className}"
	class:spotlight={interactive}
	class:gradient-border={interactive}
	class:hover:border-violet-400={interactive}
	class:duration-200={interactive}
>
	<slot />
</div>
