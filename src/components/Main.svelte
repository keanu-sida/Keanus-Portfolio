<script>
	import PathMap from './PathMap.svelte';
	import CaseStudy from './CaseStudy.svelte';
	import Resume from './Resume.svelte';
	import Colophon from './Colophon.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import { reveal } from '$lib/effects';
	import { base } from '$app/paths';
	import { appPath } from '$lib/paths';
	import {
		profile,
		flagshipProject,
		caseStudies,
		alsoShipped,
		skillEvidence,
		about,
		contactChannels
	} from '$lib/data';

	function rowHref(item) {
		if (!item.liveUrl) return null;
		return item.selfHosted ? appPath(item.liveUrl, base) : item.liveUrl;
	}
</script>

<main id="main-content" class="flex flex-col flex-1 px-4 sm:px-6">
	<section class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 py-10 sm:py-16 lg:py-20">
		<div class="lg:col-span-5 flex flex-col justify-center gap-6" use:reveal>
			<p class="eyebrow text-leaf">Now shipping {flagshipProject.name}</p>
			<h1 class="font-semibold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.1]">
				{profile.name.first} {profile.name.last}
				<span class="block text-paper-muted font-sans text-lg sm:text-xl font-normal tracking-normal mt-3">
					{profile.title}
				</span>
			</h1>
			<p class="text-base sm:text-lg text-paper-muted max-w-md">
				{profile.tagline}
			</p>
			<div class="flex flex-wrap gap-3">
				<a
					class="btn btn-primary"
					href={flagshipProject.liveUrl}
					target="_blank"
					rel="noopener noreferrer"
				>
					Explore {flagshipProject.name}
				</a>
				<a href="#work" class="btn btn-ghost">View selected work</a>
			</div>
		</div>
		<div class="lg:col-span-7" use:reveal={{ delay: 80 }}>
			<PathMap href={flagshipProject.liveUrl} />
		</div>
	</section>

	<section id="work" class="py-20 lg:py-28">
		<div use:reveal>
			<SectionHeading eyebrow="Selected work">
				<svelte:fragment slot="title">Products I designed and shipped</svelte:fragment>
			</SectionHeading>
		</div>

		<div class="flex flex-col gap-6 lg:gap-8">
			{#each caseStudies as study, index}
				<div use:reveal>
					<CaseStudy {study} flip={index % 2 === 1} />
				</div>
			{/each}
		</div>

		<div class="mt-20 lg:mt-28" use:reveal>
			<p class="eyebrow mb-6">Also shipped</p>
			<ul class="border-t border-line">
				{#each alsoShipped as item}
					<li class="grid grid-cols-1 md:grid-cols-[8rem_1fr_auto] gap-2 md:gap-6 items-baseline border-b border-line py-4">
						<h3 class="font-mono text-sm text-paper">{item.name}</h3>
						<p class="text-sm text-paper-muted">
							{item.description}
							<span class="hidden sm:inline text-line"> · </span>
							<span class="block sm:inline font-mono text-[10px] uppercase tracking-wide text-paper-muted/80">
								{item.tech.join(' / ')}
							</span>
						</p>
						<div class="flex gap-3 font-mono text-xs uppercase tracking-wide">
							{#if rowHref(item)}
								<a
									href={rowHref(item)}
									target="_blank"
									rel="noopener noreferrer"
									class="text-leaf hover:underline"
								>
									Demo<span class="sr-only"> — {item.name}</span>
								</a>
							{/if}
							{#if item.repo}
								<a
									href={item.repo}
									target="_blank"
									rel="noopener noreferrer"
									class="text-paper-muted hover:text-leaf"
								>
									Code<span class="sr-only"> for {item.name}</span>
								</a>
							{/if}
							{#if item.private && !item.liveUrl && !item.repo}
								<span class="text-paper-muted">Private</span>
							{/if}
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<section id="skills" class="py-20 lg:py-28 border-t border-line">
		<div use:reveal>
			<SectionHeading eyebrow="Used in production">
				<svelte:fragment slot="title">Skills attached to work</svelte:fragment>
			</SectionHeading>
			<dl class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 max-w-4xl">
				{#each skillEvidence as skill}
					<div class="border-t border-line pt-3">
						<dt class="font-mono text-sm text-leaf">{skill.name}</dt>
						<dd class="text-sm text-paper-muted mt-1">{skill.evidence}</dd>
					</div>
				{/each}
			</dl>
		</div>
	</section>

	<Resume />

	<section id="about" class="py-20 lg:py-28 border-t border-line">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16" use:reveal>
			<div class="lg:col-span-4">
				<p class="eyebrow mb-3">About</p>
				<h2 class="text-3xl sm:text-4xl font-semibold">Two paths, one practice</h2>
			</div>
			<div class="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 text-base sm:text-lg leading-relaxed text-paper-muted">
				<p>{about.lede}</p>
				<p>{about.more}</p>
			</div>
		</div>
	</section>

	<section id="contact" class="py-20 lg:py-28 border-t border-line" use:reveal>
		<p class="eyebrow mb-4">{profile.availability}</p>
		<a
			href={profile.links.emailWithSubject}
			class="font-display text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight hover:text-leaf duration-200 break-all"
		>
			{profile.email}
		</a>
		<div class="flex flex-wrap gap-6 mt-8 font-mono text-xs uppercase tracking-wider">
			{#each contactChannels as channel}
				<a
					href={appPath(channel.href, base)}
					target="_blank"
					rel="noopener noreferrer"
					class="text-paper-muted hover:text-leaf duration-200"
				>
					{channel.label}
				</a>
			{/each}
		</div>
	</section>

	<Colophon />
</main>
