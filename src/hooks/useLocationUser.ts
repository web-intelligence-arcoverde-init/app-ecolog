import React, {useEffect} from 'react';

import Geolocation from '@react-native-community/geolocation';
import {Alert} from 'react-native';

import {setCoordinateUser} from '../store/reducer/user';
import {useDispatch} from 'react-redux';

export const getUserLocation = () => {
  const dispatch = useDispatch();

  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      pos => {
        dispatch(
          setCoordinateUser({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          }),
        );
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true},
    );
  };

  return {getCurrentPosition};
};
