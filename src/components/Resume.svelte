<script>
    let experience = [
        {
            title: "Full Stack Developer",
            company: "Freelance",
            period: "2023 - Present",
            description: "Developed full-stack web applications using React.js, Node.js, and PostgreSQL. Implemented responsive designs and RESTful APIs.",
            achievements: ["Built 10+ client projects", "Achieved 100% client satisfaction"]
        },
        {
            title: "Geospatial Analyst Intern",
            company: "MapLabs, Inc.",
            period: "2023 - 2024", 
            description: "Supported geospatial analysis and mapping projects; cleaned, joined, and visualized spatial datasets using Python/GeoPandas, QGIS/ArcGIS Pro, and PostGIS.",
            achievements: [
                "Processed and joined spatial datasets (Shapefile, GeoJSON, CSV) with GeoPandas and PostGIS",
                "Built reproducible map production workflows in QGIS/ArcGIS Pro for analysis and reporting",
                "Implemented geocoding and reverse‑geocoding workflows to standardize address data",
                "Published interactive web maps (Leaflet/Mapbox) with clustering and heatmap layers"
            ]
        },
        {
            title: "Assistant Club Manager",
            company: "Freedom Boat Club",
            period: "Aug 2022 - Sep 2023",
            description: "Managed operations for a high-asset marina franchise during corporate integration and growth phase.",
            achievements: [
                "Oversaw >$3M in assets; contributed to >300% growth",
                "Led software integration post‑acquisition to streamline franchise operations"
            ]
        },
        {
            title: "Dock Master",
            company: "Freedom Boat Club",
            period: "Oct 2019 - Aug 2022",
            description: "Ensured safe, efficient daily marina operations and member experience at scale.",
            achievements: [
                "Drove member satisfaction and retention through exceptional service",
                "Generated qualified leads for membership growth",
                "Maneuvered and maintained watercraft valued $20K–$80K while enforcing safety protocols"
            ]
        },
        {
            title: "Research Specialist",
            company: "Medical University of South Carolina (MUSC)",
            period: "Feb 2021 - Sep 2021",
            description: "Supported the Mulholland Lab with experiment scheduling, wet‑lab and bioinformatics analysis, and animal care.",
            achievements: [
                "Managed lab operations and ensured adherence to research protocols",
                "Performed chemical and bioinformatics analyses; contributed to publications"
            ]
        },
        {
            title: "Data Scientist (Founder)",
            company: "The Open Genome Initiative",
            period: "Jan 2018 - Dec 2019",
            description: "Founded a nonprofit to expand access to genomic testing and reporting in underserved communities.",
            achievements: [
                "Delivered free monogenic testing using Illumina chips",
                "Built custom R reports for results visualization and interpretation",
                "Increased access to genomic testing in the Columbia, SC area"
            ]
        },
        {
            title: "Sous Chef",
            company: "Patrick Properties Hospitality Group (Parcel 32)",
            period: "Jan 2019 - Sep 2019",
            description: "Contributed to culinary program execution and menu development in a high‑standard kitchen.",
            achievements: [
                "Collaborated with James Beard–nominated chef on low‑country cuisine",
                "Blended traditional and modern techniques for elevated presentation"
            ]
        },
        {
            title: "Administrative Assistant",
            company: "HarborMaster, Inc.",
            period: "Jul 2018 - Dec 2018",
            description: "Supported operations for a marine maintenance firm handling electrical and plumbing work on large vessels.",
            achievements: [
                "Managed scheduling, accounting, and lead processing",
                "Streamlined owner–technician communication for faster completion",
                "Implemented tooling (e.g., QuickBooks, Jira) to improve data accuracy"
            ]
        },
        {
            title: "Line Cook",
            company: "Home Team BBQ",
            period: "Feb 2018 - Jul 2018",
            description: "Executed line service and contributed to menu improvements in a high‑volume kitchen.",
            achievements: [
                "Maintained quality and timing during peak service",
                "Helped create new menu items and trained new staff"
            ]
        },
        {
            title: "Line Cook",
            company: "Kiawah Island Golf Resort",
            period: "Jun 2015 - Aug 2017",
            description: "Prepared low‑country cuisine to Forbes 5‑star standards across restaurants in The Sanctuary Hotel.",
            achievements: [
                "Advanced from dishwasher to line cook in indoor and outdoor kitchens",
                "Upheld five‑star hospitality and plating standards"
            ]
        },
        {
            title: "Transportation Specialist",
            company: "BMW Manufacturing Co., LLC",
            period: "May 2014 - Aug 2014",
            description: "Wrapped newly assembled vehicles for transport and delivered them to post‑processing facilities.",
            achievements: [
                "Improved process leading to factory‑wide ‘Catch of the Day’ award",
                "Set a shift record for most vehicles processed"
            ]
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
            name: "Data Science and Machine Learning",
            issuer: "MIT Schwarzman College of Computing",
            year: "2022",
            description: "Coursework in machine learning, data analysis, and applied AI methods."
        },
        {
            name: "Software Engineering Bootcamp",
            issuer: "TripleTen",
            year: "Dec 2025",
            description: "Intensive, project-based program focused on practical full‑stack development, algorithms, and system design."
        }
    ];

    let showAllExperience = false;
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
                {#each (showAllExperience ? experience : experience.slice(0, 5)) as exp}
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
