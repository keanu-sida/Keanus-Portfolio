<script>
    let experience = [
        {
            title: "Full Stack Developer",
            company: "Freelance",
            period: "2023 - Present",
            description: "Developed full-stack web applications using React.js, Node.js, and PostgreSQL. Implemented responsive designs and RESTful APIs.",
            achievements: ["Built 10+ client projects", "Achieved 100% client satisfaction", "Reduced load times by 40%"]
        },
        {
            title: "Geospatial Analyst Intern",
            company: "MapLabs, Inc.",
            period: "2022 - 2023", 
            description: "Supported geospatial analysis and mapping projects; cleaned, joined, and visualized spatial datasets. (Details pending)",
            achievements: []
        }
    ];

    let education = [
        {
            degree: "B.S. in Biochemistry and Molecular Biology",
            school: "University of South Carolina",
            year: "Dec 2020",
            description: "Concentration in genomics; relevant coursework in data analysis, statistics, and laboratory techniques."
        }
    ];

    let certifications = [
        {
            name: "Full Stack Engineering",
            issuer: "Codecademy",
            year: "2023",
            description: "Comprehensive program covering frontend, backend, and database technologies."
        },
        {
            name: "Software Engineering Bootcamp",
            issuer: "TripleTen",
            year: "Dec 2025",
            description: "Intensive, project-based program focused on practical full‑stack development, algorithms, and system design."
        }
    ];
</script>

<section id="resume" class="py-20 lg:py-32">
    <div class="flex flex-col gap-2 text-center mb-16">
        <h6 class="text-large sm:text-xl md:text-2xl">
            Professional Background
        </h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
            My <span class="poppins text-violet-400">Experience</span> & Education
        </h3>
    </div>

    <div class="max-w-4xl mx-auto">
        <!-- Experience -->
        <div class="mb-16">
            <h4 class="text-2xl font-semibold text-violet-400 mb-8 flex items-center gap-3">
                <i class="fa-solid fa-briefcase"></i>
                Work Experience
            </h4>
            <div class="space-y-8">
                {#each experience as exp}
                    <div class="bg-slate-900 p-6 rounded-lg border border-violet-700">
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
                    </div>
                {/each}
            </div>
        </div>

        <!-- Education -->
        <div class="mb-16">
            <h4 class="text-2xl font-semibold text-violet-400 mb-8 flex items-center gap-3">
                <i class="fa-solid fa-graduation-cap"></i>
                Education
            </h4>
            <div class="space-y-6">
                {#each education as edu}
                    <div class="bg-slate-900 p-6 rounded-lg border border-violet-700">
                        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                            <h5 class="text-xl font-semibold">{edu.degree}</h5>
                            <span class="text-violet-400 text-sm">{edu.year}</span>
                        </div>
                        <p class="text-violet-400 mb-3">{edu.school}</p>
                        <p class="text-slate-400">{edu.description}</p>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Certifications -->
        <div>
            <h4 class="text-2xl font-semibold text-violet-400 mb-8 flex items-center gap-3">
                <i class="fa-solid fa-certificate"></i>
                Certifications
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                {#each certifications as cert}
                    <div class="bg-slate-900 p-6 rounded-lg border border-violet-700">
                        <h5 class="text-lg font-semibold mb-2">{cert.name}</h5>
                        <p class="text-violet-400 text-sm mb-3">{cert.issuer} • {cert.year}</p>
                        <p class="text-slate-400 text-sm">{cert.description}</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
