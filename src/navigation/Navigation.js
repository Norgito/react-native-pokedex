import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Favorite, Pokedex, Account, Pokemon } from "../index";


export default function Navigation() {
  const Tab = createBottomTabNavigator()
  const PokemonStack = createNativeStackNavigator();

  const StackPokemon = () => {
    return (<PokemonStack.Navigator>
      <PokemonStack.Screen name="Pokedex" component={Pokedex} options={{ title: "POKEMONS", headerTransparent: false, headerTitleAlign: "center" }} />
      <PokemonStack.Screen name="Pokemon" component={Pokemon} />
    </PokemonStack.Navigator>
    )
  }
  return (
    <Tab.Navigator initialRouteName="StackPokemon">
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          label: "Favorites",
          title: "Favorites",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="StackPokemon" component={StackPokemon} options={{
        tabBarLabel: "",
        headerShown: false,
        tabBarIcon: () => renderPokeball()
      }} />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          label: "My Account",
          title: "My Account",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball() {
  return (
    <Image
      source={require("../../assets/pokeball1.png")}
      style={{ width: 75, height: 75, top: -20 }}
    />
  );
}
