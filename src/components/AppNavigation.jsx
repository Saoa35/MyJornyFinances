import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import {AddTripScreen} from '../screens/AddTripScreen';
import {AddFinanceScreen} from '../screens/AddFinanceScreen';
import TripFinancesScreen from '../screens/TripFinancesScreen';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  const {user} = useSelector(state => state.user);

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

export default AppNavigation;
