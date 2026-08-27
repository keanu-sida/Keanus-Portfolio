<script>
	export let eyebrow = '';
	export let align = 'center';
</script>

<div
	class="flex flex-col gap-2 mb-16"
	class:text-center={align === 'center'}
	class:text-left={align === 'left'}
>
	{#if eyebrow}
		<h6 class="text-lg sm:text-xl md:text-2xl">{eyebrow}</h6>
	{/if}
	{#if $$slots.title}
		<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
			<slot name="title" />
		</h3>
	{/if}
	<slot />
</div>
