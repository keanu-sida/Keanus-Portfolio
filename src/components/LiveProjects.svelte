<script>
    import { liveProjects } from '$lib/data';
    import SectionHeading from '$lib/components/SectionHeading.svelte';
    import Badge from '$lib/components/Badge.svelte';
    import { reveal } from '$lib/effects';
    import { base } from '$app/paths';
    import { appPath } from '$lib/paths';

    function projectHref(project) {
        const target = project.liveUrl ?? project.url;
        return project.isInternal ? appPath(target, base) : target;
    }
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
            <div class="bg-slate-900 rounded-lg border border-violet-700 overflow-hidden hover:border-violet-400 duration-200 spotlight gradient-border" use:reveal>
                <div class="aspect-video bg-slate-800 relative overflow-hidden">
                    {#if project.image}
                        <img src={appPath(project.image, base)} alt={project.name} class="w-full h-full object-cover" />
                    {:else}
                        <div class="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-violet-950 to-slate-900">
                            <i class="fa-solid fa-briefcase text-5xl text-violet-400"></i>
                            <span class="text-sm text-slate-400">Built into this portfolio</span>
                        </div>
                    {/if}
                </div>
                
                <div class="p-6">
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
                                <li class="flex items-center gap-2">
                                    <i class="fa-solid fa-check text-violet-400 text-xs"></i>
                                    {feature}
                                </li>
                            {/each}
                        </ul>
                    </div>
                    
                    <div class="flex gap-3">
                        <a 
                            href={projectHref(project)} 
                            target={project.isInternal ? undefined : '_blank'}
                            rel={project.isInternal ? undefined : 'noopener noreferrer'}
                            class="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white py-2 px-4 rounded-full text-sm font-medium duration-200"
                        >
                            <i class="fa-solid fa-external-link-alt"></i>
                            {project.isInternal ? 'Open App' : 'Visit'}
                        </a>
                        {#if project.showDetails !== false && project.url && !project.isInternal}
                            <a 
                                href={project.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-2 border border-violet-600 text-violet-400 hover:bg-violet-600 hover:text-white rounded-full text-sm py-2 px-4 duration-200"
                            >
                                <i class="fa-solid fa-info-circle"></i>
                                Details
                            </a>
                        {/if}
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>
