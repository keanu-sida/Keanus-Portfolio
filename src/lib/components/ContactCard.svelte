<script>
    import { base } from '$app/paths';
    import { appPath } from '$lib/paths';
    export let channel;
</script>

<a
	href={appPath(channel.href, base)}
	target={channel.id === 'resume' || channel.href.startsWith('http') ? '_blank' : undefined}
	rel={channel.href.startsWith('http') || channel.id === 'resume' ? 'noopener noreferrer' : undefined}
	class="bg-slate-900 p-6 rounded-lg border border-violet-700 hover:border-violet-400 duration-200 text-center spotlight gradient-border"
>
	<i class="{channel.icon} text-3xl text-violet-400 mb-4"></i>
	<h4 class="text-lg font-semibold mb-2">{channel.label}</h4>
	<p class="text-sm text-slate-400">{channel.description}</p>
</a>
