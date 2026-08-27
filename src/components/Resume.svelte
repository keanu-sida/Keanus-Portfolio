<script>
    import { experience, education, certifications, profile } from '$lib/data';
    import SectionHeading from '$lib/components/SectionHeading.svelte';
    import Card from '$lib/components/Card.svelte';
    import { reveal } from '$lib/effects';
    import { base } from '$app/paths';
    import { appPath } from '$lib/paths';

    let showAllExperience = false;
</script>

<section id="resume" class="py-20 lg:py-32">
    <div use:reveal>
        <SectionHeading eyebrow="Professional Background">
            <svelte:fragment slot="title">
                My <span class="poppins text-violet-400">Experience</span> & Education
            </svelte:fragment>
        </SectionHeading>
    </div>

    <div class="max-w-4xl mx-auto flex flex-wrap justify-center gap-3 mb-12" use:reveal>
        <a
            href={appPath(profile.links.resume, base)}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-700 text-violet-400 hover:border-violet-400 text-sm duration-200"
        >
            <i class="fa-solid fa-file-pdf"></i> Download PDF Resume
        </a>
        <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-700 text-violet-400 hover:border-violet-400 text-sm duration-200"
        >
            <i class="fa-brands fa-linkedin"></i> View LinkedIn
        </a>
        <a
            href={appPath('/tracker/', base)}
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-700 text-violet-400 hover:border-violet-400 text-sm duration-200"
        >
            <i class="fa-solid fa-briefcase"></i> Job Pipeline Tracker
        </a>
    </div>

    <div class="max-w-4xl mx-auto">
        <div class="mb-16">
            <h4 class="text-2xl font-semibold text-violet-400 mb-8 flex items-center gap-3">
                <i class="fa-solid fa-briefcase"></i>
                Work Experience
            </h4>
            <div class="space-y-8">
                {#each (showAllExperience ? experience : experience.slice(0, 5)) as exp}
                    <Card padding="p-6" interactive={true}>
                        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h5 class="text-xl font-semibold">{exp.title}</h5>
                            <span class="text-violet-400 text-sm">{exp.period}</span>
                        </div>
                        <p class="text-violet-400 mb-3">{exp.company}</p>
                        <p class="text-slate-400 mb-4">{exp.description}</p>
                        <ul class="space-y-1">
                            {#each exp.achievements as achievement}
                                <li class="flex items-center gap-2 text-sm text-slate-400">
                                    <i class="fa-solid fa-check text-violet-400 text-xs"></i>
                                    {achievement}
                                </li>
                            {/each}
                        </ul>
                    </Card>
                {/each}
                {#if experience.length > 5}
                    <div class="pt-2 flex justify-center">
                        <button
                            class="px-4 py-2 rounded-full border border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-slate-950 duration-200"
                            on:click={() => showAllExperience = !showAllExperience}
                        >
                            {showAllExperience ? 'Show less' : 'See all'}
                        </button>
                    </div>
                {/if}
            </div>
        </div>

        <div class="mb-16">
            <h4 class="text-2xl font-semibold text-violet-400 mb-8 flex items-center gap-3">
                <i class="fa-solid fa-graduation-cap"></i>
                Education
            </h4>
            <div class="space-y-6">
                {#each education as edu}
                    <Card padding="p-6" interactive={true}>
                        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                            <h5 class="text-xl font-semibold">{edu.degree}</h5>
                            <span class="text-violet-400 text-sm">{edu.year}</span>
                        </div>
                        <p class="text-violet-400 mb-3">{edu.school}</p>
                        <p class="text-slate-400">{edu.description}</p>
                    </Card>
                {/each}
            </div>
        </div>

        <div>
            <h4 class="text-2xl font-semibold text-violet-400 mb-8 flex items-center gap-3">
                <i class="fa-solid fa-certificate"></i>
                Certifications
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                {#each certifications as cert}
                    <Card padding="p-6" interactive={true}>
                        <h5 class="text-lg font-semibold mb-2">{cert.name}</h5>
                        <p class="text-violet-400 text-sm mb-3">{cert.issuer} • {cert.year}</p>
                        <p class="text-slate-400 text-sm">{cert.description}</p>
                    </Card>
                {/each}
            </div>
        </div>
    </div>
</section>
