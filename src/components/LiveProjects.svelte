<script>
    export let projects = [
        {
            name: "Your First Live Website",
            description: "A full-stack web application built with modern technologies",
            url: "https://your-first-website.com",
            image: "/images/project1-preview.png",
            tech: ["React.js", "Node.js", "PostgreSQL", "TailwindCSS"],
            features: ["User authentication", "Real-time updates", "Responsive design"]
        },
        {
            name: "Your Second Live Website", 
            description: "An interactive platform showcasing advanced features",
            url: "https://your-second-website.com",
            image: "/images/project2-preview.png",
            tech: ["Next.js", "TypeScript", "MongoDB", "Vercel"],
            features: ["API integration", "Data visualization", "Mobile-first design"]
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
            <div class="bg-slate-900 rounded-lg border border-violet-700 overflow-hidden hover:border-violet-400 duration-200">
                <div class="aspect-video bg-slate-800 relative overflow-hidden">
                    <img 
                        src={project.image} 
                        alt={`Preview of ${project.name}`}
                        class="w-full h-full object-cover"
                        on:error={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'flex';
                        }}
                    />
                    <div class="hidden absolute inset-0 bg-gradient-to-br from-violet-600 to-purple-800 items-center justify-center">
                        <i class="fa-solid fa-globe text-6xl text-white opacity-50"></i>
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
                    
                    <div class="flex gap-4">
                        <a 
                            href={project.url} 
                            target="_blank" 
                            class="flex-1 bg-violet-600 hover:bg-violet-500 text-white py-2 px-4 rounded-lg text-center font-medium duration-200"
                        >
                            <i class="fa-solid fa-external-link-alt mr-2"></i>
                            Visit Site
                        </a>
                        <a 
                            href={`${project.url}/github`} 
                            target="_blank" 
                            class="px-4 py-2 border border-violet-600 text-violet-400 hover:bg-violet-600 hover:text-white rounded-lg duration-200"
                        >
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>
