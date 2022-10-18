<script>
    /** @type {import('./$types').Data} */
    export let data;
    const type = data.pokeman.types[0].type.name;
</script>

<svelte:head>
	<title>Pokedex - {data.pokeman.name}</title>
</svelte:head>

<div class="flex flex-col items-center">

    <h1 class="text-4xl text-center my-8 uppercase">{data.pokeman.name}</h1>
    <p>Type: <strong>{type}</strong> | Height: <strong>{data.pokeman.height}M</strong>
        | Weight: <strong>{data.pokeman.weight}Kg</strong>
    </p>
    <img class="card-image" src={data.pokeman.sprites['front_default']} 
    alt={data.pokeman.name}
    />
</div>






   