import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';

import {RowComponent, TextComponent} from '.';

interface Props {
  city: string;
  country: string;
  destinationCity: string;
  destinationCountry: string;
  date: string;
  passengers: string;
}

const CardComponent = (props: Props) => {
  const {city, country, destinationCity, destinationCountry, date, passengers} =
    props;

  return (
    <TouchableOpacity onPress={() => {}} activeOpacity={0.8}>
      <View style={stylesCard.cardContainer}>
        <RowComponent
          styles={{
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <View style={{alignContent: 'center', alignItems: 'center'}}>
            <TextComponent text={city} font="bold" size={25} />
            <TextComponent text={country} />
          </View>

          <IonIcon name="airplane" size={30} color={'#5f73ed'} />

          <View style={{alignContent: 'center', alignItems: 'center'}}>
            <TextComponent text={destinationCity} font="bold" size={25} />
            <TextComponent text={destinationCountry} />
          </View>
        </RowComponent>

        <View
          style={{
            height: 0.5,
            width: '100%',
            backgroundColor: 'gray',
            marginVertical: 15,
          }}
        />

        <RowComponent
          styles={{
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <View style={{alignContent: 'center', alignItems: 'center'}}>
            <TextComponent text={date} font="bold" />
          </View>

          <View style={{alignContent: 'center', alignItems: 'center'}}>
            <TextComponent text={`${passengers} passengers`} font="bold" />
          </View>
        </RowComponent>
      </View>
    </TouchableOpacity>
  );
};

export const stylesCard = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: 'auto',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    display: 'flex',
    padding: 12,
    marginBottom: 12,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default CardComponent;
