import React from 'react';
import {View, StyleSheet} from 'react-native';
import ExampleSvg from '../../assets/images/example.svg';

export default class SvgExample extends React.Component {
  render() {
    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          {alignItems: 'center', justifyContent: 'center'},
        ]}>
        <ExampleSvg width={120} height={40} />
      </View>
    );
  }
}
