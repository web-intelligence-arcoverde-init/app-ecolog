import React, {useState} from 'react';
import {Platform, View, Text, Image, Dimensions} from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  PROVIDER_DEFAULT,
  Marker,
} from 'react-native-maps';

import {MakerIcons} from '../../assets/icons/index';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const MapViewComponent = () => {
  const defaultProvider =
    Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE;

  const [markers, setMakers] = useState([
    {
      color: '#000',
      coordinate: {latitude: -8.417434, longitude: -37.033957},
      type: 'organico',
    },
    {
      color: '#000',
      coordinate: {latitude: -8.416642, longitude: -37.034134},
      type: 'empresa',
    },

    {
      color: '#000',
      coordinate: {latitude: -8.416776, longitude: -37.035696},
      type: 'vidro',
    },
  ]);

  return (
    <MapView
      provider={defaultProvider}
      style={{flex: 1}}
      initialRegion={{
        latitude: -8.417485,
        longitude: -37.033997,
        latitudeDelta: 0.005,
        longitudeDelta: 0.002,
      }}>
      {markers.map((marker: any) => (
        <Marker
          key={marker.key}
          coordinate={marker.coordinate}
          pinColor={marker.color}>
          <Image
            source={MakerIcons[marker.type]}
            style={{
              padding: 10,
              height: 48,
              width: 48,
            }}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default MapViewComponent;
