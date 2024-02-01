import React from 'react';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {
  MyFlightScreen,
  QuestionsBookingScreen,
  CalendarBookingScreen,
  SignUpScreen,
} from '../screens';

interface RouteParams {}

const Stack = createStackNavigator();

export interface PropsNavigator extends StackScreenProps<any, any> {}

export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={UserStack} />
        {/* Condicional para entrar al home, si el usuario existe 
        
          User ? () : ()
        
        */}

        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const UserStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="CalendarBooking" component={CalendarBookingScreen} />
      <Stack.Screen
        name="QuestionsBooking"
        component={QuestionsBookingScreen}
      />

      <Stack.Screen name="MyFlight" component={MyFlightScreen} />
    </Stack.Navigator>
  );
};
