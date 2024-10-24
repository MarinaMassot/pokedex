import "./NavBar.css";

interface Pokemon {
    name: string;
    imgSrc ?: string;
  }

interface NavBarTypeProps {
    pokemonIndex?: number;
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
  }


function NavBar({ setPokemonIndex, pokemonList }: NavBarTypeProps) {

return (
    <div>
        <section>
        <ul className="navBarList">
            {pokemonList.map((pokemon, i) => (
            <li key={pokemon.name}>
                <button type="button" onClick={() =>setPokemonIndex(i)}>{pokemon.name}</button>
            </li>  
            ))}
        </ul>
        </section>
    </div>
        )
    }

export default NavBar;



//   const handleClick = () => {
//     {pokemonList[pokemonIndex]}
//   };


//   return (
//     <div>
//         <ul>
//             {pokemonList.map(pokemon => (
//                 <li key={name}>
//                         <{imgSrc}{name}/>
//                 </li>
//             ))}
//         </ul>
//     </div>
//   );
