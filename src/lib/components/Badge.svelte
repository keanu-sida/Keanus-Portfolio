<script>
	export let size = 'sm';
</script>

<span
	class="font-mono uppercase tracking-wide text-paper-muted border border-line"
	class:px-2={size === 'sm'}
	class:py-1={size === 'sm'}
	class:text-[11px]={size === 'sm'}
	class:px-1.5={size === 'xs'}
	class:py-0.5={size === 'xs'}
	class:text-[10px]={size === 'xs'}
>
	<slot />
</span>
