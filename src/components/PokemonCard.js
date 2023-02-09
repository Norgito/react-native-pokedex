import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";

export default function PokemonCard(props) {
  const { pokemon } = props;

  const goToPokemon = () => {
    console.log(`${pokemon.name}`);
  };
  return (
    <View style={styles.container}>
            <Pressable onPress={goToPokemon}>
                <View style={styles.card}>
                    <View style={styles.spacing}>
                        <View style={styles.bgCard}>
                            <Text style={styles.number}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
                            <Text style={styles.name}>{pokemon.name}</Text>
                            <Image source={{ uri: pokemon.image }} style={styles.image} />
                        </View>
                    </View>
                </View>
            </Pressable>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        flex: 1,
        height: 130
    },
    spacing: {
        flex: 1,
        padding: 5
    },
    bgCard: {
        backgroundColor: "grey"
    },
    image: {
        position: "absolute",
        bottom: 2,
        right: 2,
        width: 100,
        height: 100
    },
    name: {
        color: "#fff",
        paddingTop: 10,
        fontSize: 15,
        fontWeight: "bold",
    },
    number: {
        position: "absolute",
        top: 10,
        right: 10,
        fontSize: 11,
        color: "#fff"
    }
});
