import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
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

const CalendarBookingScreen = ({route, navigation}: PropsNavigator) => {
  const [selectedDate, setSelectedDate] = useState('');

  //@ts-ignore
  const {location, destination} = route.params;

  const locationArray = location.split(', ');
  const destinationArray = destination.split(', ');

  const city = locationArray[0];
  const country = locationArray[1];

  const destinationCity = destinationArray[0];
  const destinationCountry = destinationArray[1];

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
          <CardComponent
            city={city}
            country={country}
            destinationCity={destinationCity}
            destinationCountry={destinationCountry}
            date={selectedDate}
            passengers={'0'}
          />
        </SectionComponent>
        <SectionComponent>
          <TextComponent
            text="Select date"
            font="bold"
            size={32}
            color="black"
          />

          <CalendarComponent onSelectDate={date => setSelectedDate(date)} />
        </SectionComponent>

        <RowComponent
          onPress={() =>
            navigation.navigate('Passengers', {
              city: city,
              country: country,
              destinationCity: destinationCity,
              destinationCountry: destinationCountry,
              date: selectedDate,
            })
          }
          styles={[globalStyles.buttonEnable, {marginTop: 0}]}>
          <TextComponent text="Next" font="bold" color="white" />
        </RowComponent>
      </ContainerComponent>
    </View>
  );
};

export default CalendarBookingScreen;
