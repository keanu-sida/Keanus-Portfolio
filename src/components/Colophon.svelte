<script>
	import { colophon } from '$lib/data';
</script>

<footer class="mt-auto border-t border-line py-12 sm:py-16">
	<p class="eyebrow mb-4">Colophon</p>
	<p class="font-display text-2xl sm:text-3xl max-w-xl mb-6">{colophon.lede}</p>
	<ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs sm:text-sm text-paper-muted">
		{#each colophon.items as item}
			<li class="border-t border-line pt-2">{item}</li>
		{/each}
	</ul>
</footer>
