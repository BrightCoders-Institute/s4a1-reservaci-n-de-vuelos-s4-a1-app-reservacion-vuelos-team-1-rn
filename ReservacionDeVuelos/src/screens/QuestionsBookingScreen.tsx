import {View} from 'react-native';
import React, {useState} from 'react';
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
  const [currentLocation, setCurrentLocation] = useState<string>('');
  const [destination, setDestination] = useState<string>('');

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

          <InputBookingComponent
            placeholder="Select location"
            onChangeText={value => setCurrentLocation(value)}
          />
        </SectionComponent>

        <SectionComponent>
          <TextComponent
            text={'Where will you be \nflying to?'}
            font="bold"
            size={32}
            color="black"
          />

          <InputBookingComponent
            placeholder="Select location"
            onChangeText={value => setDestination(value)}
          />
        </SectionComponent>

        <SectionComponent>
          {/* habilitar botón si los campos están llenos, sino, bloquearlo */}
          <RowComponent
            onPress={() =>
              navigation.navigate('CalendarBooking', {
                location: currentLocation,
                destination: destination,
              })
            }
            styles={[globalStyles.buttonEnable, {marginTop: 190}]}>
            <TextComponent text="Next" font="bold" color="white" />
          </RowComponent>
        </SectionComponent>
      </ContainerComponent>
    </View>
  );
};

export default QuestionsBookingScreen;
