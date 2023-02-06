import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Favorite, Pokedex, Account } from '../index';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Account' component={Account} />
            <Tab.Screen name='Pokedex' component={Pokedex} />
            <Tab.Screen name='Favorite' component={Favorite} />

        </Tab.Navigator>
    )
}