<script>
    export let y;

    let tabs = [
        {name: "Skills", link: "#skills"},
        {name: "Projects", link: "#projects"},
        {name: "Resume", link: "#resume"},
        {name: "About Me", link: "#about"},
        {name: "Contact", link: "#contact"},
    ]

    let menuOpen = false;
</script>

<header class={"sticky z-[10] top-0 duration-200 px-6 border border-solid " + (
    y > 0 
    ? " py-4 bg-slate-950 border-violet-950"
    : " py-6 bg-transparent border-transparent"
)}>
    <div class="flex items-center justify-between gap-3">
        <h1 class="font-medium">
            <b class="font-bold poppins">Keanu</b> Sida
        </h1>
        <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">
            {#each tabs as tab, index}
                <a href = {tab.link} class="duration-200 hover:text-violet-400">
                    <p>{tab.name}</p>
                </a>
            {/each}
        </div>
        <a 
            href="mailto:keanu.sida@gmail.com?subject=Hey, Keanu!&body=I am emailing because I came across your website and would like to get in touch!"
            target="_blank"
            rel="noopener noreferrer"
            class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
        >
            <div 
                class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
            />
            <h4 class="relative z-10">Get in Touch</h4>
        </a>
        {#if y > 0}
            <button 
                class="sm:hidden fixed top-4 right-4 p-3 rounded-full bg-slate-900/90 border border-violet-700 text-violet-400 shadow-lg z-[90]"
                on:click={() => menuOpen = !menuOpen}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
            >
                <i class="fa-solid fa-bars"></i>
            </button>
        {:else}
            <button 
                class="sm:hidden ml-2 p-2 rounded border border-violet-700 text-violet-400"
                on:click={() => menuOpen = !menuOpen}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
            >
                <i class="fa-solid fa-bars"></i>
            </button>
        {/if}
    </div>

    {#if menuOpen}
        <div class="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-sm">
            <button 
                class="absolute top-4 right-4 p-3 rounded-full bg-slate-900/90 border border-violet-700 text-violet-400 shadow-lg"
                aria-label="Close menu"
                on:click={() => menuOpen = false}
            >
                <i class="fa-solid fa-xmark"></i>
            </button>
            <nav class="h-full w-full flex flex-col items-center justify-center gap-6">
                {#each tabs as tab}
                    <a href={tab.link} class="text-2xl sm:text-3xl font-semibold hover:text-violet-400 duration-150" on:click={() => menuOpen = false}>
                        {tab.name}
                    </a>
                {/each}
            </nav>
        </div>
    {/if}
    
</header>