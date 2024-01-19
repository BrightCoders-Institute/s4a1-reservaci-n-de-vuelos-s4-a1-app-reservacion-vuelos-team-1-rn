import {View, Text, StyleProp, ViewProps, StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';

interface Props {
  children: ReactNode;
  styles?: StyleProp<ViewProps>;
}

const SectionComponent = (props: Props) => {
  const {children, styles} = props;

  return <View style={[stylesSect.container, styles]}>{children}</View>;
};

export const stylesSect = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
});

export default SectionComponent;
