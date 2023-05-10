import react from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/PokemonAtrapados';
import StackScreen from './Screens/Pokedex';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
        >
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen
                name="Stack"
                component={StackScreen}
            />
        </HomeStackNavigator.Navigator>
    )
}

function MyTabs() {
  return (
    <Tab.Navigator>
        <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
                tabBarLabel: 'Inicio',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
                tabBarBadge: 3,
                headerShown: false
            }}
        />
        <Tab.Screen 
            name="Pokemon" 
            component={SettingsScreen}
            options={{
                tabBarLabel: 'Pokemon Atrapados',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="brightness-5" color={color} size={size} />
                ),
                tabBarBadge: 3,
                headerShown: false
            }}
        />
        <Tab.Screen name="Pokedex" component={StackScreen}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default function navigation() {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}
