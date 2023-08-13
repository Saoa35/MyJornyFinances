import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import {AddTripScreen} from '../screens/AddTripScreen';
import {AddFinanceScreen} from '../screens/AddFinanceScreen';
import TripFinancesScreen from '../screens/TripFinancesScreen';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../config/firebase';
import {setUser} from '../redux/slices/userSlice';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  const {user} = useSelector(state => state.user);

  const dispatch = useDispatch();

  // onAuthStateChanged(auth, u => {
  //   console.log('user:', u);
  //   dispatch(setUser(u));
  // });

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!user ? (
          <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
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
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="AddTrip" component={AddTripScreen} />
            <Stack.Screen name="AddFinance" component={AddFinanceScreen} />
            <Stack.Screen name="TripFinances" component={TripFinancesScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
