<script context="module">
  export async function load({ page }) {
    const patt = /(\d+)(?!.*\d)/;
    const url = `https://pokeapi.co/api/v2/pokedex/5/`
    const res = await fetch(url);
    const data = await res.json();
    const loadedPokemon = data.pokemon_entries.map((data, index) => {
      const pokeid = patt.exec(data.pokemon_species.url)[0];
      return {
        name: data.pokemon_species.name,
        id: index + 1,
        sinnoh: index + 1,
        national: pokeid,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          pokeid
        }.png`
      };
    });
    return { props: { pokemon: loadedPokemon } };
  }
</script>

<script lang="ts">
  import PokemanCard from '../components/pokemanCard.svelte';
  export let pokemon;

  let searchTerm = '';
  let filteredPokemon = [];

  $: {
    if (searchTerm) {
      filteredPokemon = pokemon.filter((pokeman) =>
        pokeman.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      filteredPokemon = [...pokemon];
    }
  }
</script>

<svelte:head>
  <title>Svelte Kit Pokedex</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">Svelte Kit Pokedex</h1>

<input
  class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
  type="text"
  bind:value={searchTerm}
  placeholder="Search Pokemon..."
/>

<div class="py-4 grid gap-4 md:grid-cols-3 grid-cols-1">
  {#each filteredPokemon as pokeman}
    <PokemanCard {pokeman} />
  {/each}
</div>
