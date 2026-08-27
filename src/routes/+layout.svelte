<script>
    import "../app.css";
    import { base } from "$app/paths";
    import { appPath } from "$lib/paths";
    import Header from "../components/Header.svelte";
    import { profile, siteMeta } from "$lib/data";

    let y;
    let innerHeight = 0;
    let innerWidth = 0;

    function goTop() {
        document.body.scrollIntoView();
    }

    $: ogImageUrl = `${siteMeta.url.replace(/\/$/, '')}${appPath(siteMeta.ogImage, base)}`;

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: profile.name.full,
        jobTitle: profile.title,
        email: profile.email,
        url: siteMeta.url,
        sameAs: [profile.links.github, profile.links.linkedin]
    };
</script>

<svelte:head>
    <title>{siteMeta.title}</title>
    <meta name="description" content={siteMeta.description} />
    <meta name="theme-color" content={siteMeta.themeColor} />
    <link rel="canonical" href={siteMeta.url} />

    <meta property="og:type" content="website" />
    <meta property="og:title" content={siteMeta.title} />
    <meta property="og:description" content={siteMeta.description} />
    <meta property="og:url" content={siteMeta.url} />
    <meta property="og:image" content={ogImageUrl} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={siteMeta.title} />
    <meta name="twitter:description" content={siteMeta.description} />
    <meta name="twitter:image" content={ogImageUrl} />

    {@html `<script type="application/ld+json">${JSON.stringify(personSchema)}</script>`}
</svelte:head>
  
<div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
    <div class={"fixed bottom-0 w-full box-border duration-200 flex p-10 z-[10] " + (
        y > 0 
        ? " opacity-100 pointer-events-auto"
        : " pointer-events-none opacity-0"
    )}>
        <button on:click={goTop} class="ml-auto rounded-full aspect-square bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer" aria-label="Scroll to top">
            <i class="fa-solid fa-arrow-up grid place-items-center aspect-square" />
        </button>
    </div>
    <Header {y} />
    <slot />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
