import React from 'react';
import {View, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

export default class SvgExample extends React.Component {
  render() {
    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          {alignItems: 'center', justifyContent: 'center'},
        ]}>
        <Icon name="github" size={32} color="#000" />
      </View>
    );
  }
}
