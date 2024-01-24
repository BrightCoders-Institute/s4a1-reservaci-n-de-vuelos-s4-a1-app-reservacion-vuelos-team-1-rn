import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextStyle,
} from 'react-native';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';

import {RowComponent, TextComponent} from '.';

const CardComponent = () => {
  return (
    <TouchableOpacity onPress={() => {}} activeOpacity={0.8}>
      <View style={stylesCard.cardContainer}>
        <RowComponent
          styles={{
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <View style={{alignContent: 'center', alignItems: 'center'}}>
            <TextComponent text="BEG" font="bold" size={25} />
            <TextComponent text="Serbia" />
          </View>

          <IonIcon name="airplane" size={30} color={'#5f73ed'} />

          <View style={{alignContent: 'center', alignItems: 'center'}}>
            <TextComponent text="AMS" font="bold" size={25} />
            <TextComponent text="Netherlands" />
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
            <TextComponent text="September 3, 2020" font="bold" />
          </View>

          <View style={{alignContent: 'center', alignItems: 'center'}}>
            <TextComponent text="2 passengers" font="bold" />
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
