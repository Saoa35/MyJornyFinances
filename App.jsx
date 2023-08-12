import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen';
import {AddTripScreen} from './src/screens/AddTripScreen';
import {AddFinanceScreen} from './src/screens/AddFinanceScreen';
import TripFinancesScreen from './src/screens/TripFinancesScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          options={{presentation: 'modal'}}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{presentation: 'modal'}}
          name="Register"
          component={RegistrationScreen}
        />
        <Stack.Screen name="AddTrip" component={AddTripScreen} />
        <Stack.Screen name="AddFinance" component={AddFinanceScreen} />
        <Stack.Screen name="TripFinances" component={TripFinancesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
