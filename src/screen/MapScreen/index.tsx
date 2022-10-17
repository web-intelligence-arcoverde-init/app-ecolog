import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Platform, Image, Dimensions, View} from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  PROVIDER_DEFAULT,
  Marker,
} from 'react-native-maps';
import {useAppSelector, useAppDispatch} from '../../hooks/useReduxHooks';

import {
  createNewPointRequest,
  changeVisibilityButtonAddNewPointCollect,
} from '../../store/reducer/pointCollectRecycling';

import {MakerIcons} from '../../assets/icons/index';

import {Button} from '../../components';
const {width, height} = Dimensions.get('window');

import BottomSheet, {useBottomSheetSpringConfigs} from '@gorhom/bottom-sheet';

const ASPECT_RATIO = width / height;
const LATITUDE = -8.417485;
const LONGITUDE = -37.033997;
const LATITUDE_DELTA = 0.0322;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const MapViewComponent = ({navigation}) => {
  const defaultProvider =
    Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE;

  const {points, visibleButtonAddNewPointCollect} = useAppSelector(
    state => state.pointCollectRecycling,
  );

  const dispatch = useAppDispatch();

  const onChangeVisibilityButtonAddPointCollect = () => {
    dispatch(changeVisibilityButtonAddNewPointCollect());
    navigation.navigate('CreatePointColletScreen');
  };

  const addNewMarker = (location: any) => {
    if (visibleButtonAddNewPointCollect) {
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

      const user = {name: 'Lucas'};

      dispatch(
        createNewPointRequest({
          id: points.length,
          name: '',
          type,
          telphoneNumber: '87998093765',
          datails: 'details',
          location,
          status: 'Aguardando',
          user,
        }),
      );

      dispatch(changeVisibilityButtonAddNewPointCollect());
    }
  };

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);
  const animationConfigs = useBottomSheetSpringConfigs({
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 500,
  });

  const [enableContentPanningGesture, setEnableContentPanningGesture] =
    useState(true);

  const [enableHandlePanningGesture, setEnableHandlePanningGesture] =
    useState(true);

  const handleSheetChange = useCallback(index => {
    // eslint-disable-next-line no-console
    console.log('handleSheetChange', index);
  }, []);
  const handleSheetAnimate = useCallback(
    (fromIndex: number, toIndex: number) => {
      // eslint-disable-next-line no-console
      console.log('handleSheetAnimate', `from ${fromIndex} to ${toIndex}`);
    },
    [],
  );

  const handleSnapPress = useCallback(index => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);
  const handleExpandPress = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);
  const handleCollapsePress = useCallback(() => {
    bottomSheetRef.current?.collapse();
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);
  const handleEnableContentPanningGesturePress = useCallback(() => {
    setEnableContentPanningGesture(state => !state);
  }, []);
  const handleEnableHandlePanningGesturePress = useCallback(() => {
    setEnableHandlePanningGesture(state => !state);
  }, []);

  return (
    <>
      <MapView
        provider={defaultProvider}
        style={{flex: 1}}
        onPress={e => {
          !visibleButtonAddNewPointCollect &&
            addNewMarker(e.nativeEvent.coordinate);
        }}
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}>
        {points.map((marker: any) => (
          <Marker
            key={marker.key}
            coordinate={marker.location}
            onPress={() => console.log(marker)}>
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

      {visibleButtonAddNewPointCollect && (
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

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        animationConfigs={animationConfigs}
        animateOnMount={true}
        enablePanDownToClose
        enableContentPanningGesture={enableContentPanningGesture}
        enableHandlePanningGesture={enableHandlePanningGesture}
        onChange={handleSheetChange}
        onAnimate={handleSheetAnimate}>
        <Button
          icon="plus"
          iconColor="#fff"
          rightIcon
          onPress={() => handleClosePress()}
        />
      </BottomSheet>
    </>
  );
};

export default MapViewComponent;
