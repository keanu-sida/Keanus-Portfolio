<script>
    import { liveProjects } from '$lib/data';
    import SectionHeading from '$lib/components/SectionHeading.svelte';
    import Badge from '$lib/components/Badge.svelte';
    import { reveal } from '$lib/effects';
    import { base } from '$app/paths';
    import { appPath } from '$lib/paths';
</script>

<section id="live-projects" class="py-20 lg:py-32">
    <div use:reveal>
        <SectionHeading eyebrow="Live Applications">
            <svelte:fragment slot="title">
                Check Out My <span class="poppins text-violet-400">Live Projects</span>
            </svelte:fragment>
        </SectionHeading>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {#each liveProjects as project}
            <article class="bg-slate-900 rounded-lg border border-violet-700 overflow-hidden hover:border-violet-400 duration-200 spotlight gradient-border flex flex-col" use:reveal>
                <div class="aspect-video bg-slate-800 relative overflow-hidden">
                    <img
                        src={appPath(project.image, base)}
                        alt={project.imageAlt ?? project.name}
                        loading="lazy"
                        class="w-full h-full object-cover"
                    />
                </div>

                <div class="p-6 flex flex-col flex-1">
                    <h4 class="text-2xl font-semibold mb-2">{project.name}</h4>
                    <p class="text-slate-400 mb-4">{project.description}</p>

                    <div class="flex flex-wrap gap-2 mb-4">
                        {#each project.tech as tech}
                            <Badge>{tech}</Badge>
                        {/each}
                    </div>

                    <div class="mb-6">
                        <h5 class="text-sm font-semibold text-violet-400 mb-2">Key Features:</h5>
                        <ul class="text-sm text-slate-400 space-y-1">
                            {#each project.features as feature}
                                <li class="flex gap-2">
                                    <i class="fa-solid fa-check text-violet-400 text-xs mt-1.5 shrink-0" aria-hidden="true"></i>
                                    <span>{feature}</span>
                                </li>
                            {/each}
                        </ul>
                    </div>

                    <div class="flex flex-wrap gap-3 mt-auto">
                        <a
                            href={project.selfHosted ? appPath(project.liveUrl, base) : project.liveUrl}
                            target={project.selfHosted ? undefined : '_blank'}
                            rel={project.selfHosted ? undefined : 'noopener noreferrer'}
                            data-sveltekit-reload={project.selfHosted ? '' : undefined}
                            class="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white py-2 px-4 rounded-full text-sm font-medium duration-200"
                        >
                            <i class="fa-solid fa-external-link-alt" aria-hidden="true"></i>
                            <span>
                                {project.selfHosted ? 'Open app' : 'Visit site'}<span class="sr-only"> — {project.name}</span>
                            </span>
                        </a>
                        {#if project.repo}
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-2 border border-violet-600 text-violet-400 hover:bg-violet-600 hover:text-white rounded-full text-sm py-2 px-4 duration-200"
                            >
                                <i class="fa-brands fa-github" aria-hidden="true"></i>
                                <span>Code<span class="sr-only"> for {project.name}</span></span>
                            </a>
                        {/if}
                    </div>
                </div>
            </article>
        {/each}
    </div>
</section>
