import { ScrollView } from "react-native";
import { getPokemonDetailsApi } from "../api/PokeApi";
import PokemonHeader from "../components/PokemonHeader";
import Icon from "react-native-vector-icons/FontAwesome5";
import Type from "../components/Type";
import Stats from "../components/Stats";
import React, { useEffect, useState } from "react";

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 5 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;
  return (
    <ScrollView>
      <PokemonHeader
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["home"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}
