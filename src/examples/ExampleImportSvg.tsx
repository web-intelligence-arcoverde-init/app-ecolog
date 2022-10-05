import React from 'react';
import {View, StyleSheet} from 'react-native';
import ExampleSvg from '../../assets/images/example.svg';

import {scale} from '../utils';

export default class SvgExample extends React.Component {
  render() {
    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          {alignItems: 'center', justifyContent: 'center'},
        ]}>
        <ExampleSvg width={scale(290)} height={scale(253)} />
      </View>
    );
  }
}
