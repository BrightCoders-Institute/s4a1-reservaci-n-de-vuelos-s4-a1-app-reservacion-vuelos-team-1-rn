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
import useAuth from '../hooks/auth/useAuth';

const MyFlightScreen = ({navigation}: PropsNavigator) => {
  const {handleSignOut} = useAuth();

  return (
    <View style={{flex: 1}}>
      <FabComponent
        isFab
        iconName="plus"
        onPress={() => navigation.navigate('QuestionsBooking')}
        styles={{bottom: 25, right: 25, position: 'absolute'}}
      />
      <ContainerComponent>
        <FabComponent
          iconName="log-out-outline"
          iconSize={20}
          onPress={handleSignOut}
          styles={{top: 8, right: 16, position: 'absolute'}}
        />
        <TextComponent
          text="My Flights"
          color="#5f73ed"
          font="bold"
          size={30}
        />
        <SectionComponent>
          <TextComponent text="No flights booked yet!" size={23} />
        </SectionComponent>
      </ContainerComponent>
    </View>
  );
};

export default MyFlightScreen;
