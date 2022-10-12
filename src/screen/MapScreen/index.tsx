import React from 'react';
import {Platform} from 'react-native';
import MapView, {PROVIDER_GOOGLE, PROVIDER_DEFAULT} from 'react-native-maps';

const MapViewComponent = () => {
  const defaultProvider =
    Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE;

  return (
    <MapView
      provider={defaultProvider}
      style={{flex: 1}}
      initialRegion={{
        latitude: -8.417485,
        longitude: -37.033997,
        latitudeDelta: 0.005,
        longitudeDelta: 0.002,
      }}
    />
  );
};

export default MapViewComponent;
