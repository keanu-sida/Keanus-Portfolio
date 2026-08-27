<script>
	export let y;

	import { base } from '$app/paths';
	import { navTabs, profile } from '$lib/data';
	import { appPath, homeHash } from '$lib/paths';

	let menuOpen = false;

	function navHref(tab) {
		if (tab.external) return tab.link;
		return tab.isRoute ? appPath(tab.link, base) : homeHash(tab.link, base);
	}
</script>

<header
	class="sticky z-10 top-0 duration-200 px-4 sm:px-6 {y > 0
		? 'py-3 bg-ink/85 backdrop-blur-md border-b border-line'
		: 'py-5 border-b border-transparent'}"
>
	<div class="flex items-center justify-between gap-3 max-w-page mx-auto">
		<a href={appPath('/', base)} class="font-display text-lg sm:text-xl tracking-tight hover:text-leaf duration-200">
			{profile.name.first}
			<span class="text-paper-muted font-sans text-sm ml-1">{profile.name.last}</span>
		</a>

		<nav class="hidden md:flex ml-auto items-center gap-6">
			{#each navTabs as tab}
				<a
					href={navHref(tab)}
					target={tab.external ? '_blank' : undefined}
					rel={tab.external ? 'noopener noreferrer' : undefined}
					data-sveltekit-reload={tab.selfHosted ? '' : undefined}
					class="font-mono text-xs uppercase tracking-wider duration-200 hover:text-leaf {tab.external
						? 'text-leaf'
						: 'text-paper-muted'}"
				>
					{tab.name}
				</a>
			{/each}
		</nav>

		<a href={profile.links.emailWithSubject} target="_blank" rel="noopener noreferrer" class="btn btn-primary ml-4 hidden md:inline-flex">
			Get in touch
		</a>

		<button
			type="button"
			class="md:hidden p-2 border border-leaf text-leaf"
			on:click={() => (menuOpen = !menuOpen)}
			aria-label="Toggle navigation"
			aria-expanded={menuOpen}
			aria-controls="mobile-nav"
		>
			{#if menuOpen}
				<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
					<path d="M4 4l10 10M14 4L4 14" stroke="currentColor" stroke-width="1.5" />
				</svg>
			{:else}
				<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
					<path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" stroke-width="1.5" />
				</svg>
			{/if}
		</button>
	</div>
</header>

{#if menuOpen}
	<div class="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-sm md:hidden">
		<button
			type="button"
			class="absolute top-4 right-4 p-3 border border-leaf text-leaf"
			aria-label="Close menu"
			on:click={() => (menuOpen = false)}
		>
			<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
				<path d="M4 4l10 10M14 4L4 14" stroke="currentColor" stroke-width="1.5" />
			</svg>
		</button>
		<nav id="mobile-nav" class="h-full w-full flex flex-col items-center justify-center gap-6">
			{#each navTabs as tab}
				<a
					href={navHref(tab)}
					target={tab.external ? '_blank' : undefined}
					rel={tab.external ? 'noopener noreferrer' : undefined}
					data-sveltekit-reload={tab.selfHosted ? '' : undefined}
					class="font-display text-3xl hover:text-leaf duration-150"
					on:click={() => (menuOpen = false)}
				>
					{tab.name}
				</a>
			{/each}
			<a
				href={profile.links.emailWithSubject}
				class="btn btn-primary mt-4"
				on:click={() => (menuOpen = false)}
			>
				Get in touch
			</a>
		</nav>
	</div>
{/if}
