import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {ContainerComponent} from '.';

const LogoComponent = () => {
  return (
    <View style={[stylesLogo.container]}>
      <Image
        source={require('../assets/images/avion-logo.webp')}
        style={stylesLogo.logo}
      />
    </View>
  );
};

export const stylesLogo = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 200,
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default LogoComponent;
