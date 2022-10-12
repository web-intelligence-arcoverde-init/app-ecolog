import BottomSheet from '@gorhom/bottom-sheet';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Platform, Image, Dimensions, View, Text} from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  PROVIDER_DEFAULT,
  Marker,
} from 'react-native-maps';

import {MakerIcons} from '../../assets/icons/index';

import {Button} from '../../components';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = -8.417485;
const LONGITUDE = -37.033997;
const LATITUDE_DELTA = 0.0322;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const MapViewComponent = () => {
  const defaultProvider =
    Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE;

  const [points, setPoints] = useState<any>([]);

  const [showButtonAddPointCollect, setShowButtonAddPointCollect] =
    useState(false);

  const onChangeVisibilityButtonAddPointCollect = () => {
    setShowButtonAddPointCollect(true);
  };

  const addNewMarker = (location: any) => {
    if (!showButtonAddPointCollect) {
      return;
    } else {
      const items = [
        'empresa',
        'ferro',
        'organico',
        'papel',
        'plastico',
        'pontoColeta',
        'vidro',
      ];

      let type = items[Math.floor(Math.random() * items.length)];

      const newPoint = {
        coordinate: location,
        type,
      };

      setPoints((oldPoins: any) => [...oldPoins, newPoint]);

      setShowButtonAddPointCollect(false);
    }
  };

  return (
    <>
      <MapView
        provider={defaultProvider}
        style={{flex: 1}}
        onPress={e => {
          showButtonAddPointCollect && addNewMarker(e.nativeEvent.coordinate);
        }}
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}>
        {points.map((marker: any) => (
          <Marker key={marker.key} coordinate={marker.coordinate}>
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

      {!showButtonAddPointCollect && (
        <View style={{position: 'absolute', bottom: 80, right: 18, width: 60}}>
          <Button
            icon="plus"
            iconColor="#fff"
            rightIcon
            onPress={() => {
              onChangeVisibilityButtonAddPointCollect();
            }}
          />
        </View>
      )}
    </>
  );
};

import {FlatListExampleScreen} from './BottomSheet';
//MapViewComponent
export default MapViewComponent;
