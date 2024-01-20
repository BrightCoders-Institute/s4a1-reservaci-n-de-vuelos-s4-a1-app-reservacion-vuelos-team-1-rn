import React from 'react';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {BookingScreen, MyFlightScreen, SignUpScreen} from '../screens';

const Stack = createStackNavigator();

export interface PropsNavigator extends StackScreenProps<any, any> {}

export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="MyFlight" component={MyFlightScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
