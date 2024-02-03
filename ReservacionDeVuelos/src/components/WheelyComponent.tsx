import React, {useState} from 'react';
import {StyleProp, Text, TextStyle, ViewStyle} from 'react-native';
import WheelPicker from 'react-native-wheely';

interface Props {
  styles?: StyleProp<TextStyle>;
  itemStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  itemTextStyle?: StyleProp<TextStyle>;
}

function WheelyComponent(props: Props) {
  const {styles, itemStyle, containerStyle, itemTextStyle} = props;

  const [selected, setSelected] = useState('1');

  const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  return (
    <WheelPicker
      selectedIndex={0}
      options={options}
      itemTextStyle={{fontSize: 28, color: 'black'}}
      onChange={number => setSelected(number.toString())}
    />
  );
}

export default WheelyComponent;
