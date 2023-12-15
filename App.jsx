import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {View, ScrollView, Text, StyleSheet} from 'react-native';
import Home from './src/views/Home';
import About from './src/views/About';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Inicio',
            headerStyle: {backgroundColor: 'blue'},
            headerTitleStyle: {color: '#FFF', fontSize: 20, fontWeight: 'bold'},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            title: 'Nosotros',
            headerStyle: {
              backgroundColor: 'red',
              fontSize: 20,
              fontWeight: 'bold',
            },
            headerTitleStyle: {color: '#FFF'},
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
