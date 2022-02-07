<script>
    export let id;
    export let joke;
</script>

<svelte:head>
	<title>Github User {id} Avatar</title>
</svelte:head>

<div>
    <figure>
        <img src="https://avatars.githubusercontent.com/u/{id}" alt="">
        <figcaption>{joke}</figcaption>
    </figure>
</div>
