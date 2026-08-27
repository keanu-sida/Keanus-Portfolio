<script>
    import Step from "./Step.svelte";
    import LiveProjects from "./LiveProjects.svelte";
    import Resume from "./Resume.svelte";
    import SectionHeading from "$lib/components/SectionHeading.svelte";
    import Badge from "$lib/components/Badge.svelte";
    import ContactCard from "$lib/components/ContactCard.svelte";
    import Card from "$lib/components/Card.svelte";
    import { reveal } from "$lib/effects";
    import { base } from "$app/paths";
    import { appPath } from "$lib/paths";
    import { profile, featuredProjects, skills, benefits, traits, contactChannels } from "$lib/data";
</script>

<main class="flex flex-col flex-1 p-4">
    <section id="introPage" class="relative grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14 overflow-hidden">
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10" use:reveal>
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm <span class="poppins text-violet-400">{profile.name.first}</span> {profile.name.last} <br/><span class="poppins text-violet-400">{profile.title}</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                {profile.tagline}
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
                <a 
                    class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer" 
                    href={profile.links.emailWithSubject}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div 
                        class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
                    />
                    <h4 class="relative z-10">Get in Touch &rarr;</h4>
                </a>
                <a 
                    href="#projects" 
                    class="mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full border border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-slate-950 duration-200"
                >
                    <h4>View My Work</h4>
                </a>
                <a 
                    href={appPath('/pipeline/', base)} 
                    data-sveltekit-reload
                    class="mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full border border-violet-700 text-slate-300 hover:border-violet-400 hover:text-violet-400 duration-200"
                >
                    <h4>Try Pipeline</h4>
                </a>
            </div>
        </div>
        <div class="relative grid place-items-center" use:reveal={{ delay: 150 }}>
            <img src="{appPath(profile.image.src, base)}" alt={profile.image.alt} class="block object-cover z-[2] max-h-[70vh] max-w-full h-auto" style="clip-path: inset(0 0 4px 0);"/>
        </div>
    </section>

    <section id="skills" class="py-20 lg:py-32">
        <div use:reveal>
            <SectionHeading eyebrow="Technical Expertise">
                <svelte:fragment slot="title">
                    My <span class="poppins text-violet-400">Skills</span> & Technologies
                </svelte:fragment>
            </SectionHeading>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {#each Object.entries(skills) as [category, skillList]}
                <div use:reveal>
                    <Card interactive={true}>
                        <h4 class="text-xl font-semibold text-violet-400 mb-4">{category}</h4>
                        <div class="flex flex-wrap gap-2">
                            {#each skillList as skill}
                                <Badge>{skill}</Badge>
                            {/each}
                        </div>
                    </Card>
                </div>
            {/each}
        </div>
    </section>

    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <SectionHeading eyebrow="A few of my projects:">
            <svelte:fragment slot="title">
                Curious to <span class="poppins text-violet-400">see</span> my work?
            </svelte:fragment>
        </SectionHeading>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-10" use:reveal>
            {#each featuredProjects as step}
                <Step {step}>
                    <p>{step.description}</p>
                    <div class="flex flex-wrap gap-2 mt-4">
                        {#each step.tech as tech}
                            <Badge size="xs">{tech}</Badge>
                        {/each}
                    </div>
                </Step>
            {/each}
        </div>
    </section>

    <LiveProjects />

    <Resume />

    <section 
        id="about" 
        class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
    >
        <div 
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4">
            <h6 class="text-lg sm:text-xl md:text-2xl">
                Want to know more?
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="poppins text-violet-400">about</span> me.
            </h3>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
            I am . . .
        </p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
                <div class="flex gap-6 sm:gap-8" use:reveal>
                    <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
                        0{index+1}
                    </p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">
                            {benefit.name}
                        </h3>
                        <p>
                            {benefit.description}
                        </p>
                    </div>
                </div>
            {/each}
        </div>
        <h5 class="text-2xl sm:text-3xl font-semibold text-center poppins">The <span class="text-violet-400 poppins">Complete</span> Package</h5>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1000px] mx-auto w-full">
            {#each traits as trait}
                <Card padding="p-5" interactive={true}>
                    <div class="flex items-center gap-3 mb-2">
                        <span aria-label={trait.label} class="text-2xl">{trait.icon}</span>
                        <h6 class="text-lg font-semibold">{trait.title}</h6>
                    </div>
                    <p class="text-slate-400 text-sm">{trait.description}</p>
                </Card>
            {/each}
        </div>
        <p class="mx-auto">So why not reach out?</p>
    </section>

    <section id="contact" class="py-20 lg:py-32">
        <SectionHeading eyebrow="Let's Connect">
            <svelte:fragment slot="title">
                Ready to <span class="poppins text-violet-400">Work Together</span>?
            </svelte:fragment>
        </SectionHeading>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {#each contactChannels as channel}
                <ContactCard {channel} />
            {/each}
        </div>
    </section>
</main>
