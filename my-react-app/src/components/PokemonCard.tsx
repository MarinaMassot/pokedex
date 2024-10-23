interface Pokemon {
    name: string;
    imgSrc ?: string;
  }
  
  
  function PokemonCard ({pokemon}: Pokemon) {
    const {name, imgSrc}=pokemon

    return (<div className="pokemon-card">
    <figcaption>{name}</figcaption>
    {imgSrc ? (
        <img src={imgSrc} alt={name} />
      ) : (
        <p>???</p>
      )}
      </div>
        );
    }

  export default PokemonCard;