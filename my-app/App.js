import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';

import Home from './components/Home.js';
import ExibirCaminho from './components/ExibirCaminho.js';
import ListarRotas from './components/ListarRotas.js';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#1C1C1C', 
          height: 50,
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: '500',
        },
        tabBarActiveTintColor: '#00FF00', 
        tabBarInactiveTintColor: '#CCCCCC',
        headerStyle: {
          backgroundColor: '#1C1C1C', 
        },
        headerTintColor: '#FFFFFF', 
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ) 
        }} 
      />
      <Tab.Screen 
        name="ExibirCaminho" 
        component={ExibirCaminho} 
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="car" size={size} color={color} />
          ) 
        }} 
      />
      <Tab.Screen 
        name="Listar Rotas" 
        component={ListarRotas} 
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="car" size={size} color={color} />
          ) 
        }} 
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Tabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
