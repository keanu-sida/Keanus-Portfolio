<script>
    export let projects = [
        {
            name: "Blotting Innovations",
            description: "Revolutionary biotech platform for high-throughput western blotting solutions, enhancing protein analysis efficiency and precision in laboratories",
            url: "https://blottinginnovations.com",
            image: "/images/blotting-innovations-preview.png",
            tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "TailwindCSS"],
            features: ["96-well western blot systems", "Laboratory workflow optimization", "High-throughput protein analysis", "Responsive design"]
        },
        {
            name: "Laconic Global", 
            description: "Environmental fintech platform specializing in Securitized Sovereign Carbon, enabling nations to transform natural resources into tradable financial assets",
            url: "https://laconicglobal.com",
            image: "/images/laconic-global-preview.png",
            tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe API"],
            features: ["Carbon asset tokenization", "Financial trading platform", "Environmental impact tracking", "Secure payment processing"]
        }
    ];
</script>

<section id="live-projects" class="py-20 lg:py-32">
    <div class="flex flex-col gap-2 text-center mb-16">
        <h6 class="text-large sm:text-xl md:text-2xl">
            Live Applications
        </h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
            Check Out My <span class="poppins text-violet-400">Live Projects</span>
        </h3>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {#each projects as project}
            <div class="bg-slate-900 rounded-lg border border-violet-700 overflow-hidden hover:border-violet-400 duration-200 spotlight gradient-border">
                <div class="aspect-video bg-slate-800 relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-violet-600 to-purple-800 flex items-center justify-center">
                        <div class="text-center">
                            <i class="fa-solid fa-globe text-6xl text-white opacity-70 mb-4"></i>
                            <p class="text-white text-lg font-semibold">{project.name}</p>
                            <p class="text-violet-200 text-sm">Live Website</p>
                        </div>
                    </div>
                </div>
                
                <div class="p-6">
                    <h4 class="text-2xl font-semibold mb-2">{project.name}</h4>
                    <p class="text-slate-400 mb-4">{project.description}</p>
                    
                    <div class="flex flex-wrap gap-2 mb-4">
                        {#each project.tech as tech}
                            <span class="px-3 py-1 bg-violet-700 text-white text-sm rounded-full">{tech}</span>
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
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white py-2 px-4 rounded-full text-sm font-medium duration-200"
                        >
                            <i class="fa-solid fa-external-link-alt"></i>
                            Visit
                        </a>
                        <a 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="inline-flex items-center gap-2 border border-violet-600 text-violet-400 hover:bg-violet-600 hover:text-white rounded-full text-sm py-2 px-4 duration-200"
                        >
                            <i class="fa-solid fa-info-circle"></i>
                            Details
                        </a>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>
