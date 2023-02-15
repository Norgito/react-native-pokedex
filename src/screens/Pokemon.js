import { View, Text } from "react-native";
import React from "react";

export default function Pokemon(props) {
  const { navigation, route } = props;
  console.log(route);
  return (
    <View>
      <Text>Pokemon</Text>
    </View>
  );
}
