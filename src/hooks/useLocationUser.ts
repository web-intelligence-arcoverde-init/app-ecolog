import React, {useEffect, useState} from 'react';

import Geolocation from '@react-native-community/geolocation';
import {Alert} from 'react-native';

export const getUserLocation = () => {
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

  console.log(position);

  useEffect(() => {
    setLoading(true);
    getCurrentPosition();
  }, []);

  return {getCurrentPosition, position};
};
