<script>
	export let eyebrow = '';
	export let align = 'left';
</script>

<div
	class="flex flex-col gap-3 mb-12 lg:mb-16"
	class:text-center={align === 'center'}
	class:text-left={align === 'left'}
>
	{#if eyebrow}
		<p class="eyebrow">{eyebrow}</p>
	{/if}
	{#if $$slots.title}
		<h2 class="font-semibold text-3xl sm:text-4xl md:text-[2.75rem] leading-tight">
			<slot name="title" />
		</h2>
	{/if}
	<slot />
</div>
