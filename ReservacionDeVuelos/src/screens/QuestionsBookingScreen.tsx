import {View} from 'react-native';
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

const QuestionsBookingScreen = ({navigation}: PropsNavigator) => {
  return (
    <View style={{flex: 1}}>
      <FabComponent
        iconName="chevron-back"
        iconSize={30}
        iconColor="#606eee"
        onPress={() => navigation.goBack()}
        styles={{top: 10, left: 16}}
      />
      <ContainerComponent styles={{paddingVertical: 50}} isScroll>
        <SectionComponent>
          <TextComponent
            text={'Where are you\nnow?'}
            font="bold"
            size={32}
            color="black"
          />

          <InputBookingComponent placeholder="Select location" />
        </SectionComponent>

        <SectionComponent>
          <TextComponent
            text={'Where will you be \nflying to?'}
            font="bold"
            size={32}
            color="black"
          />

          <InputBookingComponent placeholder="Select location" />
        </SectionComponent>

        <SectionComponent>
          {/* habilitar botón si los campos estan llenos, sino, bloquearlo */}
          <RowComponent
            onPress={() => navigation.navigate('CalendarBooking')}
            styles={[globalStyles.buttonEnable, {marginTop: 190}]}>
            <TextComponent text="Next" font="bold" color="white" />
          </RowComponent>
        </SectionComponent>
      </ContainerComponent>
    </View>
  );
};

export default QuestionsBookingScreen;
