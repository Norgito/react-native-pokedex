import { SafeAreaView } from "react-native-safe-area-context";
import React, { useCallback, useState, useEffect } from "react";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/PokeApi";
import PokemonList from "../components/PokemonList";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = useCallback(async () => {
    try {
      // start the loading request
      setLoading(true);
      const { results: pokemonsResponse, next: nextPokemonListUrl } =
        await getPokemonsApi(nextUrl);
      setNextUrl(nextPokemonListUrl);

      const pokemonsArray = [];
      for await (const pokemon of pokemonsResponse) {
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
    } finally {
      // return loading to false
      setLoading(false);
    }
  }, [pokemons, nextUrl]);

  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
        isLoading={loading}
      />
    </SafeAreaView>
  );
}
