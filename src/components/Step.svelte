<script>
    export let step;

    const computedHref = step?.href ?? '#';
    const isExternal = Boolean(step?.href);
</script>

<a 
    href={computedHref} 
    target={isExternal ? "_blank" : undefined}
    rel={isExternal ? "noopener noreferrer" : undefined}
    aria-disabled={!isExternal}
    class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200 spotlight gradient-border"
>
    <div class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200">
        <i class={step.icon}/>
    </div>
    <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">{step.name}</h3>
    <slot />
    <div class="flex-1 flex justify-between gap-4 items-center">
        <span 
            class="ml-auto inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white py-2 px-3 rounded-full text-sm font-medium duration-200"
        >
            <i class="fa-solid fa-external-link-alt"></i>
            Visit
        </span>
    </div>
</a>