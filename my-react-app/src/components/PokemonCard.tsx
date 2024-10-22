  interface pokemonProps {
    name: string;
    imgSrc ?: string;
  }
  
  
  function PokemonCard ({pokemon}) {
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