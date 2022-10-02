import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import Swiper from 'react-native-swiper';
import {useSelector} from 'react-redux';

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Roboto-Regular',
  },
});

import Example from './Example';
import ExampleImportSvg from './ExampleImportSvg';
import ExampleIcon from './ExampleIcon';

export const IntroScreen = () => {
  const exampleHook = useSelector(state => state);

  console.log(exampleHook);

  return (
    <Swiper style={styles.wrapper} showsButtons={true}>
      <Example />
      <View style={styles.slide2}>
        <Text style={styles.text}>Beautiful</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>And simple</Text>
      </View>
      <ExampleImportSvg />
      <ExampleIcon />
    </Swiper>
  );
};
