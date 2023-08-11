import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen';
import {AddTripScreen} from './src/screens/AddTripScreen';
import {AddFinanceScreen} from './src/screens/AddFinanceScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AddTrip" component={AddTripScreen} />
        <Stack.Screen name="AddFinance" component={AddFinanceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
