import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useLocationUser} from '../../hooks/useLocationUser';

export default function GetCurrentLocationExample() {
  const {getCurrentPosition, position} = useLocationUser();

  useEffect(() => {
    getCurrentPosition();
  }, []);

  return (
    <View>
      <Text>
        <Text style={styles.title}>Current position: </Text>
        {position}
      </Text>

      <Button title="Get Current Position" onPress={getCurrentPosition} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
  },
});
