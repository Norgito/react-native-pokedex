import { StyleSheet, View, Text } from "react-native";
import { map, capitalize } from "lodash";
import GetColorByPokemon from "../../src/utils/GetColorByPokemon";

export default function Type(props) {
  const { types } = props;

  return (
    <View style={styles.content}>
      {map(types, (item, url) => (
        <View
          key={url}
          style={{
            ...styles.pill,
            backgroundColor: GetColorByPokemon(item.type.name),
          }}
        >
          <Text>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
