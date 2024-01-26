import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import {TextComponent} from '.';

interface Props {
  size: number;
  color?: string;
  isScreen?: boolean;
}

const LoadingComponent = (props: Props) => {
  const {size, color, isScreen} = props;

  return (
    <View style={stylesLoading.loadingContainer}>
      <View style={{backgroundColor: '#21252a', padding: 15, borderRadius: 10}}>
        <ActivityIndicator size={size} color={color} />
        <TextComponent
          text="Signing up..."
          color="#5f73ed"
          font="bold"
          size={23}
        />
      </View>
    </View>
  );
};

export const stylesLoading = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    zIndex: 100,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'center',
  },
});
export default LoadingComponent;
