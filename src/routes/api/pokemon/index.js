export async function get({ params }) {
  // const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
  const url = `https://pokeapi.co/api/v2/pokedex/5/`
  const patt = /(\d+)(?!.*\d)/;
  const res = await fetch(url);
  const data = await res.json();
  const pokemon = data.pokemon_entries.map((data, index) => {
    const pokeid = patt.exec(data.pokemon_species.url);
    return {
      name: data.pokemon_species.name,
      id: index + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        pokeid
      }.png`
    };
  });
  return {
    status: 200,
    body: pokemon
  };
}
