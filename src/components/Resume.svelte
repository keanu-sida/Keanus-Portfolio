<script>
	import { experience, education, certifications, profile } from '$lib/data';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import { reveal } from '$lib/effects';
	import { base } from '$app/paths';
	import { appPath } from '$lib/paths';

	let showAllExperience = false;
</script>

<section id="resume" class="py-20 lg:py-28 border-t border-line">
	<div use:reveal>
		<SectionHeading eyebrow="Background">
			<svelte:fragment slot="title">Experience and education</svelte:fragment>
		</SectionHeading>
	</div>

	<div class="flex flex-wrap gap-3 mb-12" use:reveal>
		<a
			href={appPath(profile.links.resume, base)}
			target="_blank"
			rel="noopener noreferrer"
			class="btn btn-ghost"
		>
			Download PDF
		</a>
		<a
			href={profile.links.linkedin}
			target="_blank"
			rel="noopener noreferrer"
			class="btn btn-ghost"
		>
			LinkedIn
		</a>
	</div>

	<div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
		<div class="lg:col-span-8">
			<p class="eyebrow mb-8">Work</p>
			<div class="flex flex-col">
				{#each showAllExperience ? experience : experience.slice(0, 5) as exp}
					<article class="relative border-l border-line pl-6 pb-10 last:pb-0">
						<span class="absolute left-0 top-1.5 w-1.5 h-1.5 -translate-x-[4px] bg-leaf"></span>
						<div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
							<h3 class="text-xl font-semibold tracking-tight">{exp.title}</h3>
							<span class="font-mono text-xs text-paper-muted">{exp.period}</span>
						</div>
						<p class="text-leaf text-sm mb-2">{exp.company}</p>
						<p class="text-paper-muted text-sm mb-3">{exp.description}</p>
						<ul class="space-y-1">
							{#each exp.achievements as achievement}
								<li class="text-sm text-paper-muted pl-3 border-l border-line">{achievement}</li>
							{/each}
						</ul>
					</article>
				{/each}
			</div>
			{#if experience.length > 5}
				<div class="pt-8">
					<button class="btn btn-ghost" on:click={() => (showAllExperience = !showAllExperience)}>
						{showAllExperience ? 'Show less' : 'See earlier roles'}
					</button>
				</div>
			{/if}
		</div>

		<div class="lg:col-span-4 flex flex-col gap-12">
			<div>
				<p class="eyebrow mb-6">Education</p>
				{#each education as edu}
					<div class="border-t border-line pt-4">
						<h3 class="text-lg font-semibold tracking-tight">{edu.degree}</h3>
						<p class="font-mono text-xs text-leaf mt-1">{edu.school} · {edu.year}</p>
						<p class="text-sm text-paper-muted mt-2">{edu.description}</p>
					</div>
				{/each}
			</div>
			<div>
				<p class="eyebrow mb-6">Certifications</p>
				<div class="flex flex-col gap-4">
					{#each certifications as cert}
						<div class="border-t border-line pt-4">
							<h3 class="text-base font-semibold tracking-tight">{cert.name}</h3>
							<p class="font-mono text-xs text-leaf mt-1">{cert.issuer} · {cert.year}</p>
							<p class="text-sm text-paper-muted mt-2">{cert.description}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
