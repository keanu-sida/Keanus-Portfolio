<script>
    export let y;

    import { base } from '$app/paths';
    import { navTabs, profile } from '$lib/data';
    import { appPath, homeHash } from '$lib/paths';

    let menuOpen = false;

    function navHref(tab) {
        return tab.isRoute ? appPath(tab.link, base) : homeHash(tab.link, base);
    }
</script>

<header class={"sticky z-[10] top-0 duration-200 px-6 border border-solid " + (
    y > 0 
    ? " py-4 bg-slate-950 border-violet-950"
    : " py-6 bg-transparent border-transparent"
)}>
    <div class="flex items-center justify-between gap-3">
        <a href={appPath('/', base)} class="font-medium hover:text-violet-400 duration-200">
            <b class="font-bold poppins">{profile.name.first}</b> {profile.name.last}
        </a>
        <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">
            {#each navTabs as tab}
                <a href={navHref(tab)} class="duration-200 hover:text-violet-400">
                    <p>{tab.name}</p>
                </a>
            {/each}
            <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                class="text-violet-400 hover:text-violet-300 duration-200"
                aria-label="LinkedIn profile"
            >
                <i class="fa-brands fa-linkedin text-lg"></i>
            </a>
        </div>
        <a 
            href={profile.links.emailWithSubject}
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
            <nav id="mobile-nav" class="h-full w-full flex flex-col items-center justify-center gap-6">
                {#each navTabs as tab}
                    <a href={navHref(tab)} class="text-2xl sm:text-3xl font-semibold hover:text-violet-400 duration-150" on:click={() => menuOpen = false}>
                        {tab.name}
                    </a>
                {/each}
                <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-2xl text-violet-400"
                    on:click={() => menuOpen = false}
                >
                    <i class="fa-brands fa-linkedin"></i> LinkedIn
                </a>
            </nav>
        </div>
    {/if}
    
</header>
