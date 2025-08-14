<script>
    import Step from "./Step.svelte";
    import LiveProjects from "./LiveProjects.svelte";
    import Resume from "./Resume.svelte";
    import { reveal } from "$lib/effects";

    let steps = [
        {
            name: "Cancellation Predictor", 
            icon: "fa-solid fa-hotel",
            href: "https://keanu-sida.github.io/hotelML/index.html",
            description: "Machine learning model using Pandas, NumPy, and sklearn to predict hotel booking cancellations with 85% accuracy.",
            tech: ["Python", "Pandas", "NumPy", "sklearn", "Jupyter"]
        },
        {
            name: "Genomic Analysis Tool", 
            icon: "fa-solid fa-dna",
            href: "https://keanu-sida.github.io/IUD-study.pdf",
            description: "Bioinformatics application for DNA sequence analysis using R and Python with interactive visualizations.",
            tech: ["R", "Python", "Bioconductor", "Plotly", "Shiny"]
        },
        {
            name: "Movie Recommender", 
            icon: "fa-solid fa-film",
            href: "https://keanu-sida.github.io/MovieRecommendationSystem/index.html",
            description: "Content-based recommendation system using collaborative filtering and machine learning algorithms.",
            tech: ["Python", "Pandas", "NumPy", "scikit-learn", "Flask"]
        }
    ]

    let benefits = [
        {name: 'a self taught developer', description: 'Professionally certified by Codecademy in Full Stack Engineering, I have built dozens of full stack applications from scratch using modern frameworks like React.js, Next.js, and SvelteKit. My passion for learning drives me to stay current with the latest technologies and best practices.'},
        {name: 'a data visualization nerd', description: 'Originally introduced to programming during undergraduate work in genomic analysis, I have professional experience working with open source libraries in R and Python. I love transforming complex data into meaningful insights through interactive visualizations and machine learning models.'},
        {name: 'a biochemistry graduate', description: 'My background in biochemistry has given me a unique analytical perspective and strong problem-solving skills. This scientific foundation helps me approach software development with methodical precision and attention to detail.'}
    ]

    let skills = {
        "Frontend": ["React.js", "Next.js", "SvelteKit", "JavaScript", "TypeScript", "HTML5", "CSS3", "TailwindCSS"],
        "Backend": ["Node.js", "Express.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
        "Data Science": ["Pandas", "NumPy", "scikit-learn", "R", "Jupyter", "Matplotlib", "Plotly"],
        "Tools": ["Git", "GitHub", "VS Code", "Docker", "Postman", "Figma"]
    }
</script>

<main class="flex flex-col flex-1 p-4">
    <section id="introPage" class="relative grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        <div class="hero-blob" aria-hidden="true"></div>
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10" use:reveal>
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm <span class="poppins text-violet-400">Keanu</span> Sida <br/>Full Stack <span class="poppins text-violet-400">Developer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                My <span class="poppins text-violet-400">favorite tech stack</span> includes JavaScript (React.js, Next.js, or SvelteKit), TailwindCSS, Python, Node.js, Express.js, and PostgreSQL! 
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
                <a 
                    class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer" 
                    href="mailto:keanu.sida@gmail.com?subject=Hey, Keanu!&body=I am emailing you because I came across your website and would like to get in touch!" 
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
            </div>
        </div>
        <div class="relative grid place-items-center" use:reveal={{ delay: 150 }}>
            <img src={"/images/profile.png"}  alt="Logo displaying a raccoon in front of a laptop" class="object-cover z-[2] max-h-[70vh]"/>
        </div>
    </section>

    <section id="skills" class="py-20 lg:py-32">
        <div class="flex flex-col gap-2 text-center mb-16" use:reveal>
            <h6 class="text-lg sm:text-xl md:text-2xl">
                Technical Expertise
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                My <span class="poppins text-violet-400">Skills</span> & Technologies
            </h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {#each Object.entries(skills) as [category, skillList]}
                <div class="bg-slate-900 p-6 rounded-lg border border-violet-700 spotlight gradient-border" use:reveal>
                    <h4 class="text-xl font-semibold text-violet-400 mb-4">{category}</h4>
                    <div class="flex flex-wrap gap-2">
                        {#each skillList as skill}
                            <span class="px-3 py-1 bg-violet-700 text-white text-sm rounded-full">{skill}</span>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </section>

    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-lg sm:text-xl md:text-2xl">
                A few of my projects:
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Curious to <span class="poppins text-violet-400">see</span> my work?
            </h3>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10" use:reveal>
            {#each steps as step}
                <Step {step}>
                    <p>{step.description}</p>
                    <div class="flex flex-wrap gap-2 mt-4">
                        {#each step.tech as tech}
                            <span class="px-2 py-1 bg-violet-700 text-white text-xs rounded">{tech}</span>
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
                <div class="flex gap-6 sm:gap-8">
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
            <div class="bg-white/5 border border-violet-700 rounded-lg p-5">
                <div class="flex items-center gap-3 mb-2">
                    <i class="fa-solid fa-check text-green-500"></i>
                    <h6 class="text-lg font-semibold">Dedication</h6>
                </div>
                <p class="text-slate-400 text-sm">Consistent learner with strong follow-through and reliability.</p>
            </div>
            <div class="bg-white/5 border border-violet-700 rounded-lg p-5">
                <div class="flex items-center gap-3 mb-2">
                    <i class="fa-solid fa-check text-green-500"></i>
                    <h6 class="text-lg font-semibold">Critical Thinking</h6>
                </div>
                <p class="text-slate-400 text-sm">Analytical problem solver with a data-driven mindset.</p>
            </div>
            <div class="bg-white/5 border border-violet-700 rounded-lg p-5">
                <div class="flex items-center gap-3 mb-2">
                    <i class="fa-solid fa-check text-green-500"></i>
                    <h6 class="text-lg font-semibold">Interpersonal Skills</h6>
                </div>
                <p class="text-slate-400 text-sm">Clear communicator and collaborative team player.</p>
            </div>
            <div class="bg-white/5 border border-violet-700 rounded-lg p-5">
                <div class="flex items-center gap-3 mb-2">
                    <i class="fa-solid fa-check text-green-500"></i>
                    <h6 class="text-lg font-semibold">Programming Expertise</h6>
                </div>
                <p class="text-slate-400 text-sm">Full-stack experience across modern JS and Python ecosystems.</p>
            </div>
            <div class="bg-white/5 border border-violet-700 rounded-lg p-5">
                <div class="flex items-center gap-3 mb-2">
                    <i class="fa-solid fa-check text-green-500"></i>
                    <h6 class="text-lg font-semibold">Management Experience</h6>
                </div>
                <p class="text-slate-400 text-sm">Comfortable leading initiatives and owning deliverables.</p>
            </div>
        </div>
        <p class="mx-auto">So why not reach out?</p>
    </section>

    <section id="contact" class="py-20 lg:py-32">
        <div class="flex flex-col gap-2 text-center mb-16">
            <h6 class="text-lg sm:text-xl md:text-2xl">
                Let's Connect
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Ready to <span class="poppins text-violet-400">Work Together</span>?
            </h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <a href="mailto:keanu.sida@gmail.com" class="bg-slate-900 p-6 rounded-lg border border-violet-700 hover:border-violet-400 duration-200 text-center">
                <i class="fa-solid fa-envelope text-3xl text-violet-400 mb-4"></i>
                <h4 class="text-lg font-semibold mb-2">Email</h4>
                <p class="text-sm text-slate-400">keanu.sida@gmail.com</p>
            </a>
            <a href="https://github.com/keanu-sida" target="_blank" rel="noopener noreferrer" class="bg-slate-900 p-6 rounded-lg border border-violet-700 hover:border-violet-400 duration-200 text-center">
                <i class="fa-brands fa-github text-3xl text-violet-400 mb-4"></i>
                <h4 class="text-lg font-semibold mb-2">GitHub</h4>
                <p class="text-sm text-slate-400">View my code</p>
            </a>
            <a href="https://www.linkedin.com/in/keanu-sida" target="_blank" rel="noopener noreferrer" class="bg-slate-900 p-6 rounded-lg border border-violet-700 hover:border-violet-400 duration-200 text-center">
                <i class="fa-brands fa-linkedin text-3xl text-violet-400 mb-4"></i>
                <h4 class="text-lg font-semibold mb-2">LinkedIn</h4>
                <p class="text-sm text-slate-400">Connect with me</p>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" class="bg-slate-900 p-6 rounded-lg border border-violet-700 hover:border-violet-400 duration-200 text-center">
                <i class="fa-solid fa-file-pdf text-3xl text-violet-400 mb-4"></i>
                <h4 class="text-lg font-semibold mb-2">Resume</h4>
                <p class="text-sm text-slate-400">Download PDF</p>
            </a>
        </div>
    </section>
</main>