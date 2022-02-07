<script>
    export let id;
</script>

<svelte:head>
	<title>Github User {id} Avatar</title>
</svelte:head>

<div>
    <img src="https://avatars.githubusercontent.com/u/{id}">
</div>
