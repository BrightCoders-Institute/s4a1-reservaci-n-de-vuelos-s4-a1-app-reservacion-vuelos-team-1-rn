import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {ReactNode} from 'react';

interface Props {
  children: ReactNode;
  styles?: StyleProp<ViewStyle>;
  onPress?: () => void;
  disabled?: boolean;
}

const RowComponent = (props: Props) => {
  const {children, onPress, styles, disabled} = props;

  return onPress ? (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      onPress={onPress}
      style={[stylesRow.rowCenter, stylesRow.shadow, styles]}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={[stylesRow.rowCenter, styles]}>{children}</View>
  );
};

export const stylesRow = StyleSheet.create({
  rowCenter: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
});

export default RowComponent;
