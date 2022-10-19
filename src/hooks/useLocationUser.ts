import Geolocation from '@react-native-community/geolocation';
import {Alert, Dimensions} from 'react-native';

import {setCoordinateUser} from '../store/reducer/user';
import {useDispatch} from 'react-redux';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0122;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export const getUserLocation = () => {
  const dispatch = useDispatch();

  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      pos => {
        dispatch(
          setCoordinateUser({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }),
        );
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true},
    );
  };

  return {getCurrentPosition};
};
