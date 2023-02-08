import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Pokemon from '../screens/Pokemon';

const Stack = createNativeStackNavigator();

export default function NavPokemon() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Pokemon' component={Pokemon} />
        </Stack.Navigator>
    )
}