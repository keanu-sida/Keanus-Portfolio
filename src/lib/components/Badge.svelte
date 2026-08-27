<script>
	export let size = 'sm';
</script>

<span
	class="bg-violet-700 text-white rounded-full"
	class:px-3={size === 'sm'}
	class:py-1={size === 'sm'}
	class:text-sm={size === 'sm'}
	class:px-2={size === 'xs'}
	class:py-0.5={size === 'xs'}
	class:text-xs={size === 'xs'}
>
	<slot />
</span>
