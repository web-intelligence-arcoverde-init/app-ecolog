import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Alert, Button} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export default function GetCurrentLocationExample() {
  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      pos => {
        setPosition(JSON.stringify(pos));
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true},
    );
    setLoading(false);
  };

  const [position, setPosition] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getCurrentPosition();
  }, []);

  return (
    <View>
      {!loading && (
        <Text>
          <Text style={styles.title}>Current position: </Text>
          {position}
        </Text>
      )}
      <Button title="Get Current Position" onPress={getCurrentPosition} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
  },
});
