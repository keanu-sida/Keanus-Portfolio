<script>
    export let step;

    $: hasDemo = Boolean(step?.href);
    $: hasRepo = Boolean(step?.repo);
</script>

<article
    class="relative p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center hover:border-violet-400 duration-200 spotlight gradient-border"
>
    <!-- Mask the top border just behind the icon -->
    <div class="absolute left-1/2 -translate-x-1/2 -top-[1px] h-3 w-24 bg-slate-950 z-[1]"></div>
    <div class="relative z-[2] bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200">
        <i class={step.icon} aria-hidden="true" />
    </div>

    <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">{step.name}</h3>

    <slot />

    {#if step.highlights?.length}
        <ul class="text-sm text-slate-400 space-y-1 text-left">
            {#each step.highlights as highlight}
                <li class="flex gap-2">
                    <i class="fa-solid fa-check text-violet-400 text-xs mt-1.5 shrink-0" aria-hidden="true"></i>
                    <span>{highlight}</span>
                </li>
            {/each}
        </ul>
    {/if}

    <div class="flex-1 flex flex-wrap justify-center gap-3 items-end pt-2">
        {#if hasDemo}
            <a
                href={step.href}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white py-2 px-4 rounded-full text-sm font-medium duration-200"
            >
                <i class="fa-solid fa-external-link-alt" aria-hidden="true"></i>
                <span>View project<span class="sr-only"> — {step.name}</span></span>
            </a>
        {/if}

        {#if hasRepo}
            <a
                href={step.repo}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 border border-violet-600 text-violet-400 hover:bg-violet-600 hover:text-white py-2 px-4 rounded-full text-sm font-medium duration-200"
            >
                <i class="fa-brands fa-github" aria-hidden="true"></i>
                <span>Code<span class="sr-only"> for {step.name}</span></span>
            </a>
        {/if}

        {#if step.private && !hasDemo && !hasRepo}
            <span class="inline-flex items-center gap-2 border border-slate-700 text-slate-400 py-2 px-4 rounded-full text-sm">
                <i class="fa-solid fa-lock text-xs" aria-hidden="true"></i>
                Private source — available on request
            </span>
        {/if}
    </div>
</article>
