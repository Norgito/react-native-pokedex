import { SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/PokeApi";
import PokemonList from "../components/PokemonList";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const loadPokemons = async () => {
      try {
        const response = await getPokemonsApi();

        const pokemonsArray = [];

        setPokemons(pokemonsArray);
        for await (const pokemon of response.results) {
          const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

          pokemonsArray.push({
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            type: pokemonDetails.types[0].type.name,
            order: pokemonDetails.order,
            image: pokemonDetails.sprites.other["home"].front_default,
          });
        }
        setPokemons([...pokemons, ...pokemonsArray]);
      } catch (error) {
        console.error(error);
      }
    };
    return loadPokemons;
  }, []);

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} />
    </SafeAreaView>
  );
}
