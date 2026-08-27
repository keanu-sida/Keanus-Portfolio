<script>
	import '../app.css';
	import { base } from '$app/paths';
	import { appPath } from '$lib/paths';
	import Header from '../components/Header.svelte';
	import { profile, siteMeta } from '$lib/data';

	let y;

	function goTop() {
		document.body.scrollIntoView();
	}

	$: ogImageUrl = `${siteMeta.url.replace(/\/$/, '')}${appPath(siteMeta.ogImage, base)}`;

	const personSchema = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: profile.name.full,
		jobTitle: profile.title,
		email: profile.email,
		url: siteMeta.url,
		sameAs: [profile.links.github, profile.links.linkedin, profile.links.pathtree]
	};
</script>

<svelte:head>
	<title>{siteMeta.title}</title>
	<meta name="description" content={siteMeta.description} />
	<meta name="theme-color" content={siteMeta.themeColor} />
	<link rel="canonical" href={siteMeta.url} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={siteMeta.title} />
	<meta property="og:description" content={siteMeta.description} />
	<meta property="og:url" content={siteMeta.url} />
	<meta property="og:image" content={ogImageUrl} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={siteMeta.title} />
	<meta name="twitter:description" content={siteMeta.description} />
	<meta name="twitter:image" content={ogImageUrl} />

	{@html `<script type="application/ld+json">${JSON.stringify(personSchema)}</script>`}
</svelte:head>

<a href="{appPath('/', base)}#main-content" class="skip-link">Skip to content</a>
<div class="relative flex flex-col max-w-page mx-auto w-full text-sm sm:text-base min-h-screen">
	<div
		class="fixed bottom-0 right-0 box-border duration-200 flex p-6 sm:p-10 z-10 {y > 0
			? 'opacity-100 pointer-events-auto'
			: 'pointer-events-none opacity-0'}"
	>
		<button
			on:click={goTop}
			class="border border-line bg-ink text-leaf px-3 py-3 hover:border-leaf"
			aria-label="Scroll to top"
		>
			<span class="font-mono text-xs" aria-hidden="true">↑</span>
		</button>
	</div>
	<Header {y} />
	<slot />
</div>

<svelte:window bind:scrollY={y} />
