import "./App.css";
import PokemonCard from "./components/PokemonCard"
import {useState} from "react";
// import NavBar from "./components/NavBar";

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];


function App() {
  // state pokemonIndex initialisé à 0
  const [pokemonIndex, setpokemonIndex] = useState(0);
  // au clic +1 dans la limite de la longueur de pokemonList
  const handleClickNext = () => {
    setpokemonIndex((pokemonIndex) => 
      pokemonIndex < pokemonList.length - 1 ? pokemonIndex + 1 : 0
    );
  };
// au clic -1 dans la limite de la longueur de pokemonList
  const handleClickBefore = () => {
    setpokemonIndex((pokemonIndex) =>
      pokemonIndex > 0 ? pokemonIndex - 1 : pokemonList.length - 1
  );
  } ;

  return (
    <figure>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      {/* boutons précédents et suivants */}
    <button type="button" onClick={handleClickBefore}>Précédent</button>
    <button type="button" onClick={handleClickNext}>Suivant</button>
    </figure>
  );
}


export default App;
