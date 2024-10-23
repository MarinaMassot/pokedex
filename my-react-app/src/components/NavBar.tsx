interface Pokemon {
    name: string;
    imgSrc ?: string;
  }

interface NavBarPropsType {
    pokemonIndex: number;
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
  }

  

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarPropsType) {
 
  return (
    <div>
      <button
        type="button"
        className="buttonPrev"
        onClick={() =>
          setPokemonIndex(pokemonIndex > 0 ? pokemonIndex - 1 : pokemonList.length - 1)
        }
      >
        Précédent
      </button>

      <button
        type="button"
        className="buttonNext"
        onClick={() =>
          setPokemonIndex(pokemonIndex < pokemonList.length - 1 ? pokemonIndex + 1 : 0)
        }
      >
        Suivant
      </button>
    </div>
  );
}

export default NavBar;