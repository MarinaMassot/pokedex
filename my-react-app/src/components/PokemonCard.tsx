const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  function PokemonCard () {
    const pokemon = pokemonList [0]
    return (<div className="pokemon-card">
    <figcaption>{pokemon.name}</figcaption>
    {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      </div>
        );
  }

  export default PokemonCard;