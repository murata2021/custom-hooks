import React, { useState } from "react";
import pokemonList from "./pokemonList";
import { choice } from "./helpers";

/* Select element to choose from common pokemon. */
function PokemonSelect({ setDraw,setUrl, pokemon = pokemonList,reset }) {
  const [pokeIdx, setPokeIdx] = useState(0);
  const handleChange = evt => {
    setPokeIdx(evt.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        {pokemon.map((p, idx) => (
          <option key={idx} value={idx}>
            {p}
          </option>
        ))}
      </select>
      <button onClick={() =>{
        setUrl(`https://pokeapi.co/api/v2/pokemon/${pokemon[pokeIdx]}/`)
        setDraw(true)

      } }>Catch one!</button>
      <button onClick={() =>{
          setUrl(`https://pokeapi.co/api/v2/pokemon/${choice(pokemon)}/`)
          setDraw(true)

      } }>I'm feeling lucky</button>

      <button onClick={()=>reset()}>Reset</button>
    </div>
  );
}

export default PokemonSelect;
