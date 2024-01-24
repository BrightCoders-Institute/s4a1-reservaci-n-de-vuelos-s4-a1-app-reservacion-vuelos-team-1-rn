import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  ContainerComponent,
  TextComponent,
  FabComponent,
  SectionComponent,
  CardComponent,
} from '../components';
import {PropsNavigator} from './../routes/StackNavigation';

const MyFlightScreen = ({navigation}: PropsNavigator) => {
  return (
    <View style={{flex: 1}}>
      <FabComponent
        isFab
        iconName="plus"
        onPress={() => navigation.navigate('Booking')}
        styles={{bottom: 25, right: 25, position: 'absolute'}}
      />
      <ContainerComponent>
        <TextComponent
          text="My Flights"
          color="#5f73ed"
          font="bold"
          size={30}
        />
        <SectionComponent>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </SectionComponent>
      </ContainerComponent>
    </View>
  );
};

export default MyFlightScreen;
