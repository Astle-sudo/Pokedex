<script>
    import {pokemon} from "../stores/pokedex"
    import Card from "../components/Card.svelte"

    let searchTerm = "";
    let filteredPokemon = [];

    $: {
        if (searchTerm) {
            filteredPokemon = $pokemon.filter(pokeman => pokeman.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
        }
        else {
            filteredPokemon = [...$pokemon];
        }
    }
</script>

<h1 class="text-center text-4xl my-8 uppercase">Pokedex</h1>

<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" type="text" bind:value={searchTerm} placeholder="Search Pokemon">

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each filteredPokemon as pokeman}
        <Card pokeman = {pokeman}/>
    {/each}
</div>

