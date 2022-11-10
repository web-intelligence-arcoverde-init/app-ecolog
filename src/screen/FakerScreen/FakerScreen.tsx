import * as React from 'react';
import {StyleSheet, View} from 'react-native';

import {Button} from '../../components';

export const FakerScreen = () => {
  return (
    <View style={styles.container}>
      <Button variant="disabled">Eu</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    padding: 20,
  },
});
