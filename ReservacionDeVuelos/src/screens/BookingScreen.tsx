import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  ContainerComponent,
  FabComponent,
  TextComponent,
  SectionComponent,
  InputBookingComponent,
  RowComponent,
} from '../components';
import {PropsNavigator} from '../routes/StackNavigation';
import {globalStyles} from '../theme/globalStyle';

const BookingScreen = ({navigation}: PropsNavigator) => {
  return (
    <View>
      <FabComponent
        iconName="chevron-back"
        iconSize={30}
        iconColor="#606eee"
        onPress={() => navigation.goBack()}
        styles={{top: 10, left: 16}}
      />
      <ContainerComponent styles={{paddingVertical: 50}} isScroll>
        <SectionComponent>
          <TextComponent text="Where are you now?" font="bold" size={32} />

          <InputBookingComponent placeholder="Select location" />
        </SectionComponent>

        <SectionComponent>
          <TextComponent
            text="Where will you be flying to?"
            font="bold"
            size={32}
          />

          <InputBookingComponent placeholder="Select location" />
        </SectionComponent>

        <RowComponent onPress={() => {}} styles={globalStyles.buttonDisable}>
          <TextComponent text="Next" font="bold" color="white" />
        </RowComponent>
      </ContainerComponent>
    </View>
  );
};

export default BookingScreen;
