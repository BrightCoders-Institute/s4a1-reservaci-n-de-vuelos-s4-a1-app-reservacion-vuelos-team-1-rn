import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  ContainerComponent,
  FabComponent,
  TextComponent,
  SectionComponent,
  InputBookingComponent,
  RowComponent,
  CalendarComponent,
  CardComponent,
} from '../components';
import {PropsNavigator} from '../routes/StackNavigation';
import {globalStyles} from '../theme/globalStyle';

const CalendarBookingScreen = ({navigation}: PropsNavigator) => {
  return (
    <View>
      <FabComponent
        iconName="chevron-back"
        iconSize={30}
        iconColor="#606eee"
        onPress={() => navigation.goBack()}
        styles={{top: 10, left: 16}}
      />
      <ContainerComponent styles={{paddingVertical: 60}} isScroll>
        <CardComponent />
        <SectionComponent>
          <TextComponent
            text="Select date"
            font="bold"
            size={32}
            color="black"
          />
        </SectionComponent>

        <SectionComponent>
          <CalendarComponent />
        </SectionComponent>

        <RowComponent
          onPress={() => navigation.navigate('Passengers')}
          styles={[globalStyles.buttonEnable, {marginTop: 0}]}>
          <TextComponent text="Next" font="bold" color="white" />
        </RowComponent>
      </ContainerComponent>
    </View>
  );
};

export default CalendarBookingScreen;
