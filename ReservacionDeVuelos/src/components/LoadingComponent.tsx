import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

interface Props {
  size: number;
  color?: string;
  isScreen?: boolean;
}

const LoadingComponent = (props: Props) => {
  const {size, color, isScreen} = props;

  return (
    <>
      <View style={{flex: 1}}></View>
    </>
  );
};

export const stylesLoading = StyleSheet.create({
  screen: {
    flex: 1,
    zIndex: 99,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingComponent;
