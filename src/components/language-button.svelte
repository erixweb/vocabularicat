<script>
	import CatalanFlag from "./icons/catalan-flag.svelte"
    import EnglishFlag from "./icons/english-flag.svelte"
    import SpanishFlag from "./icons/spanish-flag.svelte"

    let show = false
</script>

<div class="relative">
    <button on:click={() => show = !show} class="flex gap-[10px] items-center justify-center">
        <CatalanFlag />
        Català
    </button>
    {#if show}
    <div class="absolute top-[40px]  right-[0px] rounded-[5px] bg-slate-200 p-[8px] flex gap-[20px] flex-col">
        <a href="/es" class="flex gap-[10px] items-center justify-center">
            <SpanishFlag />
            Español
        </a>
        <a href="/en" class="flex gap-[10px] items-center justify-center">
            <EnglishFlag />
            English
        </a>
    </div>
    {/if}
</div>