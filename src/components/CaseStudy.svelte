<script>
	import Badge from '$lib/components/Badge.svelte';
	import { base } from '$app/paths';
	import { appPath } from '$lib/paths';

	export let study;
	export let flip = false;

	function hrefFor(url) {
		return study.selfHosted ? appPath(url, base) : url;
	}
</script>

<article
	class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-line pt-12 lg:pt-16"
>
	<div class="lg:col-span-6 {flip ? 'lg:order-2' : ''}">
		<a
			href={hrefFor(study.liveUrl)}
			target={study.selfHosted ? undefined : '_blank'}
			rel={study.selfHosted ? 'external' : 'noopener noreferrer'}
			data-sveltekit-reload={study.selfHosted ? '' : undefined}
			class="block overflow-hidden border border-line bg-ink-raised duration-200 hover:border-leaf"
		>
			<img
				src={appPath(study.image, base)}
				alt={study.imageAlt ?? study.name}
				loading="lazy"
				class="w-full aspect-video object-cover"
			/>
		</a>
	</div>

	<div class="lg:col-span-6 {flip ? 'lg:order-1' : ''} flex flex-col gap-5">
		<p class="eyebrow">
			{study.kicker}
			<span class="text-paper-muted/50">/</span>
			{study.year}
		</p>
		<h3 class="text-3xl sm:text-4xl font-semibold">{study.name}</h3>

		<dl class="flex flex-col gap-4 text-[15px] sm:text-base leading-relaxed">
			<div>
				<dt class="eyebrow mb-1 text-leaf">Problem</dt>
				<dd class="text-paper-muted">{study.problem}</dd>
			</div>
			<div>
				<dt class="eyebrow mb-1 text-leaf">Approach</dt>
				<dd class="text-paper-muted">{study.approach}</dd>
			</div>
			<div>
				<dt class="eyebrow mb-1 text-leaf">Result</dt>
				<dd class="text-paper-muted">{study.result}</dd>
			</div>
		</dl>

		<div class="flex flex-wrap gap-2">
			{#each study.tech as tech}
				<Badge size="xs">{tech}</Badge>
			{/each}
		</div>

		<div class="flex flex-wrap gap-3 pt-1">
			<a
				href={hrefFor(study.liveUrl)}
				target={study.selfHosted ? undefined : '_blank'}
				rel={study.selfHosted ? 'external' : 'noopener noreferrer'}
				data-sveltekit-reload={study.selfHosted ? '' : undefined}
				class="btn btn-primary"
			>
				{study.selfHosted ? 'Open app' : 'Visit site'}
				<span class="sr-only"> — {study.name}</span>
			</a>
			{#if study.repo}
				<a
					href={study.repo}
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-ghost"
				>
					Code<span class="sr-only"> for {study.name}</span>
				</a>
			{/if}
		</div>
	</div>
</article>
