import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';

interface Props {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
  backgroundColor?: string;
  onPress: () => void;

  // Posicionamiento
  styles?: StyleProp<ViewStyle>;
  isFab?: boolean;
}

const FabComponent = (props: Props) => {
  const {
    iconName,
    onPress,
    backgroundColor,
    iconColor,
    iconSize,
    styles,
    isFab,
  } = props;

  return (
    <>
      {isFab ? (
        <View style={styles}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={[stylesFab.plusButton, stylesFab.shadow]}>
            <IconEntypo name={iconName} size={40} color="white" />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPress}
          style={[stylesFab.fabButton, stylesFab.shadow, styles]}>
          <IonIcon
            name={iconName}
            size={iconSize}
            color={iconColor}
            style={{right: 1}}
          />
        </TouchableOpacity>
      )}
    </>
  );
};

export const stylesFab = StyleSheet.create({
  fabButton: {
    width: 40,
    zIndex: 100,
    aspectRatio: 1 / 1,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: 'white',
  },
  plusButton: {
    width: 65,
    aspectRatio: 1 / 1,
    borderRadius: 100,
    backgroundColor: '#606df0',
    zIndex: 100,

    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#090ef2',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 4,
  },
});

export default FabComponent;
