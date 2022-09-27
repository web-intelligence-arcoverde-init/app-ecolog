import {StyleSheet, View} from 'react-native';
import Lottie from 'lottie-react-native';

import RecycleAnimation from '../../assets/animations/recycle.json';
import {useEffect, useRef, useState} from 'react';

export const SplashScreen = ({navigation}) => {
  const redirect = () => {
    setTimeout(function () {
      navigation.navigate('IntroScreen');
    }, 4000);
  };

  {
    redirect();
  }

  return (
    <View style={styles.container}>
      <Lottie source={RecycleAnimation} speed={0.09} autoPlay />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
