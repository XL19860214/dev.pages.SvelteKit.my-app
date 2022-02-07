<script lang='ts'>
    import {
        goto,
        invalidate
    } from '$app/navigation';

    export let id;
    export let joke;

    let idValue = parseInt(id);
    $: prevIdValue = idValue - 1;
    $: nextIdValue = idValue + 1;
    $: imageSrc = `https://avatars.githubusercontent.com/u/${idValue}`
    $: title = `Github User ${idValue} Avatar`

    let handlePrev = (e) => {
        e.preventDefault();
        invalidate(`/github/${idValue}`);
        idValue--;
        goto(`/github/${idValue}`);
    }
    let handleNext = (e) => {
        e.preventDefault();
        invalidate(`/github/${idValue}`);
        idValue++;
        goto(`/github/${idValue}`);
    }
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div>
    <figure>
        <img src={imageSrc} alt="">
        <figcaption>{joke}</figcaption>
    </figure>
</div>

<div class="nav">
    {#if idValue > 1}
        <a class="prev" href="/github/{prevIdValue}" on:click={handlePrev}>Prev</a>
    {/if}
    <a class="next" href="/github/{nextIdValue}" on:click={handleNext}>Next</a>
</div>

<style>
.nav {
    margin-left: 3rem;
}
.next {
    margin-left: 2rem;
}
</style>
