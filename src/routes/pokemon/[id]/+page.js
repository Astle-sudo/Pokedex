/** @type {import('./$types').Load} */
export async function load(event) {
    const id = event.params.id;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokeman = await res.json();

    return {
        pokeman
    }
  };