import {View} from 'react-native';
import React, {useState} from 'react';
import WheelyComponent from '../components/WheelyComponent';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  CardComponent,
  ContainerComponent,
  FabComponent,
  RowComponent,
  SectionComponent,
  TextComponent,
} from '../components';

import {PropsNavigator} from '../routes/StackNavigation';
import {globalStyles} from '../theme/globalStyle';

const PassengersScreen = ({route, navigation}: PropsNavigator) => {
  const [selectedNumber, setSelectedNumber] = useState('');

  //@ts-ignore
  const {city, country, destinationCity, destinationCountry, date} =
    route.params;

  return (
    <View style={{flex: 1}}>
      <FabComponent
        iconName="chevron-back"
        iconSize={30}
        iconColor="#606eee"
        onPress={() => navigation.goBack()}
        styles={{top: 10, left: 16}}
      />
      <ContainerComponent styles={{flex: 1, marginTop: 50}}>
        <SectionComponent>
          <CardComponent
            city={country}
            country={country}
            destinationCity={destinationCity}
            destinationCountry={destinationCountry}
            date={date}
            passengers={selectedNumber}
          />
        </SectionComponent>
        <SectionComponent>
          <TextComponent
            text={'How many \npassengers?'}
            font="bold"
            size={40}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 25,
              borderColor: '#e9e9e9',
              borderBottomWidth: 1,
              borderTopWidth: 1,
              marginVertical: 35,
              height: 55,
            }}>
            <Icon name="caret-forward" size={25} style={{color: '#606eee'}} />
            <WheelyComponent
              onSelectNumber={number => setSelectedNumber(number)}
            />
            <Icon name="caret-back" size={25} style={{color: '#606eee'}} />
          </View>
        </SectionComponent>

        <SectionComponent>
          <RowComponent
            disabled={selectedNumber === '0'}
            onPress={() => navigation.popToTop()}
            styles={[globalStyles.buttonEnable, {bottom: 0}]}>
            <TextComponent text="Confirm" font="bold" color="white" />
          </RowComponent>
        </SectionComponent>
      </ContainerComponent>
    </View>
  );
};

export default PassengersScreen;
