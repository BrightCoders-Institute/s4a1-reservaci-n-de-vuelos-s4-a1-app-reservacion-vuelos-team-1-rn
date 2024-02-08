import React, {useEffect, useState} from 'react';
import {StyleProp, Text, TextStyle, ViewStyle} from 'react-native';
import WheelPicker from 'react-native-wheely';

interface Props {
  styles?: StyleProp<TextStyle>;
  itemStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  itemTextStyle?: StyleProp<TextStyle>;
  onSelectNumber: (number: string) => void;
}

function WheelyComponent(props: Props) {
  const {styles, itemStyle, containerStyle, itemTextStyle, onSelectNumber} =
    props;

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  useEffect(() => {
    onSelectNumber(selectedIndex.toString());
  }, [selectedIndex, onSelectNumber]);

  return (
    <WheelPicker
      itemTextStyle={{fontSize: 28, color: 'black'}}
      selectedIndex={selectedIndex}
      options={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']}
      onChange={index => setSelectedIndex(index)}
    />
  );
}

export default WheelyComponent;
