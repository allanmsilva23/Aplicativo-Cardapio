import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Tela1 from './tela1';
import Tela2 from './tela2';
import Tela3 from './tela3';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#B84D3D',
        tabBarInactiveTintColor: '#8E7756',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          elevation: 10,
          height: 65,
          paddingBottom: 10,
          paddingTop: 5,
        },
        headerStyle: { 
          backgroundColor: '#B84D3D',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: '#FFFFFF',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        }
      }}
    >
      <Tab.Screen
        name="Pizza"
        component={Tela1}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pizza" color={color} size={size + 4} />
          ),
        }}
      />
      <Tab.Screen
        name="Hamburger"
        component={Tela2}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="hamburger" color={color} size={size + 4} />
          ),
        }}
      />
      <Tab.Screen
        name="Bebida"
        component={Tela3}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cup-water" color={color} size={size + 4} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}