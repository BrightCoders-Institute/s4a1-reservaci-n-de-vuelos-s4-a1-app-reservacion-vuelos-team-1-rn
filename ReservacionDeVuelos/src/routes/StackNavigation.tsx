import React, {useEffect, useState} from 'react';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import {
  MyFlightScreen,
  QuestionsBookingScreen,
  CalendarBookingScreen,
  SignUpScreen,
  PassengersScreen,
} from '../screens';

// Parámetros que se enviaran a las diferentes pantallas
interface RouteParams {}

const Stack = createStackNavigator();

export interface PropsNavigator extends StackScreenProps<any, any> {}

export const StackNavigation = () => {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

  useEffect(() => {
    auth().onAuthStateChanged(activeUser => {
      setUser(activeUser);
      if (initializing) {
        setInitializing(false);
      }
    });
  }, [initializing]);

  if (initializing) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {user ? (
          <Stack.Screen name="Home" component={UserStack} />
        ) : (
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const UserStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MyFlight"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MyFlight" component={MyFlightScreen} />
      <Stack.Screen
        name="QuestionsBooking"
        component={QuestionsBookingScreen}
      />
      <Stack.Screen name="CalendarBooking" component={CalendarBookingScreen} />
      <Stack.Screen name="Passengers" component={PassengersScreen} />
    </Stack.Navigator>
  );
};
