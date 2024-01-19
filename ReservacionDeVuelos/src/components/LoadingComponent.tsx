import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

interface Props {
  size: number;
  color?: string;
}

const LoadingComponent = (props: Props) => {
  const {size, color} = props;

  return (
    <View style={stylesLoading.loadingContainer}>
      <ActivityIndicator size={size} color={color ?? '#5f73ed'} />
    </View>
  );
};

export const stylesLoading = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingComponent;
